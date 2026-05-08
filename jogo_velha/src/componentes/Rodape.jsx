
import Jogada from './Jogada';
import './Rodape.css';

const Rodape = ({historico, func}) => {
    /*
    let jogadas = [];

    for (let i = 0; i < historico.length; i++) {
        const jog = historico[i];
        const compJogada = <Jogada key={i} jogada={jog} />
        jogadas.push(compJogada);
    }
    */

    const jogadasMap = historico.map(
        (jog, ind) => <Jogada key={ind} jogada={jog} func= {()=> func(ind)} />
    )

    return (
        <footer className='rodape'>
            <p>Histórico jogadas:</p>
            <div className='jogadas'>
                {jogadasMap}
            </div>
        </footer>
    )
}

export default Rodape;