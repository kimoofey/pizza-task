import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PizzaModal from "../PizzaModal";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import Badge from '@material-ui/core/Badge';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {pizzaList} from "../../FakeBackend/items";
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%',
        width: '100%',
        height: '100%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class PizzaPage extends Component {

    render() {
        const {classes} = this.props;
        return (
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card, index) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    title="Mmm... Pizza"
                                > <img src={pizzaList[index].image} alt="recipe thumbnail"/>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {pizzaList[index].title}
                                    </Typography>
                                    <Typography>
                                        {pizzaList[index].shortDescription}
                                    </Typography>
                                    <Typography>
                                        {`${pizzaList[index].price}$`}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <PizzaModal contentText={pizzaList[index].description}
                                                title={pizzaList[index].title}/>
                                    <Tooltip title="Remove">
                                        <IconButton aria-label="add to favorites">
                                            <RemoveIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <IconButton aria-label="cart">
                                        <Badge badgeContent={4} color="secondary">
                                            <ShoppingCartIcon/>
                                        </Badge>
                                    </IconButton>
                                    <Tooltip title="Add">
                                        <IconButton aria-label="share">
                                            <AddIcon/>
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default withStyles(styles)(PizzaPage);