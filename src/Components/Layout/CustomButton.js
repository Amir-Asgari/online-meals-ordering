import React ,{useState, useEffect,useContext}  from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CustomizedBadges from './CustomizedBadges'
import classes from './CustomizedButton.module.css'
import CartContext from '../../store/cart-context';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: '#fff',
    },
  },
});

export default function CustomButton (props) {

  const CartCtx = useContext(CartContext)
  const items = CartCtx.items

 const [btnHighlighted, setBtnHighlighted] = useState(false)

 const btnClass = `${btnHighlighted ? classes.bump: ''}`
 
 useEffect(() => {
   if(items.length===0){
    return;
   }
 setBtnHighlighted(true);
 const timer =setTimeout(()=>{
  setBtnHighlighted(false)
 },300);
 return ()=>{
  clearTimeout(timer)
 };
 }, [items])
 
  return (
    <Stack direction="row" spacing={1} className={btnClass}>
      <ThemeProvider theme={theme}>
        <Button style={{ backgroundColor: "#4d1601", borderRadius: 30, padding: 10 }} onClick={props.onShownCart} variant="secondary" endIcon={<CustomizedBadges />}>
          Your Cart
        </Button>
      </ThemeProvider>
    </Stack>
  );
}
