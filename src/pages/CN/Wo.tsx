import { Link } from "react-router-dom";
import ellen2 from "../../assets/ellen2.webp";
import reachout from "../../assets/reachout.webp";  

export default function Wo() {
    
    return (
      <div  lang="zh-CN" className="w-full">
          <h1 className="text-3xl lg:text-4xl text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:my-20 mx-auto">关于我</h1>
          <div className="w-11/12 lg:w-3/4 mx-auto mb-30 flex flex-col gap-8">
             <div className="mx-auto flex flex-col justify-between items-center gap-6 lg:flex-row">
                <img src={ellen2} alt="ellen"  className="p-4 lg:p-8 lg:order-2 lg:w-1/3 my-4 rounded-full"/> 
                <div className="lg:w-2/3 w-11/12 lg:order-1">
                  <p className="text-lg">你好，我叫汤磊，Ellen Tang。欢迎你来到我的心理咨询工作室。我想先介绍一下我的个人成长经历，因为这是成就我的个人最本质和重要的过程。比起我的学历和职业证书来，我的成长史更能反映出我是不是最适合你的咨询师。</p>
                  <p className="text-lg">我来自云南昆明，18岁离开家乡去了上海。在同济大学读完自动化本科，工作两年以后搬到了英国来定居。一待十载，我爱上了这个国度，在这里起起伏伏的经历让我感受到了前所未有成长，自由，以及自我价值的实现。出国以后，我很积极地和当地人交往以向他们学习英国的风俗文化还有纯正的语言表达。在伯恩茅斯 Bournemouth 住的五年内，我几乎都是在本地人居多的金融业工作的。这除了让我的外语水平得到极快的提高以外，也让我深深地了解了英国文化以及这边整个体制的运作模式。在英国边工边读了法律学位以后，我在2015年搬到了伦敦来继续在金融业发展。下面的文字会进一步介绍我做心理咨询的原因，理念，及资历。</p>
                  <p className="text-lg">我提供线上（电话或者Skype/Zoom）和面对面咨询，所以无论你在哪里都可以<Link to="/contact" className="underline text-myblue-400 ">联系我</Link>。</p>
              </div>          
          </div>
          <div className="w-11/12 lg:w-full mx-auto mb-32 flex flex-col gap-8">
              <h2>做本来的自己</h2>
              <div className="flex flex-col lg:inline">
                 <p className="text-lg">心理咨询师，也可以叫做<strong>人生教练(Life Coaching),</strong> 是通过研究咨询心理学以及自己的亲身经历，来帮助他人更深入地认识自己以及实现个人目标，让生活变得更加美好的职业。我的使命是让更多的人可以自由地“做本来的自己”。纯粹的幸福来源于本质。只有当我们可以坦荡地做那个本来的自己，真正的幸福才会随之而来。因为你本来的样子，就是最好的。</p>
                 <p className="text-lg">我之所以建立起这个人生教练/心理咨询工作室，是源于一个发自内心的渴望：与其他想要增强自我意识，实现自我潜能的人们一起，通过心理分析和探索，让他们能找到自己最需要的动力，去实现内心最本质的梦想，找到真正属于自己的幸福感。</p>
                 <img src={reachout} className="float-left lg:w-1/3 my-4 md:mr-6 shadow-lg"/>
                 <p className="text-lg">中国以及亚洲文化非常强调外界的价值系统以及集体大过个人的原则。很多人从出生到成年到甚至终生，都一直生活在外界价值评估体系当中，几乎没有人关心过他们内心深处最真实的渴望。正因如此，在这样的环境中长大很容易产生“身份认同危机”。通过我的工作室，我希望能够为你提供一个安全的环境来认识那个本来的自己。这里没有批判，没有质问，没有争吵，没有竞争。有的是理解，讨论，接受，和成长。我的亲身体验让我深深地懂得，接受自己，爱那个本来的自己，是幸福和自我实现的根本。我希望能和你一起，踏上通往自爱的旅程。</p>
                 <p className="text-lg">我对心理学的兴趣从很小就开始了。高考时因为受外界价值观影响，没有选择心理学，以为学理工科更好找工作。后面才知道，那些“好找”的工作都是我不想要的。直到本科毕业以后，我才终于允许自己攻读了心理咨询师资格证书。搬到英国两年以后的一次人生危机，让我决定去寻求心理咨询的帮助。那成了我人生的一个重大转折点。我不但从个人感情的阴影中从容地走出，更重要的是我在和咨询师的共同努力下找到了多年来被隐藏着的情感与力量。凭借着这个动力，我拿到了英国的一等法律学位，搬到了我一直向往的伦敦，并通过在金融业的发展真正实现了经济上的独立。这一切都是我曾经觉得遥不可及的目标。如今，事业上的成功让我可以自由地去更深入地了解自己。我知道比起金融业来，我对心理学和心理咨询的渴望更加强烈。</p>
                 <p className="text-lg">我一直相信，要成为一位好的咨询师远远不是拿到证书和学位就足够了。咨询师本人对各种复杂情感的亲身体验，以及不断深入的自我观察和分析，才是衡量一个咨询师能力最有权威的标准。虽然我在国内外都接受过咨询师培训，但是毫无疑问的是，我个人的经历和我多年来在与咨询教练的合作下所达到的自我认知以及对人性的理解，才是我最宝贵的资质。如今，我仍然有自己稳定的咨询教练。这既帮助我继续更深入和清晰地了解自己，也让我在给他人咨询的过程中能做到更有效的分析和觉察，不轻易被自己的感情色彩所影响。</p>
                 <p className="text-lg">我相信，越多人学会做本来的自己，这个世界就会越美好。因为人越爱自己本来的样子就会越幸福，越幸福就越不会想要伤害他人或者自己。我希望能和你一起，幸福地做本来的自己。</p>
              </div>
              <button className="btn-next float-right w-48 my-6 lg:my-6 text-md">预约咨询 ➣</button>
          </div>
          
          
          </div>
          
      </div>
    );
  }