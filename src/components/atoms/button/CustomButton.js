import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import customtheme from "../../theme";
import PropTypes from 'prop-types'

const Mybutton = ({ variant, text, color, onClick }) => {
  return (
    <ThemeProvider theme={customtheme}>
      <Button data-testid='button' color={color} variant={variant} onClick={onClick}>
        {text}
      </Button>

    </ThemeProvider>
  );
};

Mybutton.propTypes = {
  variant: PropTypes.oneOf("contained", "outlined")
}

export default Mybutton;