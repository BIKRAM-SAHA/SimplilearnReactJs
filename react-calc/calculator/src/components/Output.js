import React from 'react'
import Outputrow from './Outputrow'

const Output =props=>{
     return(
         <div>
             <Outputrow value={props.answer} textSize={{fontSize:'20px'}}></Outputrow>
             <Outputrow value={props.user} textSize={{fontSize:'20px'}}></Outputrow>
         </div>
     )
}

export default Output