import { useContext } from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import CartContext from '../../store/cart-context';

const theme = createTheme({
  palette: {
    dark: {
      main: '#ccc',
    },
    red: {
      main: '#e57373',
    }
  },
});

export default function CustomizedBadges() {
  const CartCtx = useContext(CartContext)

  const numberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  return (
    <Stack spacing={1} direction="row" >
      <ThemeProvider theme={theme}>
        <Badge badgeContent={numberOfCartItems} showZero color="red">
          <ShoppingCartIcon color="dark" />
        </Badge>
      </ThemeProvider>
    </Stack>
  );
}
