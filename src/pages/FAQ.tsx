import { FaqBanner } from "../components/Banners";
import { Link } from "react-router-dom"



export default function FAQ() {
    
    return (
      <div className="w-screen">
        <div className="w-11/12 mx-auto xl:w-5/6">
          <h1 className="text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:my-20 mx-auto">FAQ</h1>
          <div className="w-11/12 mx-auto lg:mb-10 pb-4"> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">What is life coaching?</summary>   
             <p>You may have heard of many definitions of life coaching. The truth is, life coaching is most accurately defined by the relationship between you and your coach. So, here I’d like to do my best to describe how I view life coaching, in the hope that it gives you an idea of what kind of relationship you can have with me.</p>
             <p>For me, life coaching is a powerful tool to improve your quality of life through a strong partnership. Just like a sports coach brings out the best of an athlete, a life coach enables you to reach your full potential in every aspect of your life. It may be a lasting romantic relationship that you want, or perhaps it’s a career where your natural talents are more recognised and rewarded. By exploring your authentic self with an experienced and intuitive coach, you will release your inner-most creative energy. And by ‘creative’, I mean to think and dream wildly and freely. When you are free to be as creative as you naturally are, the joy of life is at your fingertips.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">How is life coaching different from talking to a friend?</summary>   
             <p>Different from an ordinary friendship, conversations with a life coach are always centred around you. At each session, you are free to talk about anything that is on your mind. In fact, the more free you can be, the better. Because the purpose of life coaching is to explore who you are at the most authentic level. You will find that the process is like peeling an onion. There are many layers to get through before we can unfold your natural self, especially if you are a sensitive and gifted person. This is difficult to achieve with a friend or family member, because they often have their own opinions and judgments which they are not in a position to put aside completely for your benefit.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">What are you like as a coach?</summary>
             <p>Engaging, accepting and stimulating. I know from my own experience how effective and empowering it is for a person to be able to talk freely and truthfully in front of someone they trust and respect. I will listen to you attentively and intuitively, ask you questions that help you engage with your own thoughts and ideas at a deep and truthful level. I will be your thought partner who takes your desires seriously and explore with you how you can best meet them, using my knowledge, experience and intuition. I do not follow a set programme or plan and I do not focus on quick fixes alone. The coaching process is all about you as an individual, your most authentic self and what he or she really wants. I will be doing all that is within my power to provide an environment where you feel unconditionally accepted and encouraged to be who you are.</p>
             <p>To help me best work with you, I encourage all my clients to begin their journey of growth by taking a <a className="text-myblue-400 underline" href="https://www.16personalities.com/free-personality-test" target="_blank" rel="noreferrer">free personality test</a>. You can also check out my results here and learn more <Link to="/about/infp" className="text-myblue-400 underline">about me</Link>.</p>   
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">Why did you become a life coach?</summary>   
             <p>I believe that life coaching is the most effective way to empower individuals. I believe that every one of us already has what it takes to create the life we want. The reason why we have not reached our full potential, is due to the barriers and blockages that we have both consciously and unconsciously carried with us from childhood. As adults, we now have the power to break down those obstacles and reach for the kind of fulfilment that satisfies us.</p>
             <p>On my path to self-actualisation, I have read many self-help books, listened to many life gurus’ talks and followed many mentors’ teachings. They all helped in one way or another, but nothing was as powerful as having a committed coaching relationship to call upon.</p>
             <p>Personal development has always been my passion, starting with my natural curiosity about human psychology. I deeply understand and have huge compassion for any forms of human suffering, whether it manifests itself in vocational discontentment or existential depression.</p>
             <p>I feel a large sense of gratification as an active participant in another human being’s journey of growth and development.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">What is your coaching style?</summary>   
             <p>It depends. I don’t have a set agenda or an ‘one-size-fits-all’ programme to follow. I believe in processes that is completely tailored to the individual I am working with.</p>
             <p>Timing is also a deciding factor as to which coaching style works best. At times you may need some gentle questioning and active encouragement from me, whereas other times may call for more direct explanation and role-playing.</p>
             <p>What I am is a completely open-minded partner who is committed to your growth and development. We will identify what works most effectively for you and we will do just that.</p>
          </details> 

          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">What types of coaching do you offer?</summary>
             <p className="pt-4">I offer the following coaching services:</p> 
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
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">How does the process work?</summary>   
             <p>We talk. It sounds simple but it is very rare that most of us get to sit down and have a deep conversation about who we are and what we want. Let alone have such a conversation seriously and regularly with someone we trust.</p>
             <p>Life coaching not only makes this conversation possible, but turns it into an empowering and enabling journey. By forming a partnership together, you can rely on me to hear you clearly, to challenge you kindly, and to accept you unconditionally. Sometimes we may be exploring a philosophical question that seems completely theoretical, but is in fact very important to determining your values as an individual. Or we may be reliving a past event which you have brushed aside for many years but is significant to whom you have become.</p>
             <p>In this process, we are equal partners. I am here to empower you, but not to teach, or to advise. I want you to experience the kind of unconditional acceptance that we all need in order to affirm and fulfil ourselves in the world. On top of that, our conversation should remain fun and inspiring.</p>
             <p>To help me best work with you, I encourage all my clients to begin their journey of growth by taking a <a className="text-myblue-400 underline" rel="noreferrer" target="_blank" href="https://www.16personalities.com/free-personality-test">free personality test</a>. You can also check out my results <Link to="/about/infp"><span className="text-myblue-400 underline">here</span></Link> and learn more about me on my <Link to="/about"><span className="text-myblue-400 underline">About</span></Link> page.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">Do you offer coaching face-to-face or online?</summary>
             <p>We can meet both online and offline. I work with people all over the world and am available on Skype, Zoom or over the telephone. If you prefer working face-to-face, we can meet in London (UK). Currently, I am available in the City and Stratford areas of London. However, face-to-face coaching is also available in the Greenwich (London) area for an additional fee to cover venue hiring costs.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">Does online life coaching work?</summary>   
             <p>Whilst traditionally life coaching is delivered in person, thanks to the technological advancement in recent years, online life coaching is just as effective if not more so.</p>
             <p>In addition to the obvious benefits of convenience and efficiency, online life coaching provides insights into aspects of your life which would otherwise be hidden but are significant to your self-understanding.</p>
             <p>Many clients also appreciate the added layer of confidentiality that comes with online coaching.</p>
             <p>You may also prefer to explore certain topics over the phone which you don’t feel comfortable bringing up via Skype or in person.</p>
             <p>Personally I have been coached solely online via Skype since 2016. Despite the physical distance, the closeness and profundity of my relationship with my coach continued to empower me to reach for personal and professional goals.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">How often do we meet?</summary>   
             <p>Typically the life coaching process is based on weekly sessions. However, it need not be so. You can choose to meet me more or less often to suit your needs. It might be that for a particular period of time, you want to have a concentrated number of sessions to work on a particular area of your life. And other times, you wish to pause and reflect.</p>
             <p>Think of me as a playmate, or a thought partner who is always happy to talk about you when you are ready to do so.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">How much do you charge?</summary>   
             <p>If you choose to pay for individual sessions, it is £100 ($145) per 50-min session. If you choose the Monthly Package, it is £500 ($700) per month. Fees are slightly higher for face-to-face sessions to cover venue hiring costs. You can find out more about each option on the <Link to="/work/pricing" className="text-myblue-400 underline">Pricing</Link> page.</p>
          </details > 
          
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">How long does the coaching process take?</summary>   
             <p>It depends on what you want to achieve and where you are in your own growth and development process. Often times we do not know what areas require our attention unless we allow ourselves to freely explore, reflect and go through a series of trials and errors. I am fully supportive of you in this process by providing a safe and stimulating environment for you to do so. The coaching process is completely open-ended and you are not asked to commit to any number of sessions. You can decide to continue or to stop at any time.</p>
             <p>If it is a very specific area that you want to work on, such as planning for a career change or adapting after a recent relocation, you can usually expect to start seeing changes in that area with six sessions.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">What is your cancellation policy?</summary>  
             <p>Sessions may be cancelled without charge provided that 24 hours’ notice is given. If preferred, and if time is available, clients can reschedule their session to a different time. Cancellation with less than 24 hours’ notice will be charged a full session’s fee.</p> 
          </details> 
          
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">What areas of my life can I seek your coaching for?</summary>   
             <p>I want you to feel free to explore any topics with me as you wish. I take a very holistic approach to coaching, which I believe is the most effective, if not necessary, way to make real changes in one’s life. This approach has proven very effective in my own experience where profound growth and realisation jumped out of places where I never thought of checking. I hope to help you find that too. So whether you are feeling stuck in a career that no longer inspires you, going through a difficult breakup, or struggling with memories or desires of which you feel ashamed, I want to assure you that you will have my undivided attention if it is something you are ready to explore with me.</p>
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">Can I talk about very personal or private issues with you?</summary>  
             <p>Absolutely. There is no limit to what you can discuss with me. I firmly believe that all of our ‘issues’ are intertwined and likely rooted in the same source. For example, someone struggling to speak up at work is often also finding it difficult to reject a family member asking for a favour, or a date he/she has no interest in. Or more deeply, the struggle with assertiveness in every aspect of an individual’s life is likely connected to the same source, which is most often their family background and interaction with their guardians in the early years.</p>
             <p>Often times, the ‘issues’ that we consider as particularly private or even ’embarrassing’ are the very key to profound discoveries and growth, not least because we rarely get to talk about them. So I hope to build long-lasting trust and connection with you so that you feel comfortable exploring these topics with me. I believe that human beings best thrive in a non-judgmental space and I will do everything I can to be your co-creator of such a space.</p>
             <p>Our sessions are 100% confidential. I follow the Association for Coaching <a className="text-myblue-400 underline" href="https://www.associationforcoaching.com/page/AboutCodeEthics" target="_blank" rel="noreferrer">Global Code of Ethics</a>. You can also find the confidential provision in my <Link className="text-myblue-400 underline" to="practice">Practice Policy</Link> here.</p> 
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">Do you focus on the past or the future?</summary>   
             <p className="text-xl ">Both. I do not adopt a particular method or school of thought. We explore anything in your past, present or future that may be relevant. However, you will often find that our experiences in the present time stem from experiences in our formative years. So it is usually helpful to examine our past.</p>          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">What types of clients do you take on?</summary>  
             <p>I welcome all those who want to explore paths that are better aligned with their authentic selves. You may be a corporate professional or executive longing to embrace your creative side more, a graduate struggling to make a career choice, a divorcee building a fulfilling single life, or a retiree looking to start a new chapter of your life. No matter where you are in life, if you are ready to grow and to become more aware of who you are through coaching, I’d be delighted to hear from you.</p> 
          </details> 
          <details className="py-4">
             <summary className="text-xl md:text-2xl font-semibold">Do you provide coaching in languages other than English?</summary>   
             <p>Yes, I speak native Mandarin and can certainly do so if preferred. See my <Link to="/cn" className="text-myblue-400 underline">中文心理咨询</Link> page for more details.</p>          </details> 
          </div>
        </div>
        
        <FaqBanner/>
      </div>
    );
  }
  