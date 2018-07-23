import React from "react";
import { Grid } from 'semantic-ui-react'

const Wrapper = props => (
    <Grid>
        <Grid.Row columns={4}>
            {props.children}
        </Grid.Row>
    </Grid>
)

export default Wrapper;
