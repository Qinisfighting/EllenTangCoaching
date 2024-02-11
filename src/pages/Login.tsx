// import { useState, ChangeEvent, FormEvent } from "react"
import { useEffect } from "react"
import { Link, useNavigate, redirect } from "react-router-dom";
import  GoogleButton from "react-google-button";
import { UserAuth } from '../context/AuthContext';
// import { User } from "../../types";



function Greeting({name, handleSignOut, handleHostLogin}: {name: string; handleSignOut: () => void; handleHostLogin: () => void}) {
    const date = new Date();
    const hours = date.getHours();
    // console.log(hours);
    let timeOfDay;
    if (hours >= 4 && hours < 12) {
      timeOfDay = "morning";
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon";
    } else if (hours >= 17 && hours < 20) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }
    return (
      <div className="w-screen h-fit my-20 text-center bg-mystone-100 py-28 flex flex-col justify-center items-center">
          <h2 className="px-6">Good {timeOfDay}, {name}! You are now logged in.</h2>
          <div className="flex gap-4">
            <button className="btn-next mt-8 w-28 tracking-wide" onClick={() => name==="Yanqin Hu-Qualmann" && handleHostLogin()}><Link to="/blog">Blog ➢</Link></button>
            <button className="btn-next mt-8 w-28 tracking-wide" onClick={() => { handleSignOut(); localStorage.setItem("isHostLogged", "false"); localStorage.setItem("isGastLogged", "false"); window.location.reload();}}>Logout</button>
          </div>
      </div>
    );
  }


export default function Login() {

  const { googleSignIn, logOut, user }: { googleSignIn: () => Promise<void>, logOut: () => Promise<void>,user: any } = UserAuth() as { googleSignIn: () => Promise<void>, logOut: () => Promise<void>, user: any };
  
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleHostLogin = () => {
    localStorage.setItem("isHostLogged", "true");
    redirect("/blog");
  };

  useEffect(() => {
    if (user != null) {
      navigate("/login");
    }
  }, [user]);
 
    
    return (
        user === null ?
        <div className="w-screen  flex flex-col justify-start items-center h-view  pt-24 pb-12 my-24">
            <GoogleButton onClick={()=>{ handleGoogleSignIn(); 
                                         localStorage.setItem("isGastLogged", "true");  
                                        //  user.email === "yq.qualmann@gmail.com" && localStorage.setItem("isHostLogged", "true");    
                                        }}
                                        />     
            <p className="px-8 py-10">Don't have an Google account? Register <a className="text-myblue-400 underline"  href="https://support.google.com/mail/answer/56256?hl=en" target="_blank">here</a></p>
        </div>
        :
        <Greeting name={user?.displayName} handleSignOut={handleSignOut} handleHostLogin={handleHostLogin}/>
        
    )
}
