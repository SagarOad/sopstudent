// @ts-ignore

import { useState } from "react"
import Calendar from "react-calendar"


const Calender = () => {
const [date, setDate] = useState(new Date);
  return (
    <div>
        <div className="w-[500px] border-4 rounded-sm bg-white dark:bg-boxdark h-[250px] overflow-scroll max-w-full p-2 shadow-default">
          <div className="calender-container text-black dark:text-white">
            <Calendar onChange={setDate} value={date} />
          </div>

          <div className="text-center text-black dark:text-white">
            Selected date: {date.toDateString()}
          </div>
        </div>
    </div>
  )
}

export default Calender