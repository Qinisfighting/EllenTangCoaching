/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.jpg";
import email from "../assets/email.png";
import navi from "../assets/navi.png";
import time from "../assets/time.png";
import phone from "../assets/phone.png";
import { ContactFormData } from "../../types";




export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("lBynZS3CdHPm1Mbhm"), []);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    console.log(formData);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setFormData({
       name: "",
       email: "",
       phone: "",
       message: "",
       privacy: false
    });

    const serviceId = "service_nvk45hx"; 
    const templateId = "template_razi6la";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        privacy: formData.privacy
      });
     alert("Your message has been sent successfully. I will get back to you as soon as possible.");
    } catch (error) {
      alert("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <h1 className="text-4xl lg:text-5xl text-myblue-400  w-1/2 mt-8 lg:w-1/2 lg:mt-20 mx-auto">Contact</h1> 
      <div className="flex flex-col justify-center items-center xl:flex-row xl:items-start mx-auto xl:bg-mystone-100 mb-20">
        <div className="w-screen xl:p-8 2xl:p-16 xl:relative xl:w-2/3 2xl:w-1/2 mt-4 xl:mt-20 2xl:mt-10">      
            <img src={contact} className="w-screen h-auto object-cover brightness-50 drop-shadow-xl"></img>
            <Link to="/work/booking"><button className="w-screen rounded-none xl:w-max xl:absolute xl:bottom-16 2xl:bottom-32 xl:right-32 btn-next xl:btn-trans">Schedule Appointment ➣</button></Link>    
            <div className="p-10 xl:p-0 xl:absolute bottom-1/4 2xl:bottom-1/3 left-1/4 xl:text-mystone-100"> 
                <div className="pl-1 xl:mt-4 socializer a sr-32px sr-circle sr-opacity sr-icon-white sr-pad"><span className="sr-facebook"><a href="https://www.facebook.com/ellentangcoaching" target="_blank" rel="noreferrer" title="Facebook"><i className="fab fa-facebook-f"></i></a></span><span className="sr-youtube"><a href="https://www.youtube.com/channel/UCj60CsEEzE_WdepPNLjtR1A" target="_blank" rel="noreferrer" title="Youtube"><i className="fab fa-youtube"></i></a></span><span className="sr-linkedin"><a href="https://www.linkedin.com/in/ellenltang/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a></span></div> 
                <h2 className="pl-1 text-3xl 2xl:text-4xl">Contact & Hours</h2>  
                <br />       
                <div className="flex items-center">
                  <img className="w-7 h-7 p-1 mr-2 xl:bg-mystone-100 xl:rounded-full" src={navi} alt="navi"/>
                  <a className="text-lg md:text-xl underline" href="https://www.google.com/maps/place/Greenwich,+London,+Vereinigtes+K%C3%B6nigreich/@51.487395,-0.0366549,13z/data=!3m1!4b1!4m6!3m5!1s0x47d8a9cea79975f3:0x1470a7a162e4ca6c!8m2!3d51.4933675!4d0.0098214!16zL20vMG5xdjE?entry=ttu" target="_blank" rel="noreferrer">Greenwich, London, United Kingdom</a>
                </div>
                <div className="flex items-center">
                  <img className="w-7 h-7 p-1 mr-2 xl:bg-mystone-100 xl:rounded-full" src={email} alt="email"/>
                  <p className="md:text-xl text-left"><a className="underline" href="mailto:">ellen@ellentangcoaching.com</a></p>  
                </div>
                <div className="flex items-center">
                  <img className="w-7 h-7 p-1 mr-2 xl:bg-mystone-100 xl:rounded-full" src={phone} alt="phone"/>
                  <p className="md:text-xl text-left">(UK) +44 7753137614 / (US) +1 917-982-2022</p>     
                </div>
                <div className="flex items-center">
                  <img className="w-7 h-7 p-1 mr-2 xl:bg-mystone-100 xl:rounded-full" src={time} alt="time"/>
                  <p className="md:text-xl text-left">Mon – Fri: 17:00 – 20:00 (UK)</p>
                </div>
                <div className="flex items-center">
                  <img className="w-7 h-7 p-1 mr-2 xl:bg-mystone-100 xl:rounded-full" src={time} alt="time"/>
                  <p className="md:text-xl text-left">Sat – Sun: 10:00 – 18:00 (UK)</p>
                </div>
            </div>
            
        </div>
  
        <form className="w-full p-10 mx-auto mb-8 xl:w-1/2 xl:py-20 xl:pr-10 bg-mystone-100" onSubmit={handleSubmit}>      
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
              <label htmlFor="phone" className="text-myblue-900 text-lg">Phone*</label>
              <input
                type="text"
                placeholder=""
                className="h-12 p-4 text-xl border-2 border-mystone-200 rounded-md focus:outline-none focus:border-mystone-300"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={(e) => (e.target.value = "")}
                required
              />
              </div>
            
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-myblue-900 text-lg">Message</label>
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
                className="btn-next mt-8 lg:mt-4 text-xl w-full"
                disabled={loading}
                >
                  Send
              </button>
              </div>    
          </form> 
         
      </div>
      
    </div>
  );
}
