import { Link } from "react-router-dom";
import workingme from '../../assets/workingme.webp';
import depth from '../../assets/depth.webp';
import trust from '../../assets/trust.webp';
import connect from '../../assets/connect.webp';
import partner from '../../assets/partner.webp';

export default function General() {
    
    return (
      <div className="w-full">
        <h1 className="text-3xl lg:text-5xl text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:my-20 mx-auto">Work With Me</h1>
        <div className="w-11/12 lg:w-3/4 mx-auto mb-36 flex flex-col gap-8">
            <h2 className='pl-4 text-3xl lg:text-4xl lg:pl-0'>What is it like to work with me?</h2>
            <div className="mx-auto flex flex-col justify-between items-center gap-4 lg:flex-row">
              <div className="order-2 lg:order-1 lg:w-2/3 w-11/12">
                <p>The absolute key to effective coaching is the relationship between you and me. The quality of our relationship is therefore more important than the techniques or principles embedded in the process itself.</p>
                <p>When working with you, my ultimate objective is to build a lasting relationship which you can rely upon and make use of whenever the need arises. Whether you are looking for long-term support, short-term solutions, or prefer to contact me on an ad hoc basis, our relationship will be a safe place where you can always turn to.</p>
              </div>
              <img src={workingme} alt="working-me"  className="w-5/6 order-1 lg:order-2 lg:w-1/4 rounded-full my-4"/> 
            </div>
            <div className="mx-auto flex flex-col justify-between items-top gap-4 lg:gap-8 lg:flex-row">
              <img src={depth} alt="depth"  className="w-11/12 lg:w-1/3  lg:pr-4 my-4 mx-auto object-cover lg:mt-6"/>       
              <div className="lg:w-2/3 w-11/12 mx-auto">
                <h2 className='pr-4 text-3xl lg:text-4xl lg:pl-0'>Depth</h2>
                <p>I have a wide range of personal and professional experiences, which makes me highly empathetic and intuitive when it comes to understanding the human psyche. Working with me means that our exploration into your authentic self does not stop at the surface. It is a much more fascinating and rewarding journey into your conscious and unconscious mind, where you can gain real understanding of who you are and what drives you forward.</p>
                <p>I offer valuable insights drawing from my journey of recovery and growth as a traumatised child, a highly sensitive person who learnt to live peacefully with the struggles of ‘fitting in’, a woman who has lived both miserably and happily being either single or in a relationship, a first-generation immigrant who moved across continents alone, a corporate professional with first-hand experiences in climbing the career ladder and in making a career change, and as an entrepreneur and investor with a deep interest in the business world.</p>
                <p>What makes my offering unique and valuable is the depth and width of our collaboration. We will not stop at finding a practical answer alone, because the real drive behind your pursuits and desires are much more important to real growth and development. And what motivates you in both your personal and professional lives are often linked to the same key to your authentic self. As our partnership will be of a long-term nature, you can call upon me whenever you feel the desire to explore a particular area in depth. You are in control of your own growth every step of the way.</p>
                <p>If you are interested in my life story, you can read more <Link to="/about" className="underline text-myblue-400">here</Link>.</p>  
                <Link to="/work/booking"><button className="btn-next float-right my-12 lg:my-16 text-md ">Book Your Discovery Session ➣</button></Link>
              </div>          
            </div>
            <div className="mx-auto flex flex-col justify-between items-top gap-4 lg:gap-8 lg:flex-row">             
              <div className="order-2 lg:order-1 lg:w-2/3 w-11/12 mx-auto">
                <h2 className='text-3xl lg:text-4xl lg:pl-0'>Trust</h2>
                <p>Trust is a multi-layered concept. Whilst you may trust someone with your money, you wouldn’t necessarily trust them with your vulnerability. It is in those to whom we can show our true selves that we place the deepest trust.</p>
                <p>Genuine trust stands the test of time. As trust is the foundation of our coaching relationship, I will do everything in my power to build the trust between us. As the trust grows and solidifies, our relationship will become more powerful for your growth and development.</p>
                <p>I assign no blame or judgement on any human behaviours and desires. Anything that you feel is significant can be explored with complete confidentiality and acceptance from me. I know this quality can only be demonstrated, not told. So if we haven’t met before, please feel free to take up my offer of a <Link to="/work/booking" className="underline text-myblue-400">discovery session</Link> and decide whether you could trust me.</p>
                <Link to="/work/booking"><button className="btn-next float-left my-12 lg:my-16 text-md ">Book Your Discovery Session ➣</button></Link>
              </div> 
              <img src={trust} alt="trust"  className="w-11/12  order-1 lg:order-2 lg:w-1/3 lg:pl-4 my-4 object-cover mx-auto"/>         
            </div>
            <div className="mx-auto flex flex-col justify-between items-top gap-4  lg:gap-8 lg:flex-row">
              <img src={connect} alt="connect"  className="w-11/12  lg:w-1/3 my-4 lg:pr-4 object-cover mx-auto"/>       
              <div className="lg:w-2/3 w-11/12 mx-auto">
                <h2 className='pr-4 text-3xl lg:text-4xl lg:pl-0'>Connection</h2>
                <p>All human beings share the same needs and emotions, albeit sometimes in different forms. I believe that willingness is the fundamental key to building a connection. This is why I approach every coaching relationship with an open heart and mind.</p>
                <p>You are special in your own right. I want to get to know your uniqueness and connect with you at the deepest level, so that you feel strong in our relationship which would in turn empower you to reach new heights. When you are standing on solid ground, jumping high becomes easy. A deep connection does wonders to your strength.</p>
                <Link to="/work/booking"><button className="btn-next float-right my-12 lg:my-16 text-md ">Book Your Discovery Session ➣</button></Link>
              </div>          
            </div>
            <div className="mx-auto flex flex-col justify-between items-top gap-4 lg:gap-8 lg:flex-row ">             
              <div className="order-2 lg:order-1 lg:w-2/3 w-11/12 mx-auto">
                <h2 className='text-3xl lg:text-4xl lg:pl-0'>Partnership</h2>
                <p>The power of partnering is at the centre of everything I do.</p>
                <p>To an extent, I don’t like the term ‘coach’ because it is not always clear as to exactly what it means to each person, and sometimes it can be seen as a role in which one is holding themselves out as more skilled or knowledgeable than the other.</p>
                <p>My mission is all about providing a relationship which you can use for your benefit. Within our relationship as partners, you as a whole are understood, supported, and accepted unconditionally. I believe that this is the most powerful way in which every individual can grow to love their authentic selves and find creative and effective solutions for any problems standing in their way.</p>
                <p>When you feel ready to form such a partnership with me, I will be delighted to hear from you.</p>
                <Link to="/work/booking"><button className="btn-next float-left my-12 lg:my-16 text-md ">Book Your Discovery Session ➣</button></Link>
              </div> 
              <img src={partner} alt="partner"  className="w-11/12  order-1 lg:order-2 lg:w-1/3 my-4 lg:pl-4 object-cover mx-auto"/>         
            </div>
        </div>
      </div>
    );
  }