// import { useState, useEffect, ChangeEvent, FormEvent } from "react"
// import { Link } from "react-router-dom";
// import emailjs from "@emailjs/browser";



// interface FormData {
//   name: string;
//   email: string;
//   content: string;
//   nummer: string;
//   isDatenschutz: boolean;
// }

export default function Contact() {
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   email: "",
  //   content: "",
  //   nummer: "",
  //   isDatenschutz: false
  // });
  // const [loading, setLoading] = useState(false);
  // useEffect(() => emailjs.init("lBynZS3CdHPm1Mbhm"), []);

  // function handleChange(
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   const { name, value, type, checked } = e.target as HTMLInputElement;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "checkbox" ? checked : value
  //   }));
  //   console.log(formData);
  // }

  // async function handleSubmit(e: FormEvent) {
  //   e.preventDefault();

  //   setFormData({
  //     name: "",
  //     email: "",
  //     content: "",
  //     nummer: "",
  //     isDatenschutz: true
  //   });

  //   const serviceId = "service_nvk45hx";
  //   const templateId = "template_xdkkhvl";
  //   try {
  //     setLoading(true);
  //     await emailjs.send(serviceId, templateId, {
  //       name: formData.name,
  //       email: formData.email,
  //       content: formData.content,
  //       nummer: formData.nummer,
  //       isDatenschutz: formData.isDatenschutz
  //     });
  //     alert("Danke für Ihre Nachricht. Wir melden uns umgehend.");
  //   } catch (error) {
  //     console.log(error, `loading states: ${loading}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <div className="kontakt-container">
      Contact Form
      {/* <div className="kontakt-text">
        <div className="kontakt-text-content">
          <h1>FAHRSCHULE AM GYMNASIUM</h1>
          <div className="kontakt-text-content--box">
            <div className="k--filialen">
              <div className="filiale">
              
                <a
                  href="https://www.google.com/maps/dir//54.2900595,10.8933194/@54.2899994,10.8109576,12z?entry=ttu"
                  target="_blank"
                >
                  <img src={location2} alt="navi" className="navi" />
                </a>
              
                <div>
                  <h2>Filiale Oldenburg</h2>
                  <hr />
                  <p>Göhler Straße 32</p>
                  <p>23758 Oldenburg i.H.</p>
                </div>
              </div>
              <div className="filiale">
                <a
                  href="https://www.google.com/maps/dir//Eutiner+Str.+11,+23738+Lensahn/@54.2198363,10.8023197,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b27f24f7c78c67:0xc481290815469c3e!2m2!1d10.8847198!2d54.2198644?entry=ttu"
                  target="_blank"
                >
                  <img src={location2} alt="navi" className="navi" />
                </a>
                <div>
                  <h2>Filiale Lensahn</h2>
                  <hr />
                  <p>Eutiner Straße 11</p>
                  <p>23738 Lensahn</p>
                </div>
              </div>
            </div>
            <div className="k--filialen">
              <div className="filiale">
                <img src={person} alt="person" className="other-icons" />

                <div>
                  <h2>Kontakt</h2>
                  <hr />
                  <h3>Andreas Walk</h3>
                  <p>Mobil: 0171/1261672</p>
                  <p>Tel.: 04361/494108</p>
                  <p>Fax: 04361/494821</p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@a-walk.de"
                      target="_blank"
                      style={{ textDecoration: "underline" }}
                    >
                      info@a-walk.de
                    </a>
                  </p>
                </div>
              </div>
              <div className="filiale">
                <img src={time} alt="time" className="other-icons" />
                <div>
                  <h2>Auskunft und Anmeldung</h2>
                  <hr />
                  <h3>Öffnungszeiten:</h3>
                  <p>Oldenburg: Di. & Do. 18:00 - 20:30</p>
                  <p>Lensahn: Mo. & Mi. 18:00 - 19:00</p>
                  <h3>Präsenz-Theorieunterricht:</h3>
                  <p>Oldenburg: Di. & Do. 19:00 - 20:30</p>
                  <p>Lensahn: Mo. & Mi. 19:00 - 20:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="kontakt-form">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name*"
            className="form--input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={(e) => (e.target.value = "")}
            required
          />
          <input
            type="email"
            placeholder="Email*"
            className="form--input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={(e) => (e.target.value = "")}
            required
          />
          <input
            type="text"
            placeholder="Rückrufnummer"
            className="form--input"
            name="nummer"
            value={formData.nummer}
            onChange={handleChange}
            onFocus={(e) => (e.target.value = "")}
          />
          <textarea
            placeholder="Nachricht*"
            className="textarea"
            name="content"
            value={formData.content}
            onChange={handleChange}
            onFocus={(e) => (e.target.value = "")}
            required
          />
          <div className="form-bottom">
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={formData.isDatenschutz}
                onChange={handleChange}
                name="isDatenschutz"
                required
              />
              <label htmlFor="isDatenschutz">
                Ich habe die <Link to="/datenschutz">Datenschutzhinweise</Link>{" "}
                zur Kenntnis genommen und bin mit ihnen einverstanden. Erteilte
                Einwilligungen kann ich jederzeit widerrufen.
              </label>
            </div>
            <button className="form--submit">SENDEN</button>
          </div>
        </form>
      </div> */}
    </div>
  );
}
