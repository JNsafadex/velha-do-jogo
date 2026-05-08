/*
import Cabecalho from './Cabecalho';
import Celula from './Celula';
import Rodape from './Rodape';

import './Jogo.css';
import { useState } from 'react';

const Jogo = () => {
    const [vezJogador, setVezJogador] = useState('O');
    const [estadoTabuleiro, setEstadoTabuleiro] = useState(Array(9).fill(null));
    const [historicoJogadas, setHistoricoJogadas] = useState([]);

    const fazerJogada = (i) => {
        if (estadoTabuleiro[i] == null && fimJogo(estadoTabuleiro) == null) {
            let vez = vezJogador;
            let jogada = [...estadoTabuleiro];
            jogada[i] = vez;
            const vencedor = fimJogo(jogada);
            if (vencedor) {
                alert(`O Jogo acabou e ${vencedor} venceu!!!`);
            }
            
            let historico = [...historicoJogadas];
            historico.push(jogada);

            setEstadoTabuleiro(jogada);
            setVezJogador(vez == 'X' ? 'O' : 'X');   
            setHistoricoJogadas(historico);
        }
    }

    const fimJogo = (tab) => {
        if (tab[0] && tab[0] === tab[1] && tab[0] === tab[2]) return tab[0]
        if (tab[3] && tab[3] === tab[4] && tab[3] === tab[5]) return tab[3]
        if (tab[6] && tab[6] === tab[7] && tab[6] === tab[8]) return tab[6]
        if (tab[0] && tab[0] === tab[3] && tab[0] === tab[6]) return tab[0]
        if (tab[1] && tab[1] === tab[4] && tab[1] === tab[7]) return tab[1]
        if (tab[2] && tab[2] === tab[5] && tab[2] === tab[8]) return tab[2]
        if (tab[0] && tab[0] === tab[4] && tab[0] === tab[8]) return tab[0]
        if (tab[2] && tab[2] === tab[4] && tab[2] === tab[6]) return tab[2]
        
        return null
    }

    return (
        <div className='jogo'>
            <Cabecalho vez={vezJogador} />
            <div className='tabuleiro'>
                <div className='linhaTabuleiro'>
                    <Celula valor={estadoTabuleiro[0]} onClick={() => fazerJogada(0)} />
                    <Celula valor={estadoTabuleiro[1]} onClick={() => fazerJogada(1)} />
                    <Celula valor={estadoTabuleiro[2]} onClick={() => fazerJogada(2)} />
                </div>
                <div className='linhaTabuleiro'>
                    <Celula valor={estadoTabuleiro[3]} onClick={() => fazerJogada(3)} />
                    <Celula valor={estadoTabuleiro[4]} onClick={() => fazerJogada(4)} />
                    <Celula valor={estadoTabuleiro[5]} onClick={() => fazerJogada(5)} />
                </div>
                <div className='linhaTabuleiro'>
                    <Celula valor={estadoTabuleiro[6]} onClick={() => fazerJogada(6)} />
                    <Celula valor={estadoTabuleiro[7]} onClick={() => fazerJogada(7)} />
                    <Celula valor={estadoTabuleiro[8]} onClick={() => fazerJogada(8)} />
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default Jogo;
*/