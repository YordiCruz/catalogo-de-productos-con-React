import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router'; // Importa useRouter

interface SearchbarProps {
    onSearch: (search: string) => void;
}

const Searchbar = ({ onSearch }: SearchbarProps) => {
    const [search, setSearch] = useState("");
    const router = useRouter(); // Obtén el router

    const handleSearch = () => {
        onSearch(search); // Ejecuta la búsqueda (actualiza el contexto)

        // Si NO estoy en /productos, redirijo allí con el término de búsqueda
        if (router.pathname !== '/productos') {
            router.push(`/productos?q=${search}`);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ width: { xs: "100%", sm: "auto" } }}>
            <Box sx={{ display: "flex", gap: 1 }}>
                <TextField 
                    id="outlined-basic" 
                    label="Buscar" 
                    variant="outlined" 
                    size="small" 
                    sx={{ backgroundColor: "white", borderRadius: "10px", color: "black" }}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(); // Buscar al presionar Enter
                        }
                    }}
                />
                <Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: "#e3a9e2", 
                        borderRadius: "100px", 
                        "&:hover": { border: "2px solid white" } 
                    }}
                    onClick={handleSearch} // Usa handleSearch
                >
                    <SearchIcon sx={{ color: "white" }} />
                </Button>
            </Box>
        </Grid>
    );
};

export default Searchbar;