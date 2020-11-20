import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ShowRawMateial({ choices,removeMaterial}) {
    const classes = useStyles();
    const handleDelete = (chipToDelete) => () => {
        removeMaterial(chipToDelete);
      };
    
  return (
      <Paper component="ul" className={classes.root}>           
        {
        choices.material.map((data) => {
        let icon=<AddCircleOutlineIcon/>;
        return (
        <li >
            <Chip
            icon={icon}
            label={data.name}
            onDelete={handleDelete(data.name)}
            className={classes.chip}
            />
        </li>
        );
        })
        } 
    </Paper>
  );
}