import { Link } from "react-router-dom"
import "./style.css"


const Card = ({titulo,saldo,textoBotao})=>{
    return(
            <div className="card">
                <span>{titulo}</span>
                <span>{saldo}</span>
                <Link to="/lancamentos"><button>{textoBotao}</button></Link>
            </div>
    )

}

export default Card


