import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import contact from "../assets/contact.jpg";



interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
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
        <div className="w-screen xl:p-16 xl:relative xl:w-1/2 mt-4 xl:mt-10">      
            <img src={contact} className="w-screen h-auto object-cover brightness-50 drop-shadow-xl"></img>
            <Link to="/work/booking"><button className="w-screen rounded-none xl:w-max xl:absolute xl:bottom-28 xl:right-32 btn-next xl:btn-trans">Schedule Appointment ➣</button></Link>    
            <div className="p-10 xl:p-0 xl:absolute bottom-1/3 left-1/4 xl:text-mystone-100">    
                <h2 className="pl-1">Contact & Hours</h2>  
                <br />       
                <a className="text-myblue-300 text-lg md:text-xl" href="https://www.google.com/maps/place/Greenwich,+London,+Vereinigtes+K%C3%B6nigreich/@51.487395,-0.0366549,13z/data=!3m1!4b1!4m6!3m5!1s0x47d8a9cea79975f3:0x1470a7a162e4ca6c!8m2!3d51.4933675!4d0.0098214!16zL20vMG5xdjE?entry=ttu" target="_blank">📍Greenwich, London, United Kingdom</a>
                <p className="md:text-xl text-left">✉️: <a className="text-myblue-300 underline" href="mailto:">ellen@ellentangcoaching.com</a></p>   
                <p className="md:text-xl text-left">☎️: (UK) +44 7753137614 / (US) +1 917-982-2022</p>     
                <p className="md:text-xl text-left">🕒 Mon – Fri: 17:00 – 20:00 (UK)</p>
                <p className="md:text-xl text-left">🕒 Sat – Sun: 10:00 – 18:00 (UK)</p>
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
