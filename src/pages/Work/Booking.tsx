import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import close from "../../assets/close.png";


interface FormData {
  name: string;
  email: string;
  mobile: string;
  when: string;
  location: string;
  message: string;
  privacy: boolean;
}

export default function Booking() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",  
    location: "",
    when: "",
    message: "",
    privacy: false,
  })
  
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  useEffect(() => emailjs.init("lBynZS3CdHPm1Mbhm"), []);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    console.log(formData);
  }
  async function handleSubmit(e: FormEvent){
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      mobile: "",     
      location: "",
      when: "",
      message: "",
      privacy: false,
    });
    const serviceId = "service_nvk45hx";
    const templateId = "template_j3h0ztq";
 
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        location: formData.location,
        when: formData.when,
        message: formData.message,
        privacy: formData.privacy,
    });
     
      alert("Your message has been sent successfully. I will get back to you as soon as possible.");
      
    } catch (err) {
      console.log(err);
      alert("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  }


    return (
      <div className="w-full flex flex-col justify-center items-center relative">
        <h1 className="text-3xl lg:text-4xl text-myblue-400 border-y w-1/2 my-12 lg:w-1/2 lg:my-20 mx-auto">Book Appointment</h1>
        <div className="w-11/12 mb-10 px-4 lg:w-full mx-auto lg:mb-16">  
           <p className="text-xl">My Standard Appointment Hours: </p>
           <i className="text-xl underline">Mon – Fri: 17:00 – 20:00 (UK)</i>
           <p className="text-xl mt-4 text-left">50 mins per session. </p>
           {/* <button className="mx-auto btn-next mb-6 lg:mb-8 text-lg w-fit"><a href="https://calendly.com/ellentang" target="_blank">Book Your Discovery Session</a></button> */}
           <button className="mx-auto btn-next mb-6 lg:mb-8 text-lg w-fit" onClick={()=>setShowCalendar(true)}>Book Your Discovery Session</button>
           { showCalendar && <div className="flex justify-center items-end mx-auto" >
              <div className="z-10 absolute top-0 left-0" id="loading">Loading</div>
              <button className="z-30 p-10 md:-mb-6 text-2xl" onClick={()=>setShowCalendar(false)}><img src={close} width="25px"></img></button>
              <iframe src="https://calendly.com/ellentang"  className="absolute w-11/12 md:w-3/5 h-1/3 border-2 border-mystone-100 rounded-lg bg-white drop-shadow-lg z-20" ></iframe>
           </div>  
           }  
           <p className="text-xl text-left"> Appointments outside these hours may be available. Please fill in the form below to ask me directly.</p>           
        </div>
        <form className="w-11/12 p-8 lg:w-full mx-auto bg-mystone-100 lg:p-20 mb-28" onSubmit={handleSubmit}>
          
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-myblue-900 text-lg">Name*</label>
            <input
              type="text"
              placeholder=""
              className="h-12 p-4 text-xl border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={(e) => (e.target.value = "")}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-myblue-900 text-lg">Email*</label>
            <input
              type="email"
              placeholder=""
              className="h-12 p-4 text-xl border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={(e) => (e.target.value = "")}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="mobile" className="text-myblue-900 text-lg">Mobile*</label>
            <input
              type="text"
              placeholder=""
              className="h-12 p-4 text-xl border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              onFocus={(e) => (e.target.value = "")}
              required
            />
            </div>
            <div className="flex flex-col mb-4">
            <label htmlFor="location" className="text-myblue-900 text-lg">Your location (This would help us work out the time difference.)*</label>
            <input
              type="text"
              placeholder=""
              className="h-12 p-4 text-xl border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
              name="location"
              value={formData.location}
              onChange={handleChange}
              onFocus={(e) => (e.target.value = "")}
              required
            />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="when" className="text-myblue-900 text-lg">When would you like to book an appointment?</label>
              <input
                type="date"
                placeholder=""
                className="w-full h-12 p-4 text-xl border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
                name="when"
                value={formData.when}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-myblue-900 text-lg">Anything else you would like me to know?</label>
              <textarea     
                placeholder=""
                className="h-40 p-4 text-xl border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")} 
              />
              <div className="my-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 mr-2 text-myblue-900 border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  />
                  <label htmlFor="privacy">
                    <span className="text-myblue-900 text-lg">I have read and agree to the <Link to="/privacy" className="text-myblue-400 underline">Privacy Policy</Link> and <Link to="/terms" className="text-myblue-400 underline">Terms of Service</Link>.</span>
                  </label>
              </div>
          
              <button 
              className="btn-next mt-8 lg:mt-16 text-lg w-full"
              disabled={loading}
              >
                Submit
            </button>
            </div>    
        </form>
      </div>
    );
  }