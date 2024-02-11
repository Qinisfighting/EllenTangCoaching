import { useState, ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { User } from "../../types";

function Greeting({name}: {name: string}) {
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
            <button className="btn-next mt-8 w-28 tracking-wide"><Link to="/blog">Blog ➢</Link></button>
            <button className="btn-next mt-8 w-28 tracking-wide" onClick={() => {localStorage.removeItem("isHostLogged"); window.location.reload();}}>Logout</button>
          </div>
      </div>
    );
  }


export default function Login() {
    const [user, setUser] = useState<User>({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);
    const isHostLogged = JSON.parse(localStorage.getItem("isHostLogged")!) 
    const navigate = useNavigate();

    // useEffect(() => { 
    //         window.location.reload();  
    // }, [location])


    function handleChange(
        e: ChangeEvent<HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setUser((prev) => ({
        ...prev,
        [name]: value
        }));
        console.log(user);
    }
    
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
    
        setUser({
        email: "",
        password: ""
        });
    
        try {
        setLoading(true);
        //   setTimeout(() => {
            setLoading(false);
            // alert("You are logged in.");
            localStorage.setItem("isHostLogged", "true"); 
            navigate(0)      
        //   }, 1000);
        // Add your login logic here       
        } catch (error) {
        alert("Something went wrong, please try again later.");
        } finally {
            navigate("/blog")
        }
    }
    
    return (
        !isHostLogged?
        <div className="w-screen bg-mystone-100 flex flex-col justify-start items-center h-view  pt-12 pb-12 my-20">
            <h2 className="text-2xl text-mystone-600 md:tracking-wide px-6 md:px-0">Login with Google Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6 px-6 md:px-0">
                <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                className="border border-mystone-700 p-2 m-2 w-full rounded-md"
                />
                <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                className="border border-mystone-700 p-2 m-2 w-full rounded-md"
                />
                <button
                type="submit"
                className="btn-next w-full"
                >
                {loading ? "Loading..." : "Login"}
                </button>
                <p className="">Don't have an Google account? Register <a className="text-myblue-400 underline"  href="https://support.google.com/mail/answer/56256?hl=en" target="_blank">here</a></p>
            </form>
        </div>
        :
        <Greeting name="Ellen" />
        
    )
}
