import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const GoogleSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  useEffect(() => {
    console.log(searchTerm);
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <form /**onSubmit={handleSubmit} */>
      <TextField
        id="outlined-basic"
        label="Cruz Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box width={0.3}>
                <Button type="submit" variant="outlined" size="small" endIcon={<SearchIcon />} />
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default GoogleSearchBar;
