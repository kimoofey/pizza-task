import PizzaPage from "../PizzaPage";
import React, {Component} from 'react';
import AdditionalPage from "../AdditionalMenuPage";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OrderForm from "../OrderForm";
import {NEXT_PAGE, PREV_PAGE, RESET} from "../../actions/navigationAT";
import {connect} from "react-redux";

const styles = theme => ({
    root: {
        width: '100%',
        paddingBottom: '20px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
});

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <PizzaPage/>;
        case 1:
            return <AdditionalPage/>;
        case 2:
            return <OrderForm/>;
        default:
            return 'Unknown step.';
    }
}

class MainPage extends Component {
    isDisabled() {
        const {formItems: {firstName, lastName, email}, activePage} = this.props;
        if (activePage === 2) {
            return !(firstName.filled && lastName.filled && email.filled);
        } else {
            return false;
        }
    }

    handleReset() {
        window.location.reload(false);
    }

    render() {
        const {
            classes,
            activePage,
            nextPage,
            prevPage,
            resetPage,
            steps,
        } = this.props;
        return (
            <div className={classes.root}>
                <Stepper activeStep={activePage} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.buttons}>
                    {activePage === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>Thanks for your order!</Typography>
                            <Typography className={classes.instructions}>Please wait for delivery.</Typography>
                            <Button onClick={this.handleReset}>Create another order!</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activePage)}</Typography>
                            <div>
                                <Button
                                    disabled={activePage === 0}
                                    onClick={prevPage}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" onClick={nextPage}
                                        disabled={this.isDisabled() === true}>
                                    {activePage === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activePage: state.navigationReducer.activePage,
    steps: state.navigationReducer.steps,
    formItems: state.formReducer.items,
});

const mapDispatchToProps = dispatch => ({
    nextPage: () => dispatch({type: NEXT_PAGE}),
    prevPage: () => dispatch({type: PREV_PAGE}),
    resetPage: () => dispatch({type: RESET}),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));