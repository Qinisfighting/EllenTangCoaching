// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoryBanner } from "../../components/Banners";
import story from "../../assets/story.webp";
import mission from "../../assets/mission.webp";
import pain from "../../assets/pain.png";
import growth from "../../assets/growth.webp";
import discovery from "../../assets/discovery.webp";
import aclogo from "../../assets/aclogo.webp";
import achologylogo from "../../assets/achologylogo.webp";
import centreofexcellence from "../../assets/centreofexcellence.webp";
import icf from "../../assets/icf.webp";
import oulogo from "../../assets/oulogo.webp";
import tongjilogo from "../../assets/tongjilogo.webp";



export default function Story() {
    
  
  
    return (
      <div className="w-full">      
      <div className="w-4/5 mx-auto xl:w-2/3 my-20">
           <div className="">
              <img src={story} alt="story" className="md:w-1/3 object-cover float-left"/>  
              <p className="md:text-xl"><span className="font-semibold text-4xl text-myblue-500">B</span>orn and raised in China, I grew up in a southern city called Kunming. Even though I was brought up in a very close-knit family that valued the connection and comradeship between relatives more than anything else, I always felt like the outcast, the ‘extra’ person who doesn’t belong. In a way, I was. Born as the second child amid the enforcement of China’s one-child policy, my very existence was threatened by the government crackdown on couples trying to grow their families.</p>
           </div>
           <br /> 
           <div>
               <h2 className="text-center my-8 mx-auto">Pain</h2>
               <div className="flex flex-col xl:flex-row">
                  <div className="text-lg order-2 xl:text-xl xl:order-1">
                     <p className="md:text-xl">My parents’ determination to have a second child cost them financially and emotionally. In turn, I had a lot of pressure to live up to the societal standards of ‘excellence’. After all, why would anyone go through all the hardship and ridicule to just have an ‘ordinary’ kid? Fortunately, I did well at school and most excelled academically in my mid-teens even though I was struggling desperately with my emotional world. I kept my despair and horror hidden behind my academic achievements so that others would leave me alone and not ask questions. In a society where parents often valued children’s potential to impress friends and neighbours more than his or her emotional wellbeing, my effort worked ‘well’. I was truly left alone to resolve my own excruciating pain and confusion that often result from the unpredictable behaviours of teenagers.</p>
                     <p className="md:text-xl">A traumatic event happened when I was 13, followed by another at 16, which affected my life in a way that I did not become fully conscious of until nearly 20 years later. The realisation, however, was one of the most profound and empowering. Until then, I was a deeply wounded child who succumbed to the need for validation and acceptance time and time again by allowing unhealthy relationships to continue for far too long.</p>      
                  </div>
                  <img src={pain} alt="pain" className="w-full order-1 mb-8 object-cover xl:w-1/3 xl:ml-8 xl:my-3 shadow-lg xl:order-2" /> 
               </div>
               <h2 className="text-center my-8">Growth</h2>
               <p className="md:text-xl">
                  With a heart full of suppressed painful memories, I left home at the age of 18 to study in Shanghai. Due to the economic and cultural disparity that often existed between regions in China, adapting to life in a new city required more effort than I thought. I increasingly felt that I did not belong to the environment I was in, but was often too confused and unsure of my own feelings and values to know what to do. Nevertheless, leaving one’s original family is often the first key step towards real growth. I was finally free to explore what it was that my heart truly desired.
                  </p >
               <div className="flex flex-col xl:inline">  
                  <img src={growth} alt="growth" className="w-full my-8 object-cover xl:w-5/12 xl:mr-8 xl:my-3 shadow-lg xl:float-left" />    
                  <div className="text-lg xl:text-xl">
                     <p className="md:text-xl">
                      The journey leading up to my move to the UK was a nourishing and exciting one. With the empowerment and support of a strong partnership, I relocated to the UK to start a brand new life full of promises and brightness. I was filled with hopes that I would leave behind the feeling of being an anxious misfit in a culture where conformity to external values is highly expected and demanded. Despite the pain and struggles that I carried with me to the UK, moving to a foreign country is one of the most enriching experiences for which I am for ever grateful. I was a girl in China, but life in the UK has made me a real woman.
                      </p>
                      <p className="md:text-xl">
                      My firm belief in the power of coaching is deeply rooted in my own experience of it. Although I had always been intrigued by the benefits of a life coach, I was hesitant as to its true value for money. It wasn’t until two years after moving to the UK that I finally pushed through my fear and hired a life coach to help me get over another major life crisis. Then, I began the most rewarding and nourishing journey of self discovery and growth. Not only was I able to recover from a heartbreaking split of a 5-year relationship, but I also found the courage to enrol on a university course that would 3 years later award me a first class degree in Law. By the time of my degree ceremony, I had moved to my favourite city in the world, tripled my income, started a new relationship and most importantly, I knew, respected and loved myself an infinite amount more.
                      </p>
                      <p className="md:text-xl">
                      Coaching worked so well for me that I continue to use it on a regular and ad hoc basis, depending on what I want to work on in a particular period. I am a firm believer in the great power of a reliable, long-term relationship between the coach and the client. Ultimately, it is the trust and connection between the two individuals that make the process so empowering and effective. 
                     </p>     
                  </div>
                  
               </div>
               <h2 className="text-center my-8">Discovery</h2>
               <p className="md:text-xl">
               Being a highly sensitive and complex individual, I have always been fascinated by human psychology. I first trained as a psychotherapist in China and qualified in 2010. Following my relocation to the UK, starting with working intensely on my own self discovery and development, I began a long journey of preparation for becoming a competent and effective life coach. And I never looked back. To this day, I continue to develop my own self-awareness and emotional vitality, as well as my understanding of others, under the supervision of my own coach.
                  </p >
                  <p className="md:text-xl">
                  Like many other Asian kids, at the age of 18 I had no idea what my vocation was supposed to be. I knew that I was supposed to study hard, go to a big city for university and then find a ‘normal’ corporate job. So I chose to go to Shanghai and studied an engineering degree in Automated Technology. Although the subject interested me very little, I completed the 4-year study and obtained my first Bachelor’s degree. I never intended to work in the field of engineering but the prestige of my university helped me land jobs at IBM, PayPal and a mid-size software company in Shanghai. I continued to experiment with different jobs and environment, in search for a vocation that would bring me a sense of belonging, until I decided to move to the UK.
                  </p>
               <div className="flex flex-col xl:inline">  
                  <img src={discovery} alt="discovery" className="w-full my-8 object-cover xl:w-5/12 xl:ml-8 xl:my-3 shadow-lg xl:float-right" />    
                  <div className="md:text-xl">
                     <p className="md:text-xl">
                     With a fresh start, I was so excited and curious about everything that I absorbed every bit of information from my surroundings like a sponge. As always, I approached my first year in a foreign country with much caution and self-discipline. My first job in the UK was in a residential home working as a carer for the elderly. Whilst it was not intended to be long-term, I loved the honourable aspect of the job that came with intimate exchange and connection with people in need of support. Five months later, I started my first corporate job here working for a loan company in customer service. I was the only employee from mainland China. The informal nature of the company’s culture allowed me to very quickly pick up English expressions, accents, slang and culture-specific customs that I never learned from textbooks. I was both thrilled and proud to be adapting to a life in which I felt like a local. Strangely but truly, I found a stronger sense of belonging away from my home country. Before long, I moved on from dealing with customer queries to auditing other agents’ communication with customers. It was both challenging and empowering for a non-native speaker to provide feedback on locals’ communication styles and use of language. I learnt to deal with resistance and doubts from others that had little to do with my competence, sometimes expressed professionally, sometimes not. It was around this time that I started working with a life coach.
                      </p>
                      <p className="md:text-xl">
                      After spending much time on dealing with obstacles in my personal life, my coach and I started focusing on my professional aspirations. On deciding whether I should choose Psychology or Law as two fields aligned with my strengths, I chose the latter because it felt safer. I often look back and feel so amazed at how we sometimes really go out of our way to avoid pursuing our hearts’ true desire. But I was determined to start building a new career in Law, I contacted a close friend of mine who knew someone in Shanghai who could help me obtain a translated copy of my degree transcript from my university, had my degree verified by NARIC and enrolled with the Open University. I soon started a new job at JPMorgan working in legal contract management. Despite being full of self-doubt, I stuck with the study and the ‘distinction’ I earned in the first term marked a pivot point of my confidence building journey. Once I developed more and more affirmation for myself, I also started getting more affirmation from those around me. The snowballing effect was thrilling. I finally felt free to pursue the dreams I never thought was possible. Changes do indeed start from within.
                      </p>
                      <p className="md:text-xl">
                      I decided that if I wanted to work in corporate law, then London was the place to be. I worked relentlessly on applications for graduate schemes and jobs at law firms, in-house legal teams and compliance departments. A few months later, I negotiated into my first job in London at an Asset Management firm, less than 5 minutes walk from the famous Piccadilly Circus. How exciting!
                     </p> 
                     <p className="md:text-xl">
                     London is one of my favourite cities in the world. So lively, cultural, full of possibilities. My relocation here not only opened the door to a huge amount of career opportunities, but also significantly expanded my mindset, which is the most valuable thing that can happen on a person’s path to actualisation. My desire to continuously learn and develop led me into two more corporate jobs in the City of London, each with better outlook and intellectual stimulation than the last. My jobs involved, sometimes very delicate, communications with people at all levels, from senior executives to colleagues and external partners. The dynamics between different personalities, genders, positions and working styles in the corporate world are fascinating. I have had both very distressing and very rewarding experiences dealing with such dynamics, all of which taught me a lot about myself and about the unique characteristics of corporate life. I complement the highly logical and analytical nature of my job with my love for the theatre and for drawing and painting as a way to express feelings that could not always be articulated in words.
                    </p>      
                  </div>       
               </div>
               
               <div className="mt-8">
                     <img src={mission} alt="misson" className="md:w-1/3 object-cover p-2 float-left"/> 
                     <p className="md:text-xl"><span className="font-semibold text-4xl text-myblue-500">N</span>ow, I want to combine my experiences as a wounded child, a first-generation immigrant, a corporate professional and a human being who has witnessed a lot of life’s pain and beauty, with my love for humanity and belief in peace and actualisation as a natural result of self acceptance. I want to form strong partnerships with those longing for a heightened understanding of themselves and others around them, so that they can live the best life that could ever be imagined. Because the more of us are living a fulfilling life, the more kindness and less need to hurt there will be. Together, we can indeed shift the world.</p>
               </div> 
           </div> 
           <button className="btn-next float-right my-10"><Link to="/about/philosophy">MY PHILOSOPHY ➣</Link></button> 
           <h2 className="mt-40 mb-4 text-3xl">Training & Qualifications</h2>
           <div className="flex flex-col border-y py-4 justify-center items-center gap-8 xl:flex-row xl:justify-between xl:items-center">
           
              <div className="flex flex-col gap-2 text-xl">
                 <p>- Continuous experiential training in Personal Development & Life Coaching (since 2012)</p>
                 <p>- MSc in Psychology, London Metropolitan University (expected 2022)</p>
                 <p>- Occupational Qualification in Coaching & Counselling (Chinese Ministry of Labour and Social Security)</p>
                 <p>- Certified life coach by Achology, The Academy of Modern Applied Psychology</p>
                 <p>- Diploma in Jungian Archetypes, Distinction, Centre of Excellence</p>
                 <p>- Diploma in Depression Counselling, Distinction, Centre of Excellence</p>
                 <p>- Associate member of the Association for Coaching</p>
                 <p>- Member of International Coaching Federation</p>
                 <p>- BSc in Automated Technology</p>
                 <p>- LLB (Hons) Open, Distinction in Law, Open University UK</p>
                 <p>- Chartered Financial Analyst (passed level 2 exam)</p>
              </div>
              <div className="max-w-60 m-2">
                <img src={icf} alt="icf" className="p-1"></img>
                <img src={aclogo} alt="aclogo" className="p-1"></img>
                <img src={achologylogo} alt="achologylogo" className="p-1"></img>         
                <img src={centreofexcellence} alt="centreofexcellence" className="p-1"></img>
                <img src={oulogo} alt="oulogo" className="p-1"></img>      
                <img src={tongjilogo} alt="tongjilogo" className="p-1"></img>
              </div>   
           </div>         
         </div>
           <StoryBanner />
      </div>
    );
  }
  