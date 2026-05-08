
import './Cabecalho.css';

const Cabecalho = ({vez}) => {
    return (
        <header className='cabecalho'>
            <h1>Jogo da Velha</h1>
            <p>Vez jogador: {vez}</p>
        </header>
    )
}

export default Cabecalho;