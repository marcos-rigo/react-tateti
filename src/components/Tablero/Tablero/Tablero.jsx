import { useState } from "react";
import Casillero from "../Casillero/Casillero";
import "./Tablero.css"

const Tablero = () => {
    const [turno, setTurno] = useState("X");
    const [juego, setJuego] = useState(["","","","","","","","",""]);

    const handleJuego = (position) => {
        if(juego[position]!="") return;
        const juegoArray = [...juego]; //Para hacer copias de array
        juegoArray[position] = turno;
        setJuego(juegoArray);
        if (turno=="X"){
            setTurno("O")
        }else{
            setTurno("X")
        }
    }

    return (
        <>
            <h2>Este es el tablero</h2>
            <div className="tablero">

                <div>
                <Casillero simbolo={juego[0]} action={()=>handleJuego(0)}/>
                <Casillero simbolo={juego[1]} action={()=>handleJuego(1)}/>
                <Casillero simbolo={juego[2]} action={()=>handleJuego(2)}/>
                </div>

                <div>
                <Casillero simbolo={juego[3]} action={()=>handleJuego(3)}/>
                <Casillero simbolo={juego[4]} action={()=>handleJuego(4)}/>
                <Casillero simbolo={juego[5]} action={()=>handleJuego(5)}/>
                </div>

                <div>
                <Casillero simbolo={juego[6]} action={()=>handleJuego(6)}/>
                <Casillero simbolo={juego[7]} action={()=>handleJuego(7)}/>
                <Casillero simbolo={juego[8]} action={()=>handleJuego(8)}/>
                </div>

            </div>

        </>
    );
}

export default Tablero;