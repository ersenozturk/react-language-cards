import './Card.css'
import  languages  from '../../helpers/data';
import Item from '../Item/Item';



const Card = () => {
    return(
        <div className='cards-area-container'>
            <div className='bars '></div>
            <h5 className='language-title'>LaNgUaGeS</h5>
            <div className='cards-container'>
                {/* {console.log({languages})} */}
                {languages.map((item,index)=>{
                    return(
                        // console.log(item,index)
                        <Item lngCard={item} key={index}/>

                    )
                })}

            </div>
        </div>
    )
}

export default Card;