import tüv from '../assets/tüv.png';
import oh from '../assets/oh.png';
import bf17 from '../assets/bf17.svg';
import adac from '../assets/ADAC.png';


export default function Links() {
    return (
      <div className="info-container">
        <h1>LINKS</h1>
        <div className="info--imgs">
          <a
            href="https://www.tuev-nord.de/de/privatkunden/verkehr/fuehrerschein/fahrschueler-app/"
            target="_blank"
          >
            <fieldset>
              <legend>Führerschein App</legend>
              <img src={tüv} alt="tüv" />
            </fieldset>
          </a>
          <a
            href="https://www.kreis-oh.de/B%C3%BCrger-Kreis-Verwaltung/Auto-Verkehr/F%C3%BChrerscheinstelle/"
            target="_blank"
          >
            <fieldset>
              <legend>Führerscheinstelle Ostholstein</legend>
              <img src={oh} alt="oh" />
            </fieldset>
          </a>
          <a href="https://www.bf17.de/" target="_blank">
            <fieldset>
              <legend>Begleitetes Fahren ab 17</legend>
              <img src={bf17} alt="bf17" />
            </fieldset>
          </a>
          <a href="https://www.adac.de/" target="_blank">
            <fieldset>
              <legend>Allgemeiner Deutscher Automobil-Club</legend>
              <img src={adac} alt="ADAC" />
            </fieldset>
          </a>
        </div>
      </div>
    );
  }
  