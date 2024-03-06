import loader from '../assets/loader.svg';


export default function Loader() {
    return (
      <div className="absolute z-50 h-full w-full flex items-start justify-center pt-20">    
          <img src={loader} alt="loader" className="w-20 h-20 md:w-24 md:h-24" /> 
      </div>
    )
}