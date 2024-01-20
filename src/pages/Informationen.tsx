
import { Slide } from 'react-slideshow-image';
import { Link } from "react-router-dom";


const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ];
  
  
  export default function Informationen() {
    return (
      <div className="info--container">
        <h1 className="info--header">INFORMATIONEN</h1>
  
        <Slide
          indicators={true}
          slidesToScroll={1}
          slidesToShow={1}
          responsive={responsiveSettings}
        >
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/fahren.jpg)`
              }}
            >
              <span>
                <Link
                  to="allgemeines"
                >
                  Allgemeines
                </Link>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/klassen.png)`
              }}
            >
              <span>
                <Link
                  to="fahrerlaubnisklassen"
                >
                  Fahrerlaubnisklassen
                </Link>
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/theorie.jpg)`
              }}
            >
              <span>
              <Link
                  to="theorie"
                >
                   Theorieunterricht
              </Link> 
              </span>
            </div>
          </div>  
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/17.jpg)`
              }}
            >
              <span>
              <Link
                  to="ab17"
                >
                  Begleitetes Fahren ab 17
              </Link> 
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/schwein.jpg)`
              }}
            >
              <span>
              <Link
                  to="preise"
                >
                  Preise & Abrechnung
              </Link> 
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(https://raw.githubusercontent.com/Qinisfighting/fahrschule-am-gymnasium/main/src/assets/fragen.jpg)`
              }}
            >
              <span>
              <Link
                  to="fragen"
                >
                  Fragen üben
              </Link> 
              </span>
            </div>
          </div>
        
        </Slide>
        
      </div>
    );
  }
  