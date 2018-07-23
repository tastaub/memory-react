import React from "react";
import { Grid, Image } from 'semantic-ui-react'

import "./xMen.css"



  const Xmen = props => (
        <Grid.Column>
          <Image src={props.image} />
        </Grid.Column>
  )

export default Xmen;
