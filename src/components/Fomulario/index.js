import { Link } from "react-router-dom"
import "./style.css"

const Formulario = ()=>{
    return(
        <div className="formulario">
            <input type="text" placeholder="Descriçao do Lançamento"></input>
            <input type="text" placeholder="Valor de entrada"></input>
            <input type="text" placeholder="Valor de saida"></input>
            <Link to="/"><button>salvar</button></Link>
            
        </div>
    )
}

export default Formulario