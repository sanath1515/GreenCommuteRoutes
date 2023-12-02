
import React from "react";
import { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import MyTypography from '../../atoms/MyTypography/MyTypography';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import clsx from 'clsx';
import { green } from '@material-ui/core/colors';
import Mybutton from '../../atoms/button/CustomButton';
import MyImage from '../../atoms/MyImage/MyImage';
import CheckboxWithGreenCheck from '../../atoms/Checkbox/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { addTabToFilterOptions } from "../../../store/actions/actionsForFilterOptions";

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",

	},
	formControl: {
		margin: theme.spacing(3),
	},
	buttonPadding: {
		paddingRight: '10px'
	},
	filterButtonStyle: {
		backgroundColor: '#e3f3f6',
		textTransform: 'none',
	},
	filterTextOptions: {
		fontWeight: 'normal',
		fontSize: '14px',
		fontFamily: "Montserrat",
	},
	filterHeaders: {
		fontSize: '14px',
		fontWeight: '600',
		color: '#19293b',
		fontFamily: "Montserrat",
	},
	dialogBox: {
		width: '625px',
		height: '426px',
		objectFit: 'contain',
	},
	checkBox: {
		width: 10,
		height: 10,
	},
	closeIcon: {
		width: '24px',
		height: '24px',
	},
	topAlignment:
	{
		marginTop: '500px',
	},
	alignment: {

		display: 'flex',
		flexDirection: 'row',
		display: 'inline-block',
	},

	typographyHeaderStyle: {
		fontFamily: 'Montserrat',
		color: '#19293b',
		fontSize: '16px',
		lineHeight: 1.5,
		letterSpacing: '0.1px'
	},
	typographyParagraphStyle: {
		fontFamily: 'Montserrat',
		color: '#5ac568',
		fontSize: '14px',
		lineHeight: 1.57,
		letterSpacing: '0.1px',
		textAlign: 'left',

	},

	borderBox:
	{
		border: '2px solid #5ac568',
		borderRadius: '5px',
		display: 'inline-flex',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: '20px',
		/* margin:'20px auto',*/
		marginTop: '10px',
		width: 'auto',
	},
	iconStyle:
	{
		width: '16px',
		height: '16px',
		color: '#5ac568',
	},
	clearButtonStyle:
	{
		fontFamily: 'Montserrat',
		fontSize: '14px',
		fontWeight: '600',
		fontstretch: 'normal',
		fontStyle: 'normal',
		lineHeight: '1.29',
		letterSpacing: '0.2px',

	},
	clearStyle:
	{
		marginLeft: '550px',
	},
	dialogStyle:
	{
		marginTop: '150px',
		marginLeft: '5px',
		marginRight: '12px',
	}
}));


const useStylesForOnlyCheckBox = makeStyles({
	icon: {
		borderRadius: 3,
		width: 16,
		height: 16,
		boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
		backgroundColor: '#f5f8fa',
		backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
		'$root.Mui-focusVisible &': {
			outline: '2px auto rgba(19,124,189,.6)',
			outlineOffset: 2,
		},
		'input:hover ~ &': {
			backgroundColor: '#ebf1f5',
		},
		'input:disabled ~ &': {
			boxShadow: 'none',
			background: 'rgba(206,217,224,.5)',
		},
	},

	checkedIcon: {
		backgroundColor: '#137cbd',
		backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
		'&:before': {
			display: 'block',
			width: 16,
			height: 16,
			backgroundImage:
				"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
				// "on@3x.png"  +
				" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
				"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
			content: '""',
		},

		'input:hover ~ &': {
			backgroundColor: '#106ba3',
		},

		'input:checked ~&': {
			backgroundColor: '#5ac568',
			color: 'green',
		},

		checked: {},
	}

});


const GreenRadio = withStyles({
	root: {
		color: green[400],
		size: 'small',
		'&$checked': {
			color: green[600],
		},
	},
	checked: {},
})((props) => <Radio color="default" size='small' {...props} />);






const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	const checkBoxClasses = useStyles();
	return (
		// <MuiDialogTitle disableTypography  {...other}>
		<div>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon className={checkBoxClasses.closeIcon} />
				</IconButton>
			) : null}
		</div>
		// </MuiDialogTitle>
	);
});

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

export default function FilterBox() {
	const [open, setOpen] = useState(false);
	const checkBoxClasses = useStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const dispatch = useDispatch();
	const selected = useSelector((state => state.showCheckedFilterOptions));
	const getSelected = (e) => {
		let data = selected.tabsInFilterOptions;
		if (e.target.checked) {
			data.push(e.target.name)
			// setSelected(data)
			dispatch(addTabToFilterOptions(data))
			console.warn(selected)
		}
		else {
			data = data.filter(item => item !== e.target.name)
			dispatch(addTabToFilterOptions(data))
			console.warn(selected)
		}
	}

	const getRemoved = () => {
		dispatch(addTabToFilterOptions([]))
		lengthForSelectedFilterOptions = 0;
	}

	const getCleared = (e) => {
		let data = selected.tabsInFilterOptions;
		data = data.filter(item => JSON.stringify(item) !== JSON.stringify(e));
		dispatch(addTabToFilterOptions(data))
		console.warn(selected)
	}

	let lengthForSelectedFilterOptions = selected.length;
	useEffect(() => {
		lengthForSelectedFilterOptions = selected.length;

	}, [selected]);

	const handleApply = () => {
		setOpen(false);
	};
	const [state, setState] = useState({
		checkedA: true,
		checkedB: false
	});

	const handleChange = (name) => (event) => {
		setState({ ...state, [name]: event.target.checked });
	};
	const classes = useStyles();
	return (

		<React.Fragment>


			<Button variant="outlined" color='ternary' className={checkBoxClasses.filterButtonStyle} onClick={handleClickOpen} >
				<MyImage src="https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/5c78c112-8fb1-4fa3-a56a-2629793f0948.svg" className={checkBoxClasses.buttonPadding} />
				<Typography className={checkBoxClasses.filterTextOptions}> Filter </Typography>
			</Button>
			<Grid container direction="row">
				<Grid item xs={10}>
					<Grid container spacing={2} >
						{lengthForSelectedFilterOptions > 0 && selected.map(data =>
							<Grid item key={data}>
								<div className={classes.borderBox} >
									<MyTypography children={data} variant="h6" component="h5" className={classes.typographyParagraphStyle} />
									<Button value={data} onClick={() => getCleared(data)}><ClearIcon className={classes.iconStyle} /></Button>
								</div>
							</Grid>
						)
						}
					</Grid>

				</Grid>
				<Grid item style={{ marginTop: '12px', }} xs={2}>
					{lengthForSelectedFilterOptions >= 1 && <Mybutton text="clear all" color='secondary' onClick={getRemoved} />}
				</Grid>
			</Grid>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open} className={classes.dialogStyle}>
				<DialogContent dividers>
					<DialogTitle
						id="customized-dialog-title"
						onClose={handleClose}>

					</DialogTitle>
					<div className={checkBoxClasses.root}>
						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">{<Typography className={checkBoxClasses.filterHeaders}> Distance </Typography>}</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={
										<CheckboxWithGreenCheck name="0-10 kms"
											onChange={getSelected} />
									}
									label={<Typography className={checkBoxClasses.filterTextOptions}> 0 - 10 kms </Typography>}
								/><FormControlLabel
									control={<CheckboxWithGreenCheck name="11-20 kms" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> 11 - 20 kms </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="21-30 kms" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> 21 - 30 kms </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="31-40 kms" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> 31 - 40 kms  </Typography>}
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">{<Typography className={checkBoxClasses.filterHeaders}> Date Posted </Typography>}</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Past 24 hours" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Past 24 hours </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Past Week" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Past Week </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Past Month" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Past Month </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Anytime" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Anytime </Typography>}
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">{<Typography className={checkBoxClasses.filterHeaders}> Green Commute </Typography>}</FormLabel>
							<FormGroup>
								<RadioGroup>
									<FormControlLabel
										value="Yes"
										control={<GreenRadio name="GreenCommute" onChange={getSelected} />}
										label={<Typography className={checkBoxClasses.filterTextOptions}> Yes </Typography>}
									/>
									</RadioGroup>
							</FormGroup>
						</FormControl>
					</div>
					<div className={checkBoxClasses.root}>
						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">{<Typography className={checkBoxClasses.filterHeaders}>Job Type</Typography>}</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Full - Time" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Full - Time </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Internship" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Internship </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Contract" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Contract </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Remote" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Remote </Typography>}
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">{<Typography className={checkBoxClasses.filterHeaders}>Experience Level</Typography>}</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Fresher" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Fresher </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Mid-Level" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Mid-Level </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Director" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Director </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Executive" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Executive </Typography>}
								/>
							</FormGroup>
						</FormControl>

						<FormControl
							component="fieldset"
							className={checkBoxClasses.formControl}
						>
							<FormLabel component="legend">{<Typography className={checkBoxClasses.filterHeaders}> Transport </Typography>}</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Metro" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Metro </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="MotorCycle" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> MotorCycle </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="Bus" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> Bus </Typography>}
								/>
								<FormControlLabel
									control={<CheckboxWithGreenCheck name="CarPooling" onChange={getSelected} />}
									label={<Typography className={checkBoxClasses.filterTextOptions}> CarPooling </Typography>}
								/>
							</FormGroup>
						</FormControl>
					</div>
				</DialogContent>
				<DialogActions>

					<Mybutton text="Clear All" color='secondary' onClick={handleClose} />

					<Mybutton text="Apply" color='primary' variant='contained' onClick={handleApply} />
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}