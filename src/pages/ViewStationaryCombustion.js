import React from 'react'

export default function ViewStationaryCombustion() {
  return (
    <div className='container'>
        <div className='top'>
          <div className='top-right'><img src="/assets/Navbar/backb.png" alt="Back Button" /></div>
          {/* <div className='top-left'><img src="/assets/Navbar/backb.png" alt="Back Button" /></div> */}
        </div>
        <div className='bottom'>
            <div className='bottom-left'>
              <div className='heading'>
                <h1>STATIONARY COMBUSTION</h1>
                <form>
                  <label>Facility</label>
                  <input type='text' placeholder='Facility Code'></input>
                  <input type='text' placeholder='Facility Name'></input>
                  <br></br>
                  <label>Month</label>
                  <select id="monthInput" name="monthInput" required>
                    <option value="" disabled selected>Select month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <br></br>
                  <label>Emission Type</label>
                  <select id="monthInput" name="monthInput" required>
                    <option value="" disabled selected>Source of Emission</option>
                    <option value="01">Option1</option>
                    <option value="02">Option2</option>
                    <option value="03">Option3</option>
                    <option value="04">Option4</option>
                  </select>
                  <br></br>
                  <label>Fuel</label>
                  <select id="monthInput" name="monthInput" required>
                    <option value="" disabled selected>Type of Fuel</option>
                    <option value="01">Option1</option>
                    <option value="02">Option2</option>
                    <option value="03">Option3</option>
                    <option value="04">Option4</option>
                  </select>
                  <input type="number" placeholder='Qunatity'></input>
                  <input type="number" placeholder='SI Units'></input>
                  <input type='Submit' placeholder='ADD DATA'></input>
                </form>
              </div>
            </div>
            <div className='bottom-right'>
              <div className='c1'>c2</div>
              <div className='c2'>c3</div>
            </div>
        </div>
    </div>
  )
}
