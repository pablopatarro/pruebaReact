import FormularioRegistro from "../components/FormularioRegistro";
import BarraNav from "../components/BarraNav";

export default function Registro(){
    //Ruta para mostrar el formulario de registro. 
    return(
        <div>
            <BarraNav datosNavBar={"datos.json"}/>
            <FormularioRegistro />
        </div>
    )
    
}