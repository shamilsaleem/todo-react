import React, { useState } from 'react'

function getDate() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const week = weekday[today.getDay()]
    return `${date}/${month}/${year} - ${week}`;
}

function DateAndTime() {
    const [currentDate] = useState(getDate())
    return (
        <div>
            <p className='center'>{currentDate}</p>
        </div>
    )
}

export default DateAndTime