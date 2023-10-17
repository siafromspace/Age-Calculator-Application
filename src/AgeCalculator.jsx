import React from 'react'
import Arrow from './assets/images/icon-arrow.svg'
import { useState, useEffect } from 'react';

export default function AgeCalculator() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

    const calculateAge = () => {
        const birthDay = parseInt(day)
        const birthMonth = parseInt(month)
        const birthYear = parseInt(year)

        const currentDate = new Date()
        
        let years = currentDate.getFullYear() - birthYear;
        let months = currentDate.getMonth() - birthMonth;
        let days = currentDate.getDate() - birthDay;
        
        if (days < 0) {
            const prevMonthLastDay = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
              ).getDate();
              days = prevMonthLastDay + days;
              months = months - 1;
        } 

        if (months < 0) {
            months = 12 + months;
            years = years - 1;
        } 
        setAge({years, months, days})
    }

  return (
    <>
      <div className="container">
        <form action="">
            <div className="form-field">
                <label htmlFor="day">day</label>
                <input type="number" name="day" id="day" placeholder='dd' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-field">
                <label htmlFor="month">month</label>
                <input type="number" name="month" id="month" placeholder='mm' value={month} onChange={(e) => setMonth(e.target.value)} />
            </div>
            <div className="form-field">
                <label htmlFor="year">year</label>
                <input type="number" name="year" id="year" placeholder='yyyy' value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="arrow-box" onClick={calculateAge}>
                <img src={Arrow} alt="arrow" />
            </div>
        </form>
        <div className="age-box">
            <p className="age-years">
                <span className="digit">{age.years || age.years === 0 ? age.years : "- -"}&nbsp;</span>
                years
            </p>
            <p className="age-months">
                <span className="digit">{age.months || age.months === 0 ? age.months : "- -"}&nbsp;</span>
                months
            </p>
            <p className="age-days">
                <span className="digit">{age.days || age.days === 0 ? age.days : "- -"}&nbsp;</span>
                days
            </p>
        </div>
      </div>
    </>
  )
}
