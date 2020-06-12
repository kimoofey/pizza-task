import PizzaPage from "../PizzaPage";
import React from 'react';
import AdditionalPage from "../AdditionalMenuPage";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import OrderForm from "../OrderForm";

const useStyles = makeStyles((theme) => ({
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
}));

function getSteps() {
    return ['Select pizza!', 'Add some taste!', 'Finish order!'];
}

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

export default function MainPage() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(2);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className={classes.buttons}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
