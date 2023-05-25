import BarraNav from "../components/BarraNav";
import FormularioInicio from "../components/FormularioInicio";

export default function Inicio(){
    //Ruta para mostrar el formulario de registro.
    return(
        <div>
            <BarraNav datosNavBar={"datos.json"}/>
            <FormularioInicio />
        </div>
    )
    
}