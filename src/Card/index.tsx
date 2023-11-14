import { useState } from "react"
import './styles.css'

export default function Card() {

    let [qtd, setQtd] = useState<number>(1);
    const [valor, setValor] = useState<number>(10);
    const [total, setTotal] = useState<number>(valor);

    const somar = () => {
        setQtd( qtd + 1 )
        setTotal( (qtd + 1) * valor)
    }

    const sub = () => {
        setQtd( qtd - 1)
        setTotal( (qtd - 1) * valor)

        if (qtd < 1) {
            setQtd(0)
            setTotal(0)
        }
    }

    return (
    <div className="card">
        <div className="input-group">

            <button 
                className='soma'
                
                // onClick={ () => setQtd( qtd - 1 ) }
                onClick={ () => sub() }
            
            > 
                <i className="fa-solid fa-minus"></i>
            </button>

            <input 
                type="text" 
                className="input" 
                value={qtd}
                />
            <button className='sub'
                // onClick={ () => setQtd( qtd + 1 ) }
                onClick={ somar }
                > <i style={{ textAlign: 'center' }} className="fa-solid fa-plus"></i> 

                </button>

            <span style={{ marginLeft: 10 }}>Impulso(s) de servidor</span>
            <span style={{ color: '#33FF', marginTop: 16 }}> R$ {valor}/mês</span>

        </div>

        <h3 style={{ marginBottom: 0 }}>Total</h3>
        <h2>R$ {total}</h2>
    </div>
  )
}