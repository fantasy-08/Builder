import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function ShowProduct({product,Removebuild}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className="container">
            <div class="row">
            {
                product.map((data) => {
                    return (
                        <div class="col-sm-3 ">
                        <Card className={classes.root} variant="outlined">
                        <CardContent>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Product Details
                          </Typography>
                          <Typography variant="h5" component="h2">
                            {data.productName}
                          </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                                    Raw Materials
                          </Typography>
                                <ul>
                                {
                                    data.material.map((raw) => {
                                        return (
                                            <li>{raw.name}</li>           
                                        )
                                    })
                                }
                                </ul>
                        </CardContent>
                        <CardActions>
                                <Button size="small" onClick={() => {Removebuild(data) }}>Remove</Button>
                        </CardActions>
                            </Card>
                        </div>
                   ) 
                })
            }
            </div>
        </div>
    )
}

export default ShowProduct
