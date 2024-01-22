
import { Link } from "react-router-dom";


export default function FuWu() { 
  return (
    <div className="w-full">
        <h1 className="text-4xl text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:mt-20 mx-auto">我的服务</h1>
        <p className="text-xl text-center font-semibold">我提供的心理咨询服务包括：</p>
        <div className="w-11/12 mx-auto pr-3 flex flex-col justify-center items-center lg:flex-row">           
           <ul className="my-6 flex flex-wrap justify-center items-center gap-x-4">  
             <div className="mx-auto">
               <li className="py-2">私人生活心理咨询</li>
               <li className="py-2">情绪管理心理咨询</li>
             </div>   
             <div className="mx-auto">
               <li className="py-2">自我认可心理咨询</li>
               <li className="py-2">自我意识心理咨询</li>
             </div >
             <div className="mx-auto">
               <li className="py-2">感情关系心理咨询</li>
               <li className="py-2">职业发展心理咨询</li>
             </div>
             <div className="mx-auto">
               <li className="py-2">职业转换心理咨询</li>
               <li className="py-2">金钱理念心理咨询</li>
             </div>      
           </ul>      
        </div>
        <div  className="flex flex-col justify-between items-center w-5/6 lg:w-2/3 mx-auto lg:mt-8 pb-4"> 
           <div>      
             <p className="text-xl">语言：英文，中文（普通话）</p>
             <p className="text-xl">预约时间:（英国伦敦时间）周一至周五 09:00 – 19:00。如果你需要在这之外的时间咨询的话，请<Link to="/cn/yuyue" className="underline text-myblue-400">与我联系</Link>。</p>
           </div>  
           <Link to="/cn/wenti"><button className="btn-next  mt-12 mb-2 lg:mt-16 text-md w-40">常见问题 ➣</button></Link>
        </div>
        <h1 className="text-4xl text-myblue-400 border-y w-4/5 my-12 md:w-1/3 md:mt-8 mx-auto">收费标准</h1>
        <div className="mx-auto w-5/6 my-21">
           <div className="mx-auto flex flex-col gap-10 mb-20 justify-center items-center lg:flex-row lg:justify-between lg:items-start ">
           <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-center">按次支付</h2>
              <h3 className="text-2xl">个人咨询</h3>
              <p>每次咨询是50分钟。在这段时间内，我们将一起分析探索你所想要谈论的话题或疑问。我们的谈话可以涉及到你生活中的任何一个方面。</p>
              <br/>
              <div className=''>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-mystone-100 px-4'>
                  <p>视频/电话咨询:</p>
                  <p className='italic'>£100 / $135 / €125 / ¥850</p>
                </div>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-myblue-100 px-4'>
                  <p>面对面咨询:</p>
                  <p className='italic'>£110*</p>
                </div>
                <p className='border border-myblue-100 text-xs px-4'>*包含场地租借费用</p>
                <br/>
              
              <h3 className="text-2xl">亲密关系（双人）咨询</h3>
              <p>除了一对一的个人成长咨询以外，我也为情侣，夫妻，亲子，以及其他有着亲密关系的两个人提供心理咨询。每次咨询是50分钟。</p>
              <br/>
              <div className=''>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-mystone-100 px-4'>
                  <p>网上视频咨询:</p>
                  <p className='italic'>£130 / $170 / €160 / ¥1100</p>
                </div>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-myblue-100 px-4'>
                  <p>面对面咨询:</p>
                  <p className='italic'>£150*</p>
                </div>
                <p className='border border-myblue-100 text-xs px-4'>*包含场地租借费用</p> 
                <Link to="/cn/yuyue"><button className="btn-next  mt-12 mb-2 lg:mt-16 text-md w-40">预约咨询 ➣</button></Link>          
              </div> 
           </div>                      
        </div>
        <div className="w-full lg:w-1/2">
              <h2 className="text-3xl text-center lg:mb-16">按月支付</h2>    
              <p>除了每周一次的定期咨询（每次50分钟）以外，按月支付的费用中还包含每月五封复杂邮件咨询*以及两个小时的额外电话咨询。</p>
              <p className='text-xs'>*即需要花15分钟以上来回复的邮件</p>
              <br/>
              <div className=''>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-mystone-100 px-4'>
                  <p>电话/视频咨询:</p>
                  <p className='italic'>£500 / $700</p>
                </div>
                <div className='flex flex-col justify:center items:start lg:flex-row lg:justify-between lg:items-center bg-myblue-100 px-4'>
                  <p>面对面咨询:</p>
                  <p className='italic'>£600*</p>
                </div>
                <p className='border border-myblue-100 text-xs px-4'>*包含场地租借费用</p> 
                <Link to="/cn/yuyue"><button className="btn-next mt-12 mb-2 lg:mt-16 text-md w-40">预约咨询 ➣</button></Link>     
          </div> 
                                
        </div>
        
        </div>  
        </div>
        
    </div>
  );
}
