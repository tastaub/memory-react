
import React from 'react'
import { Container } from 'semantic-ui-react'

import "./Container.css"

const Content = props => (
    <Container>
        {props.children}
    </Container>
  )
  
  export default Content
  