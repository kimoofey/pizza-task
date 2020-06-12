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
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from "react-redux";
import {ADD_PIZZA, REMOVE_PIZZA} from "../../actions/pizzaAT";

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
        display: 'flex',
        justifyContent: 'center',
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
        const {
            classes,
            pizzaItems,
            increment,
            decrement,
        } = this.props;
        return (
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card, index) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    title="Mmm... Pizza"
                                > <img src={pizzaItems[index].image} alt="recipe thumbnail"/>
                                </CardMedia>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {pizzaItems[index].title}
                                    </Typography>
                                    <Typography>
                                        {pizzaItems[index].shortDescription}
                                    </Typography>
                                    <Typography>
                                        {`${pizzaItems[index].price}$`}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <PizzaModal contentText={pizzaItems[index].description}
                                                title={pizzaItems[index].title}/>
                                    <Tooltip title="Remove">
                                        <IconButton aria-label="remove-from-cart" onClick={() => decrement(index)}>
                                            <RemoveIcon/>
                                        </IconButton>
                                    </Tooltip>
                                    <IconButton aria-label="cart">
                                        <Badge badgeContent={pizzaItems[index].amount} color="secondary">
                                            <ShoppingCartIcon/>
                                        </Badge>
                                    </IconButton>
                                    <Tooltip title="Add">
                                        <IconButton aria-label="add-to-cart" onClick={() => increment(index)}>
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

const mapStateToProps = state => {
    return {pizzaItems: state.pizzaReducer.items};
};

const mapDispatchToProps = dispatch => {
    return {
        increment: id => dispatch({type: ADD_PIZZA, id}),
        decrement: id => dispatch({type: REMOVE_PIZZA, id}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PizzaPage));