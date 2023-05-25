import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function FormularioInicio() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de autenticación con el backend
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
            />
            <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
                Iniciar sesión
            </Button>
        </form>
    );
};






    

