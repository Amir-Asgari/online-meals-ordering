import  React ,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {
  const [value, setValue] = React.useState(props.meals);
  const [inputValue, setInputValue] = useState('')


  
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      value={value}
      inputValue={inputValue}
      options={props.meals}
      onInputChange={(event , newInputValue)=>{
        setInputValue(newInputValue)
        console.log(event.target.id);
      }}
      onChange={(event,newValue) => {
        setValue(newValue)
        props.handleChange(event, newValue);}}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="جستجو سریع" />}
    />
  );
}

