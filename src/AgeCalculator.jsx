import React from 'react'

export default function AgeCalculator() {
  return (
    <>
      <div className="container">
        <form action="">
            <div className="form-field">
                <label htmlFor="day">day</label>
                <input type="number" name="day" id="day" />
            </div>
            <div className="form-field">
                <label htmlFor="month">month</label>
                <input type="number" name="month" id="month" />
            </div>
            <div className="form-field">
                <label htmlFor="year">year</label>
                <input type="number" name="year" id="year" />
            </div>
        </form>
        <div className="age-box">
            <p className="age-years">
                <span className="digit">-- </span>
                years
            </p>
            <p className="age-months">
                <span className="digit">-- </span>
                months
            </p>
            <p className="age-days">
                <span className="digit">-- </span>
                days
            </p>
        </div>
      </div>
    </>
  )
}
