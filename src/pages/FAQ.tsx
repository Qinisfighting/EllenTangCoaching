import { FaqBanner } from "../components/Banners";
import { Link } from "react-router-dom"



export default function FAQ() {
    
    return (
      <div className="w-screen">
        <div className="w-11/12 mx-auto xl:w-5/6">
          <h1 className="text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:my-20 mx-auto">FAQ</h1>
          <div className="w-5/6 mx-auto lg:mb-10 pb-4">  
              <h3>Do you offer coaching face-to-face or online?</h3>
              <p>I primarily offer coaching sessions over the phone or online via Skype/Zoom. However, face-to-face coaching is also available in the Greenwich (London) area for an additional fee to cover venue hiring costs.</p>
              <h3>How much do you charge?</h3>
              <p>If you choose to pay for individual sessions, it is £100 ($145) per 50-min session. If you choose the Monthly Package, it is £500 ($700) per month. Fees are slightly higher for face-to-face sessions to cover venue hiring costs. You can find out more about each option on the <Link to="/work/pricing" className="text-myblue-400 underline">Pricing</Link> page.</p>
              <h3>What types of coaching do you offer?</h3>
              <p className="text-xl text-left">I offer the following coaching services:</p>
              <div className="flex flex-col justify-between items-start md:flex-row py-4">
                    <ul className="list-disc px-4 text-left">      
                        <li className="ml-10">Personal life coaching</li>
                        <li className="ml-10">Professional life coaching</li>
                        <li className="ml-10">Confidence coaching</li>
                        <li className="ml-10">Self-esteem coaching</li>             
                    </ul>
                    <ul className="list-disc px-4 text-left"> 
                        <li className="ml-10">Emotional intelligence coaching</li>
                        <li className="ml-10">Depression coaching</li>     
                        <li className="ml-10">Money mindset coaching</li>
                        <li className="ml-10">Career development coaching</li>               
                    </ul>
                    <ul className="list-disc px-4 text-left">           
                        <li className="ml-10">Career change coaching</li>
                        <li className="ml-10">Self-awareness coaching</li>
                        <li className="ml-10">Relationship coaching</li>
                        <li className="ml-10">Past trauma coaching</li>
                    </ul>
              </div>
              <h3>How long does the coaching process take?</h3>
              <p className="text-xl text-left">It depends on what you want to achieve and where you are in your own growth and development process. Often times we do not know what areas require our attention unless we allow ourselves to freely explore, reflect and go through a series of trials and errors. I am fully supportive of you in this process by providing a safe and stimulating environment for you to do so. The coaching process is completely open-ended and you are not asked to commit to any number of sessions. You can decide to continue or to stop at any time.</p>
              <p className="text-xl text-left">If it is a very specific area that you want to work on, such as planning for a career change or adapting after a recent relocation, you can usually expect to start seeing changes in that area with six sessions.</p>
              <h3>What is your cancellation policy?</h3>
              <p className="text-xl text-left">Sessions may be cancelled without charge provided that 24 hours’ notice is given. If preferred, and if time is available, clients can reschedule their session to a different time. Cancellation with less than 24 hours’ notice will be charged a full session’s fee.</p>
              <h3>What are you like as a coach?</h3>
              <p className="text-xl text-left">Engaging, accepting and stimulating. I know from my own experience how effective and empowering it is for a person to be able to talk freely and truthfully in front of someone they trust and respect. I will listen to you attentively and intuitively, ask you questions that help you engage with your own thoughts and ideas at a deep and truthful level. I will be your thought partner who takes your desires seriously and explore with you how you can best meet them, using my knowledge, experience and intuition. I do not follow a set programme or plan and I do not focus on quick fixes alone. The coaching process is all about you as an individual, your most authentic self and what he or she really wants. I will be doing all that is within my power to provide an environment where you feel unconditionally accepted and encouraged to be who you are.</p>
              <p className="text-xl text-left">To help me best work with you, I encourage all my clients to begin their journey of growth by taking a <a className="text-myblue-400 underline" href="https://www.16personalities.com/free-personality-test" target="_blank">free personality test</a>. You can also check out my results here and learn more <Link to="/about/infp" className="text-myblue-400 underline">about me</Link>.</p>
              <h3>What areas of my life can I seek your coaching for?</h3>
              <p className="text-xl text-left">I want you to feel free to explore any topics with me as you wish. I take a very holistic approach to coaching, which I believe is the most effective, if not necessary, way to make real changes in one’s life. This approach has proven very effective in my own experience where profound growth and realisation jumped out of places where I never thought of checking. I hope to help you find that too. So whether you are feeling stuck in a career that no longer inspires you, going through a difficult breakup, or struggling with memories or desires of which you feel ashamed, I want to assure you that you will have my undivided attention if it is something you are ready to explore with me.</p>
              <h3>Can I talk about very personal or private issues with you?</h3>
              <p className="text-xl text-left">Absolutely. There is no limit to what you can discuss with me. I firmly believe that all of our ‘issues’ are intertwined and likely rooted in the same source. For example, someone struggling to speak up at work is often also finding it difficult to reject a family member asking for a favour, or a date he/she has no interest in. Or more deeply, the struggle with assertiveness in every aspect of an individual’s life is likely connected to the same source, which is most often their family background and interaction with their guardians in the early years.</p>
              <p className="text-xl text-left">Often times, the ‘issues’ that we consider as particularly private or even ’embarrassing’ are the very key to profound discoveries and growth, not least because we rarely get to talk about them. So I hope to build long-lasting trust and connection with you so that you feel comfortable exploring these topics with me. I believe that human beings best thrive in a non-judgmental space and I will do everything I can to be your co-creator of such a space.</p>
              <p className="text-xl text-left">Our sessions are 100% confidential. I follow the Association for Coaching <a className="text-myblue-400 underline" href="https://www.associationforcoaching.com/page/AboutCodeEthics" target="_blank" >Global Code of Ethics</a>. You can also find the confidential provision in my <Link className="text-myblue-400 underline" to="practice">Practice Policy</Link> here.</p>
              <h3>Do you focus on the past or the future?</h3>
              <p className="text-xl text-left">Both. I do not adopt a particular method or school of thought. We explore anything in your past, present or future that may be relevant. However, you will often find that our experiences in the present time stem from experiences in our formative years. So it is usually helpful to examine our past.</p>
              <h3>What types of clients do you take on?</h3>
              <p className="text-xl text-left">I welcome all those who want to explore paths that are better aligned with their authentic selves. You may be a corporate professional or executive longing to embrace your creative side more, a graduate struggling to make a career choice, a divorcee building a fulfilling single life, or a retiree looking to start a new chapter of your life. No matter where you are in life, if you are ready to grow and to become more aware of who you are through coaching, I’d be delighted to hear from you.</p>
              <h3>Do you provide coaching in languages other than English?</h3>
              <p className="text-xl text-left">Yes, I speak native Mandarin and can certainly do so if preferred. See my <Link to="/cn" className="text-myblue-400 underline">中文心理咨询</Link> page for more details.</p>
          </div>
        </div>
        
        <FaqBanner/>
      </div>
    );
  }
  