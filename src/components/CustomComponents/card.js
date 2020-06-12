import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

export const customCardMedia = withStyles({
    paddingTop: '56.25%',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
})(CardMedia);