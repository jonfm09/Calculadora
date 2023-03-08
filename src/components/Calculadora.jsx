import React, {useState} from 'react'

export default function Calculadora() {
  
  /** Guardando el resultado de las operaciones con un estado */
    const [resultado, setResultado] = useState(""); 

    /** asignacion de metodos */
    const limpiar = () => {
        setResultado("");

    }

    const eliminarItem = () => {
        /**
         * slice: te manda una parte de la cadena "Hol"
         * eliminando caracter por caracter con el metodo slice
         * 
         */

        setResultado(resultado.slice(0,-1))

    }

    const handleClick = (e) => {
        /** concatenando los valores de los botones 
         * capturamos el valor del id de cada boton
         * 
        */

        console.log(e.currentTarget.id);
        setResultado(resultado.concat(e.currentTarget.id));

    }

    const calcular = () => {
        /** Validamos el resultado de la operacion
         * eval() => evalua una cadena de numeros y si hay operador hace la operacion 
         * 
         */
            try{

                setResultado(eval(resultado).toString()); /// Devuelve una cadena con numero, imprime el resultado
            }catch{
                setResultado("El resultado es invalido")

            }
        
    }

    return (

    <div className='contenedor'>
        <div className = 'calculadora'>
            <input type="text" value={resultado} disabled />
            <div>
                <button  className='button-operador' onClick={limpiar}> AC </button>
                <button  className='button-operador' onClick={eliminarItem} > DE </button>
                <button  className='button-operador' id='.'onClick={handleClick} > . </button>
                <button className='button-operador' id='/'onClick={handleClick} > / </button>
                <br></br>
                <button  className='button-numero' id='7'onClick={handleClick} > 7 </button>
                <button  className='button-numero' id='8'onClick={handleClick} > 8 </button>
                <button  className='button-numero' id='9'onClick={handleClick} > 9 </button>
                <button  className='button-operador' id='*'onClick={handleClick} > * </button>
                <br></br>
                <button className='button-numero' id='4'onClick={handleClick} > 4 </button>
                <button className='button-numero' id='5'onClick={handleClick} > 5 </button>
                <button className='button-numero' id='6'onClick={handleClick} > 6 </button>
                <button  className='button-operador' id='-'onClick={handleClick} > - </button>
                <br></br>
                <button className='button-numero' id='1'onClick={handleClick} > 1 </button>
                <button className='button-numero' id='2'onClick={handleClick} > 2 </button>
                <button className='button-numero' id='3'onClick={handleClick} > 3 </button>
                <button  className='button-operador' id='+'onClick={handleClick} > + </button>
                <br></br>
                <button className='button-numero' id='00'onClick={handleClick} > 00 </button>
                <button className='button-numero' id='0'onClick={handleClick} > 0 </button>
                <button className='button-operador' id='='onClick={calcular} > = </button>
            </div>
        </div>       
    </div>
  )
}
