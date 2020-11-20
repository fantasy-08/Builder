import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import raw_material from '../server';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import ShowRawMaterial from './ShowRawMaterial';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function CreteNew({addNewbuild}) {
  const classes = useStyles();
  const [choices, setChoices] = useState(
    {
      productName: "",
      material: []
    }
  )
  const removeMaterial = (data) => {
    setChoices((prev_choices) => {
      var name = prev_choices.productName;
      var array = prev_choices.material.filter((curr) => {
        return curr.name !== data;
      });
      var New_Choices = {
        productName: name,
        material:array
      }
      return New_Choices;
    })    
  }

  const MaterialChange = (name, value) => {
    setChoices((prev) => {
      return {
        ...prev,
        material:[...prev.material,value]
      }
    })
    setValue('');
    setInputValue('');
    // console.log(choices);
  }
  const productChange = (event) => {
    const temp = event.target.value;
    const name = event.target.name
    if (name === "productName") {
      setChoices((prevData) => {
        return {
          ...prevData,
          [name]: [temp]
        }
      });
    }
    // console.log(choices);
  }
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  function submitChoice()
  {
    if (choices.productName)
    {
      addNewbuild(choices);
      setChoices({
        productName: "",
        material: []
      })
      setValue('')
      setInputValue('')
    }
  }
  return (
    <div className={classes.root, "container"}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Create New Product</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Choose Raw Material</Typography>
          </div>
        </AccordionSummary>
        <div class="form-row align-items-center container">
          <div class="col-sm-3 my-1">
            <label class="sr-only" for="inlineFormInputName">Product Name</label>
            <input type="text" class="form-control" id="inlineFormInputName" placeholder="Product Name" name="productName" value={choices.productName} onChange={productChange} />
          </div>
          <div className="col-sm-3">
            <Autocomplete
              id="combo-box-demo"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                if (newValue)
                  MaterialChange("material", newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              options={raw_material}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Raw Materials" variant="outlined" />}
            />
          </div>
        </div>
        <br />
        <Divider />
        <br />
        <div className={classes.column,"container"}>
          <Typography className={classes.secondaryHeading}>Your Choices</Typography>
          <h6>{choices.productName}</h6>
          <ShowRawMaterial choices={choices} removeMaterial={removeMaterial}/>
        </div>
        <AccordionActions>
          <Button size="small" color="primary" onClick={submitChoice}>
            Save
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

