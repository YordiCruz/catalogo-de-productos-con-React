import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

interface SearchbarProps {
    onSearch: (search: string) => void
}
const Searchbar = ({onSearch}: SearchbarProps) => {
    const [search, setSearch] = useState("");
  return (
    <Box sx={{display: "flex", gap:1}} >
     <TextField id="outlined-basic" label="Buscar" variant="outlined" size="small" 
      sx={{backgroundColor: "white", borderRadius: "10px", width: "800px", color: "black"}}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
    
    <Button sx={{backgroundColor: "#e3a9e2", borderRadius: "10px", color: "white"}} 

      onClick={() => {
        onSearch(search);
      }}>
    Buscar
    </Button>

    
      
    </Box>
  )
}

export default Searchbar
