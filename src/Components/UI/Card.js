import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



const Card = (props) => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: "center",
                marginTop: '-200px',
                marginBottom: '200px',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: "90%",
                    height: "100%",
                    borderRadius: "10px",
                    maxWidth: 550,
                    zIndex: 50,
                    padding: '20px',
                },
            }}
        >
            <Paper>
                {props.children}
            </Paper>
        </Box>
    );
}
export default Card;
