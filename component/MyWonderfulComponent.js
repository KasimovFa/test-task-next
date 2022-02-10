import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import useStyles from  "../styles/style";


const MyWonderfulComponent = ({id, options,count,color,data, children, str}) => {
    const [ summ, setSumm ] = useState(count);
    const {classes} = useStyles();

    console.log(str)

  
    useEffect(() => {
      if (id && options && color && data) {
         setSumm(prev => prev + summ + 1);
      }
    },[]);
  
    return (
      <Container>
         <h1 className={classes.title}>Hello World!</h1>
         <Grid>
         <Typography variant="h5" component="h5">
              {children}
            </Typography>
           <Typography variant="h5" component="h5">
               Count: {count}
            </Typography>
         </Grid>
      </Container>
    );
  };

  export default MyWonderfulComponent;