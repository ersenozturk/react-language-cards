import React from 'react'
import './Item.css'
import { useState } from 'react'

const Item = (props) => {  //! or const Item = ({lngCard}) 

    const [showlogo, setShowlogo] = useState(true)

    const handleCard = () => {
        setShowlogo(!showlogo)
    }

    // console.log(props);
    // console.log(props.lngCard);
    const {name,img,options} = props.lngCard
    
  return (
    <div className='card' onClick={handleCard}>
        {
            showlogo ? (

                <div>
                    <img className='card-logo' src={img} alt="" />
                    <h1 className='card-title'>{name}</h1>
                </div>

            ) : (
                
                <ul className='list'>
                    {
                        options.map((option,index)=>{
                        return(
                                <li key={index}>{option} </li>
                        ) 
                        })
                    }
                </ul>

            )
        }
    </div>
  )
}

export default Item