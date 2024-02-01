import logo from '../assets/Subtract1.png'
import dashboard from '../assets/Dashboard.png'
import upload from '../assets/Upload1.png'
import invoice from '../assets/Invoice.png'
import schedule from '../assets/Schedule.png'
import calender from '../assets/Calendar.png'
import notification from '../assets/Notification.png'
import setting from '../assets/Setting.png'

const NavigatingDiv = () => {
  return (
    <div className='border w-[300px] bg-white rounded-lg h-[100%]'>
       
       <div className="flex items-center gap-2 justify-center my-10">
           <img src={logo} alt="logo" />
           <h2 className="font-semibold text-3xl">Base</h2>
       </div>
       <div className='navigatingDivs'>
           <div><img src={dashboard}  /> Dashboard</div>
           <div className="text-blue-800"><img src={upload} /> Upload</div>
           <div><img src={invoice} /> Invoice</div>
           <div><img src={schedule}/> Schedule</div>
           <div><img src={calender} /> Calender</div>
           <div><img src={notification}/> Notification</div>
           <div><img src={setting}/> Setting</div>
       </div>

    </div>
  )
}

export default NavigatingDiv
