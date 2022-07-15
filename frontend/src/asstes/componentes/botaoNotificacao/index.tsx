import axios from 'axios';
import { BASE_URL } from '../../../utils/request';
import icone from '../../img/icone-notificacao.svg'
import './styles.css'

type Props = {
    saleId: number;

}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(Response => {
        console.log("Envio com sucesso")
    })
}

function BotaoNotificacao({saleId} : Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icone} alt="Notificar" />
            </div>
        </>
    )
}

export default BotaoNotificacao
