import BarraNav from "../components/BarraNav";

export default function Home(){
    //En el home se muestra solo la barra de navegación.
    return(
        <div>
            <BarraNav datosNavBar={"datos.json"}/>
        </div>
    );
}