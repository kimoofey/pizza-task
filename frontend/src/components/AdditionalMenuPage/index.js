import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PizzaModal from "../PizzaModal";
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import {ADD_ITEM, REMOVE_ITEM} from "../../actions/additionalMenuAT";

const styles = theme => ({
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
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    cardContent: {
        flexGrow: 1,
        textAlign: 'center'
    },
    cardAction: {
        justifyContent: 'space-between',
    },
});

const cards = [1, 2, 3];

class AdditionalPage extends Component {
    render() {
        const {
            classes,
            additionalItems,
            increment,
            decrement,
        } = this.props;

        return (
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card, index) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {additionalItems[index].title}
                                        </Typography>
                                        <Typography>
                                            {additionalItems[index].shortDescription}
                                        </Typography>
                                        <Typography>
                                            {`${additionalItems[index].price}$`}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.cardAction}>
                                        <PizzaModal contentText={additionalItems[index].description}
                                                    title={additionalItems[index].title}/>
                                        <div>
                                            <IconButton aria-label="remove-from-cart" onClick={() => decrement(index)}>
                                                <RemoveIcon/>
                                            </IconButton>
                                            <IconButton aria-label="cart">
                                                <Badge badgeContent={additionalItems[index].amount} color="secondary">
                                                    <ShoppingCartIcon/>
                                                </Badge>
                                            </IconButton>
                                            <IconButton aria-label="add-to-cart" onClick={() => increment(index)}>
                                                <AddIcon/>
                                            </IconButton>
                                        </div>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    additionalItems: state.additionalMenuReducer.items,
});

const mapDispatchToProps = dispatch => ({
    increment: id => dispatch({type: ADD_ITEM, id}),
    decrement: id => dispatch({type: REMOVE_ITEM, id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdditionalPage));