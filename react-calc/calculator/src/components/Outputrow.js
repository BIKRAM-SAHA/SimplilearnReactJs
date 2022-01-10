import React from 'react'
import './Outputrow.css'

const Outputrow = props => {
     return(
         <div>
             <input type="text" readOnly className='screen' style={props.textsize} value={props.value}/>
         </div>
     )
}

export default Outputrow