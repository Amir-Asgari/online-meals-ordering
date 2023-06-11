import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    dark: {
      // This is green.A700 as hex.
      main: '#ccc',
    },
    red:{
      main: '#e57373',
    }
  },
});

export default function CustomizedBadges() {
  return (
    <Stack spacing={1} direction="row">
      <ThemeProvider theme={theme}>

        <Badge badgeContent={4} color="red">
          <ShoppingCartIcon color="dark" />
        </Badge>
      </ThemeProvider>
    </Stack>
  );
}
