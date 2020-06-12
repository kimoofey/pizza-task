import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from "@material-ui/core/FormGroup";
import Divider from '@material-ui/core/Divider';
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {ADD_PIZZA, REMOVE_PIZZA} from "../../actions/pizzaAT";
import {connect} from "react-redux";
import {ADD_ITEM, REMOVE_ITEM} from "../../actions/additionalMenuAT";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getTotalPriceAdditional, getTotalPricePizza} from "../../selectors";
import {FILLED_EMAIL, FILLED_FIRST_NAME, FILLED_LAST_NAME} from "../../actions/formAT";

const styles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class OrderForm extends Component {
    render() {
        const {
            pizzaItems,
            additionalItems,
            incrementPizza,
            decrementPizza,
            incrementAdditional,
            decrementAdditional,
            pizzaTotal,
            additionalTotal,
            firstNameValue,
            lastNameValue,
            emailValue,
            filledFirstName,
            filledLastName,
            filledEmail,
        } = this.props;

        return (
            <div>
                <Typography gutterBottom variant="h5" component="h2">Your order</Typography>
                {(pizzaTotal + additionalTotal) === 0
                    ? <Typography gutterBottom variant="h5"
                                  component="h3">{`Empty 😔. Please go take some pizza!`}</Typography>
                    : <div>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Subtotal</TableCell>
                                        <TableCell align="right">Remove</TableCell>
                                        <TableCell align="center">Add</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {pizzaItems.map((item) => {
                                        if (item.amount > 0) {
                                            return (
                                                <TableRow key={`pizza-${item.id}`}>
                                                    <TableCell component="th" scope="row">
                                                        {item.title}
                                                    </TableCell>
                                                    <TableCell align="right">{item.amount}</TableCell>
                                                    <TableCell align="right">{item.price}</TableCell>
                                                    <TableCell align="right">{item.amount * item.price}</TableCell>
                                                    <TableCell align="right">
                                                        <Tooltip title="Remove">
                                                            <IconButton aria-label="remove-from-cart"
                                                                        onClick={() => decrementPizza(item.id)}>
                                                                <RemoveIcon/>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Tooltip title="Add">
                                                            <IconButton aria-label="add-to-cart"
                                                                        onClick={() => incrementPizza(item.id)}>
                                                                <AddIcon/>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    })}
                                    {additionalItems.map((item) => {
                                        if (item.amount > 0) {
                                            return (
                                                <TableRow key={`additional-item-${item.id}`}>
                                                    <TableCell component="th" scope="row">
                                                        {item.title}
                                                    </TableCell>
                                                    <TableCell align="right">{item.amount}</TableCell>
                                                    <TableCell align="right">{item.price}</TableCell>
                                                    <TableCell align="right">{item.amount * item.price}</TableCell>
                                                    <TableCell align="right">
                                                        <Tooltip title="Remove">
                                                            <IconButton aria-label="remove-from-cart"
                                                                        onClick={() => decrementAdditional(item.id)}>
                                                                <RemoveIcon/>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell align="right">
                                                        <Tooltip title="Add">
                                                            <IconButton aria-label="add-to-cart"
                                                                        onClick={() => incrementAdditional(item.id)}>
                                                                <AddIcon/>
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Divider/>
                        <Typography gutterBottom variant="h5"
                                    component="h3">{`Total: ${pizzaTotal + additionalTotal}`}</Typography>
                        <FormGroup noValidate autoComplete="off">
                            <TextField
                                required
                                id="first-name-required"
                                label="First Name"
                                value={firstNameValue}
                                onChange={(e) => filledFirstName({value: e.target.value, filled: !!e.target.value})}
                            />
                            <TextField
                                required
                                id="last-name-required"
                                label="Last Name"
                                value={lastNameValue}
                                onChange={(e) => filledLastName({value: e.target.value, filled: !!e.target.value})}
                            />
                            <TextField
                                required
                                id="standard-email-input"
                                label="Email"
                                value={emailValue}
                                onChange={(e) => filledEmail({value: e.target.value, filled: !!e.target.value})}
                            />
                            <TextField
                                id="standard-number"
                                label="Contact number"
                            />
                        </FormGroup>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        pizzaItems: state.pizzaReducer.items,
        additionalItems: state.additionalMenuReducer.items,
        pizzaTotal: getTotalPricePizza(state),
        additionalTotal: getTotalPriceAdditional(state),
        firstNameValue: state.formReducer.items.firstName.value,
        lastNameValue: state.formReducer.items.lastName.value,
        emailValue: state.formReducer.items.email.value,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementPizza: id => dispatch({type: ADD_PIZZA, id}),
        decrementPizza: id => dispatch({type: REMOVE_PIZZA, id}),
        incrementAdditional: id => dispatch({type: ADD_ITEM, id}),
        decrementAdditional: id => dispatch({type: REMOVE_ITEM, id}),
        filledFirstName: item => dispatch({type: FILLED_FIRST_NAME, payload: item}),
        filledLastName: item => dispatch({type: FILLED_LAST_NAME, payload: item}),
        filledEmail: item => dispatch({type: FILLED_EMAIL, payload: item}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OrderForm));