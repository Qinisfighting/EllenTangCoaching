import infp from '../../assets/infp.webp';
import infp2 from '../../assets/infp2.webp';
import infp3 from '../../assets/infp3.svg';


export default function INFP() {
    
    return (
      <div className='w-5/6 mt-8 mx-auto flex flex-col md:flex-row lg:w-4/5 md:items-start md:mt-16 mb-28'>
        <div className='md:pr-4 xl:pr-12'>
          <h1 className='text-5xl'>Me as an INFP</h1>
          <p className='text-center text-lg font-medium'>Credit: <a className='text-myblue-400 underline'>16 Personalities</a></p>
          <img className="mx-auto mt-12 mb-8 md:my-12 w-full "  src={infp}/>  
          <h2 className=''>Introduction</h2>
          <div>
             <p className='text-lg'>INFP personalities are true idealists, always looking for the hint of good in even the worst of people and events, searching for ways to make things better. While they may be perceived as calm, reserved, or even shy, INFPs have an inner flame and passion that can truly shine. Comprising just 4% of the population, the risk of feeling misunderstood is unfortunately high for the INFP personality type – but when they find like-minded people to spend their time with, the harmony they feel will be a fountain of joy and inspiration.</p>
             <p className='text-lg'>Being a part of the Diplomat Role group, INFPs are guided by their principles, rather than by logic (Analysts), excitement (Explorers), or practicality (Sentinels). When deciding how to move forward, they will look to honor, beauty, morality and virtue – INFPs are led by the purity of their intent, not rewards and punishments. People who share the INFP personality type are proud of this quality, and rightly so, but not everyone understands the drive behind these feelings, and it can lead to isolation.</p>     
             <p className='text-lg'>All that is gold does not glitter; not all those who wander are lost; the old that is strong does not wither; deep roots are not reached by the frost.J. R. R. TOLKIEN</p>
             <br/>
             <img src={infp3} className="mx-auto my-4 md:w-1/2 md:float-left md:pr-6 md:mt-6"/>
          </div>
          <br/>
          <h2>We Know What We Are, but Know Not What We May Be</h2>
          <p className='text-lg'>At their best, these qualities enable Mediators to communicate deeply with others, easily speaking in metaphors and parables, and understanding and creating symbols to share their ideas. Fantasy worlds in particular fascinate Mediators, more than any other personality type. The strength of their visionary communication style lends itself well to creative works, and it comes as no surprise that many famous Mediators are poets, writers and actors. Understanding themselves and their place in the world is important to Mediators, and they explore these ideas by projecting themselves into their work.Mediators have a talent for self-expression, revealing their beauty and their secrets through metaphors and fictional characters.</p>
          <p className='text-lg'>Mediators’ ability with language doesn’t stop with their native tongue, either – as with most people who share the Diplomat personality types, they are considered gifted when it comes to learning a second (or third!) language. Their gift for communication also lends itself well to Mediators’ desire for harmony, a recurring theme with Diplomats, and helps them to move forward as they find their calling.</p>
          <br/>
          <h2>Listen to Many People, but Talk to Few</h2>
          <p className='text-lg'>Unlike their Extraverted cousins though, Mediators will focus their attention on just a few people, a single worthy cause – spread too thinly, they’ll run out of energy, and even become dejected and overwhelmed by all the bad in the world that they can’t fix. This is a sad sight for Mediators’ friends, who will come to depend on their rosy outlook.</p>
          <p className='text-lg'>If they are not careful, Mediators can lose themselves in their quest for good and neglect the day-to-day upkeep that life demands. Mediators often drift into deep thought, enjoying contemplating the hypothetical and the philosophical more than any other personality type. Left unchecked, Mediators may start to lose touch, withdrawing into “hermit mode”, and it can take a great deal of energy from their friends or partner to bring them back to the real world.</p>
          <p className='text-lg'>Luckily, like the flowers in spring, Mediator’s affection, creativity, altruism and idealism will always come back, rewarding them and those they love perhaps not with logic and utility, but with a world view that inspires compassion, kindness and beauty wherever they go.</p>
          <p className='text-lg'>Read the full result <a  className='text-myblue-400 underline' href='https://www.16personalities.com/infp-personality' target="_blank">here</a>.</p>
        </div>
        <img src={infp2}  className="mt-16 md:pl-12 mb-20 md:mt-48 md:pt-7 w-3/4 md:w-1/3 mx-auto"/>
      </div>
    );
  }