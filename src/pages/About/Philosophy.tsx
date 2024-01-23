import { Link } from "react-router-dom";
import { PhiloBanner } from "../../components/Banners";
import philosophy from "../../assets/philosophy.webp";
import philo1 from "../../assets/philo1.jpg";
import philo2 from "../../assets/philo2.jpg";
import philo3 from "../../assets/philo3.jpg";



export default function Philosophy() {
    
  
  
  return (
    <div className="w-full">      
    <div className="w-4/5 mx-auto xl:w-2/3 my-20">
         <div className="">
            <img src={philosophy} alt="philosophy" className="md:w-1/3 object-cover float-left md:pr-4 py-4"/>  
            <p className="md:text-xl"><span className="font-semibold text-4xl text-myblue-500">I’</span>d like to introduce this section with an analogy made by one of the leading mental game experts, <a href="https://jaredtendler.com/" target="_blank" className="underline text-myblue-400">Jared Tendler, M.S.</a>, about coaching: “A mechanic working on a race car doesn’t need to be a world-class driver to understand how to prepare a car to win. He needs to have a deep understanding of what the driver needs, the conditions the car will race in, and how the car works, and he must be able to diagnose and fix problems quickly.”</p>
            <br/>
            <p className="md:text-xl">Similarly, a good life coach is someone who has a deep understanding of humanity, the versatility of the human mind, and the constant inner struggles that each human being experiences with self love and acceptance. Such understanding is most effectively developed through the coach’s own life experiences. A good coach need not be better than you in the specific field where you want to grow, but what they can do is to bring the best possible results out of you. I do not hold myself out as someone smarter than you. Rather, I am your mechanic when you wish to put your “race car” into its best possible condition.</p>     
            <img src={philo1} alt="philo1" className="md:w-2/5 object-cover float-right md:pl-4 py-4"/> 
            <br/>
            <p className="md:text-xl">Every part of a person is integral to his or her sense of fulfilment and happiness. So there is no limitation to what you can talk about with me. All I need from you is commitment to your own personal growth. At each coaching session, we will have conversations that are centred around you as an individual, your journey, your feelings and your desires. I see judgement as a big hindrance to growth that is counterproductive in reaching deep understanding of an individual’s drives and values. Those very drives and values, are the key to every individual’s authentic happiness. As your partner in this thrilling journey of growth, I want you to experience the kind of acceptance that is unconditional and all-encompassing, because only when we learn to accept ourselves in this way can we reach our full potential.</p>       
            <br/>
            <p className="md:text-xl">All human behaviours and desires can be understood. The ones driven by self-limiting beliefs, often stem from our insecurities and fears that once protected us as vulnerable children but are no longer serving a positive purpose. Judgment of our behaviours, however, only gets in the way of growth and understanding, but is unfortunately often experienced in our society or among our family and friends. Therefore, I am here to provide an environment free from any form of judgment so that you are free to engage with your own mind at a deep level. As we experience from another the level of unconditional acceptance that we so often deny ourselves, we learn to truly love ourselves and to make changes for which we have been longing.</p>         
            <img src={philo2} alt="philo2" className="md:w-2/5 object-cover float-left md:pr-4 py-4"/> 
            <br/>
            <p className="md:text-xl">There is no doubt that we already possess within ourselves all the power that it takes to create the life we want. I will not tell you what to do or what is right or wrong. Instead, I am your thought partner as you explore and find answers for yourself. Think of me as a highly effective and stimulating ‘sounding board’ if you will. Our conversations will typically be deep and thought-provoking. By fully engaging with your thoughts and feelings, you gain a real insight into who you are and what really makes you happy. During the process, I am not the person making changes to your life, but I am the facilitator of changes you want to make. By working together, you will find the courage and empowerment you need to make those changes.</p>     
            <br/>
            <p className="md:text-xl">I have carefully designed my logo to represent the values I see as important. The circles symbolise harmony and peace in one’s heart, mind and body. The multiple layers stand for the depth of an individual, as well as the progress that can be made as we look through each layer. The white stripe represents the path you and I will co-create towards discovery, growth and fulfilment. The circles are coloured in blue which represents openness, freedom, intuition, imagination, expansiveness, inspiration, and sensitivity, as well as meanings of depth, trust, loyalty, sincerity, wisdom, confidence, stability, and intelligence. I wish to incorporate all these qualities into my coaching relationship with you, so that you can reach deep understanding of yourself and actualise your full potential.</p>
            <img src={philo3} alt="philo3" className="md:w-1/3 object-cover float-right md:pl-4 py-4"/> 
            <br/>
            <p className="md:text-xl">Each individual is unique and therefore requires coaching completely tailored to their individuality. There is no such thing as a ‘one-size-fits-all’ programme when it comes to self actualisation. I offer a free initial consultation as an opportunity for you and me to learn about each other’s uniqueness and assess how a coaching relationship between us, two unique individuals, will be valuable and empowering to you. If after the consultation, or at any point during our journey, you decide that I am not the right coach for you, you can walk away or stop coaching with me at your discretion. You will not be asked to commit to a minimum number of sessions. Sessions can be booked individually or on a monthly basis (see my Pricing page for detail).</p>          
            <br/>
            <p className="md:text-xl">I believe that real personal growth leads to long-term, sustainable happiness and fulfilment, and is much more important than finding short-term solutions alone. I am here to build genuine, lasting trust and connection with you so that your mind is freed up from the confusing relational dynamics that frequently arise in life and often cloud our vision and judgment. You can think of me as a playmate who constantly wants to know you better, brings you tools that may be helpful, and cheers you on as you take on each adventure, big or small.</p>         
            <br/>
            <p className="md:text-xl">I encourage all my clients to begin their journey of growth by taking a personality test, one with a good scientific basis, and share the results with me if they wish to. You can also check out my results here and read my personal journey here.</p>         
            <br/>
            <p className="md:text-xl">Finally, I want to congratulate you on taking an important step towards growth and thank you for reading my page. No matter where you go next, I wish you a thrilling journey ahead!</p>      
         </div>
         <button className="btn-next float-right my-10"><Link to="/about/philosophy">ME AS AN INFP ➣</Link></button> 
           <h2 className="mt-40 mb-4 text-3xl">Reading List for Better Understanding Humanity</h2>
           <div className="flex flex-col border-y py-4 justify-center items-center gap-8 xl:flex-row xl:justify-between xl:items-center">
    
              <div className="flex flex-col gap-2 text-lg xl:text-xl">
                 <p>- Freedom Through Higher Awareness (Wayne Dyer, Dr.)</p>
                 <p>- Change Your Thoughts, Change Your Life (Wayne Dyer, Dr.)</p>
                 <p>- Your Sacred Self (Wayne Dyer, Dr.)</p>
                 <p>- It’s Never Crowded Along the Extra Mile (Wayne Dyer, Dr.)</p>
                 <p>- You Can Heal Your Life (Louise Hay)</p>
                 <p>- Blink (Malcolm Gladwell)</p>
                 <p>- Rich is Better (Tessa Albert Warschaw, Ph.D.)</p>
                 <p>- Living Well With Depression and Bipolar Disorder (John McManamy)</p>
              </div>
              <div className="flex flex-col gap-2 text-lg xl:text-xl">
                 <p>- Outliers (Malcolm Gladwell)</p>
                 <p>- Sophie’s World (Jostein Gaarder)</p>
                 <p>- Man’s Search For Meaning (Viktor Frankl)</p>
                 <p>- Sapiens (Yuval Noah Harari)</p>
                 <p>- 21 Lessons for the 21st Century (Yuval Noah Harari)</p>
                 <p>- Feel the fear and do it anyway (Susan Jeffers)</p>
                 <p>- On Becoming a Person (Carl R. Rogers)</p>
              </div>   
           </div>         
       
         
         </div>
         <PhiloBanner />
    </div>
  );
}
