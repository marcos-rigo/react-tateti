import "./Casillero.css"

const Casillero = (props) => {
    return ( 
        <>
            <button className="btn btn-warning casillero mx-1 my-1" onClick={props.action}>
                {props.simbolo}
            </button>
        </>
     );
}
 
export default Casillero;