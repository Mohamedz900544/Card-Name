import '../Style_Componets/Card_Style.css'
import Photo from './photo'
import Name from './name'
import Adress from './address';

function Card(){
    return(
    <div className = "MainCard">      
        <Photo/> 
        <Name/>
        <Adress/>
    </div>
    )
}

export default Card;