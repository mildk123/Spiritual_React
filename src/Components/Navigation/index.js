import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="text"  color="primary" className={classes.button}>
        Home
      </Button>
      <Button variant="text"  color="primary" className={classes.button}>
        About Us
      </Button>
      <Button variant="text"  color="primary" className={classes.button}>
        Services
      </Button>
      <Button variant="text"  color="primary" className={classes.button}>
        Specials
      </Button>
      <Button variant="text"  color="primary" className={classes.button}>
        Appointment
      </Button>
      <Button variant="extendedFab"  color="secondary" className={classes.button}>
        Login
      </Button>
      
      <Button variant="extendedFab"  color="secondary" className={classes.button}>
        sign up
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
