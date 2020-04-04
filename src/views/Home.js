import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Typography from "@material-ui/core/Typography";

class HomeView extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <>
        <Typography variant="h6" noWrap>
          This is a PET-Project
        </Typography>
        <Typography variant="subtitle1" noWrap>
          The test sandbox for learning and testing React features!
        </Typography>
      </>
    );
  }
}

export default HomeView
