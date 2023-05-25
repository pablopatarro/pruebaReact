import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function BarraNav({datosNavBar}) {
    const [datos, setDatos] = useState({listaItem:[],url:"",titulo:""});
    //Usamos los estilos como una clase.
    const navigation = useNavigate(); 

    useEffect(()=>{
        async function fechtDatos(nombreFicheroDatos){
            let respuesta = await fetch("./json/"+nombreFicheroDatos);
            if(respuesta.ok)
            {
                let resultado = await respuesta.json();
                setDatos(resultado);
            }
        }

        fechtDatos(datosNavBar);
    },[datosNavBar]);


  return (
    <div >
      <AppBar position="static">
        <Toolbar spacing={3}>
          <Typography variant="h6" sx={{ flexGrow: 1 , margin: "auto"}}>{datos.titulo}</Typography>
          {datos.listaItem.map((navLink) => (
            
            <Link key={navLink.id} onClick={() => navigation(navLink.url)} style={{ marginLeft: 'auto', color: 'white' }}>
              {navLink.titulo}
              
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
