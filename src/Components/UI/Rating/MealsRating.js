import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const MealsRating = (props) => {
    // const [value, setValue] = React.useState < number | null > (2);

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >

            {/* <Typography component="legend">Read only</Typography> */}
            <Rating name="read-only" value={props.value} readOnly  precision={0.1}  />

        </Box>
    );
}


export default MealsRating