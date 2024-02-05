import { useState, ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom";

import { User } from "../../types";


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
        setTimeout(() => {
            setLoading(false);
            alert("You are logged in.");
            localStorage.setItem("isHostLogged", "true");
            navigate(0)
        
        }, 2000);
        // Add your login logic here

        
        
        } catch (error) {
        alert("Something went wrong, please try again later.");
        }
    }
    
    return (
        !isHostLogged?
        <div className="w-screen bg-mystone-100 flex flex-col justify-start items-center h-view  pt-12 pb-12 my-20">
            <h2 className="text-2xl text-mystone-600 tracking-wide">Login with Google Account</h2>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6 px-2">
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
                <p className="">Don't have an account? Register <a className="text-myblue-400 underline"  href="https://accounts.google.com/lifecycle/steps/signup/name?dsh=S1560796583:1707149383761034&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en-GB&theme=glif&TL=AHNYTIS_4q3kRngpqkz2e9rwymQVB8p753Us0OmaWnWj3LF1PuCR3Dh2GL2GdgfI" target="_blank">here</a></p>
            </form>
        </div>
        :
        <h1 className="w-screen h-view pt-20 pb-20 bg-mystone-100 flex flex-col justify-start items-center h-view  pt-12 pb-12 my-20">Hi Ellen! </h1>
    )
}
