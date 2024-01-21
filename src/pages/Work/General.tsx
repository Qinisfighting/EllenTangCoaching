import workingme from '../../assets/workingme.webp';
import depth from '../../assets/depth.webp';
import trust from '../../assets/trust.webp';
import connet from '../../assets/connet.webp';
import partner from '../../assets/partner.webp';

export default function General() {
    
    return (
      <div className="w-full">
        <h1 className="text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:my-20 mx-auto">Work With Me</h1>
        <div className="w-11/12 lg:w-3/4 mx-auto mb-36">
            <h2>What is it like to work with me?</h2>
            <div className="mx-auto flex flex-col justify-between items-center gap-4 lg:flex-row">
              <div className="order-2 lg:order-1 lg:w-2/3 w-11/12">
                <p className="text-xl">The absolute key to effective coaching is the relationship between you and me. The quality of our relationship is therefore more important than the techniques or principles embedded in the process itself.</p>
                <p className="text-xl">When working with you, my ultimate objective is to build a lasting relationship which you can rely upon and make use of whenever the need arises. Whether you are looking for long-term support, short-term solutions, or prefer to contact me on an ad hoc basis, our relationship will be a safe place where you can always turn to.</p>
              </div>
              <img src={workingme} alt="working-me"  className="w-5/6 order-1 lg:order-2 lg:w-1/4 rounded-full my-8"/> 
            </div>
        </div>
      </div>
    );
  }