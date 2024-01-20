import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

const GoogleSearchBar = () => {
  return (
    <TextField
      id="outlined-basic"
      label="Cruz Search"
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        sx: {
          backgroundColor: 'white',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: '#f1f1f1',
          },
        },
      }}
    />
  );
};

export default GoogleSearchBar;