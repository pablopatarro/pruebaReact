import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


//A este componente le entra el nombre del fichero 
//que contiene lo que vamos a mostrar en la navbar.
//El mismo componente llama al fichero 
export default function NavBar({datosNavBar}){
    const [info,setInfo] = useState({listaItem:[],
                                    url:"",
                                    titulo:""});

    useEffect(()=>{
        //Llamada a la función que recupera los datos.

        async function fechtDatos(nombreFicheroDatos){
            let respuesta = await fetch("./json/"+nombreFicheroDatos);
            if(respuesta.ok)
            {
                let datos = await respuesta.json();
                setInfo(datos);
            }
        }

        fechtDatos(datosNavBar);



//Como queremos que la llamada (y el renderizado) dependa de los datos de entrada,
// en el array de dependencias ponemos la prop que se le pasa al componente.
    },[datosNavBar]  );



    const listaNavItem = info.listaItem.map((elemInfo) => {
    
        //Si el elemento tiene url,  es un navItem, en caso contrario, es un navItemDropdown.
        if(elemInfo.url)
        {
          return( 
            <div className="m-2">
                <NavItem info={elemInfo} esDropdown={false} />
            </div>
          );
        }
        else
        {
          return(
            <NavItemDropdown info={elemInfo} />
          );
        }
       
      })
    


      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
          <div className="container-fluid">
            <Link className="navbar-brand" to={info.url}>{info.titulo}</Link>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/*METEMOS LOS NAV ITEMS*/}
                {listaNavItem}
              </ul>
            </div>
          </div>
        </nav>
    
      );
    
}

//Componentes "auxiliares"

function NavItem({ info, esDropdown }) {

    return (
      <li className={esDropdown ? "dropdown-item" : "nav-item"} key={info.id}>
         <Link className="text-white"  style={{ textDecoration: 'none' }} id={info.id} to={info.url}>{info.titulo}</Link>
         <br></br>
        {/* <a className="nav-link" id={info.id} href={info.url}>{info.titulo}</a> */}
      </li>
    );
  }
  
  function NavItemDropdown({ info }) {
  
    const listaNavItem = info.listaItem.map((elemInfo) => {
      return (
        <NavItem info={elemInfo} esDropdown={true} />
      );
    })
    return (
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button"  data-bs-toggle="dropdown" aria-expanded="false" to > {info.titulo}</Link>
        
          <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
            {listaNavItem}
          </ul>
        </li>
    
      );
    
    }
    

