import React from 'react';
import { TextField, Button, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const GoogleSearchBar = (props) => {
  return (
    <TextField
    id="outlined-basic"
    label="Cruz Search"
    variant="outlined"
    value={props.searchWord}
    onChange={(e) => props.setSearchWord(e.target.value)}
    InputProps={{
      endAdornment: (
      <InputAdornment position="end">
        <Box width={0.3}>
          <Button
            type="submit"
            variant="outlined"
            size="small"
            endIcon={<SearchIcon />}
            onClick={() => {
              props.search();
            }}
          />
        </Box>
      </InputAdornment>
      ),
    }}
    />
  );
};

export default GoogleSearchBar;
