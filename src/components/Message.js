import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  title: {
    padding: 16,
    paddingLeft: 0,
  },
});

const Message = props => (
  <div>
    <Typography
      className={props.classes.title}
      color="primary"
      align="center"
      variant="title"
    >
      Compare composer package download stats!
    </Typography>
    <Typography align="center" variant="body2">
      Example:
      <a href="/?q[]=laravel%2Flaravel&q[]=slim%2Fslim&q[]=yiisoft%2Fyii2&q[]=cakephp%2Fcakephp">
        Laravel vs Slim vs Yii2 vs CakePHP
      </a>
    </Typography>
  </div>
);

export default withStyles(styles)(Message);
