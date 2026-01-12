import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {
  return (
       <div className='card'>
          <div>
            <div className='top'>
            <img src={props.brandLogo} alt=""/>
            <button>save<Bookmark size={10}/></button> 
          </div>
          <div className="center">  
            <h3>{props.companyName}<span>5 days ago</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
          </div>

          <div className="bottom">
                <div>
                  <h3>$120/hr</h3>
                  <p>Banglore,India</p>
                </div>
                <button className="bg-black text-white border-2 ">Apply Now</button>
          </div>
        </div>
  )
}
export default Card
