import loader from '../assets/loader.svg';


export default function Loader() {
    return (
        <div className="absolute z-50 h-full w-full flex items-start justify-center pt-20">
        <div className="flex items-start justify-center">
          <img src={loader} alt="loader" className="w-24 h-24" />
        </div>
      </div>
    )
}