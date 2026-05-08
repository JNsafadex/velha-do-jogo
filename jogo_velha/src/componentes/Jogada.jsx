import './Jogada.css'

const Jogada = ({jogada, func}) => {
    const jog = jogada;
    return (
        <div onClick={func }>
            <p>{jog[0] || '_'} | {jog[1] || '_'} | {jog[2] || '_'}</p>
            <p>{jog[3] || '_'} | {jog[4] || '_'} | {jog[5] || '_'}</p>
            <p>{jog[6] || '_'} | {jog[7] || '_'} | {jog[8] || '_'}</p>
        </div>
    )
}

export default Jogada;