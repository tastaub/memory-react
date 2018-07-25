import React from "react";
import { Image } from 'semantic-ui-react'

import "./Wrapper.css"

const Wrapper = props => (
        <Image.Group size="small">
            {props.data.map(x => (
                <Image src={x.image}  onClick={() => {props.onClick(x.id)}}  />
            ))}
        </Image.Group>
)

export default Wrapper;
