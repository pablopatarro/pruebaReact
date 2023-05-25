import { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";

export default function FormularioRegistro() {
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");

    const handleRegistro = (e) => {
        e.preventDefault();
        // Aquí iría el código para enviar la información a la API REST
    };
    
    return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <Box textAlign="center">
            <h1>Registro de Usuario</h1>
        </Box>
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            fullWidth
            id="nombreEmpresa"
            label="Nombre de la empresa"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            fullWidth
            id="email"
            label="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            fullWidth
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            fullWidth
            id="confirmarPassword"
            label="Confirmar contraseña"
            type="password"
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
        />
        </Grid>
        <Grid item xs={12}>
        <Box textAlign="center">
            <Button variant="contained" onClick={handleRegistro}>
            Registrarse
            </Button>
        </Box>
        </Grid>
    </Grid>
    );
}
    

