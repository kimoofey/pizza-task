import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PizzaModal from "../PizzaModal";
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {additionalList} from "../../FakeBackend/items";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
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

const cards = [1, 2, 3];

export default function AdditionalPage() {
    const classes = useStyles();

    return (
        <main>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {cards.map((card, index) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {additionalList[index].title}
                                    </Typography>
                                    <Typography>
                                        {additionalList[index].shortDescription}
                                    </Typography>
                                    <Typography>
                                        {`${additionalList[index].price}$`}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <PizzaModal contentText={additionalList[index].description}
                                                title={additionalList[index].title}/>
                                    <IconButton aria-label="add to favorites">
                                        <RemoveIcon/>
                                    </IconButton>
                                    <IconButton aria-label="cart">
                                        <Badge badgeContent={4} color="secondary">
                                            <ShoppingCartIcon/>
                                        </Badge>
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <AddIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    );
}