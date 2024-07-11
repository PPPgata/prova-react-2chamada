import "./style.css"


const CardSemBotao = ({titulo,saldo})=>{
    return(
            <div className="card">
                <span>{titulo}</span>
                <span>{saldo}</span>
            </div>
    )

}

export default CardSemBotao
