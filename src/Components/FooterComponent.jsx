import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./BodyComponent/BodyStyles";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function FooterComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' color='textSecondary' align='center'>
            All right reserved @aakalpteam 2022
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
