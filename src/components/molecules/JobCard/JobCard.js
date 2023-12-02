
import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import MyImage from "../../atoms/MyImage/MyImage";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import customtheme from '../../theme.jsx';
import Typography from '@material-ui/core/Typography';

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import { useDispatch, useSelector } from "react-redux";
import { showJob } from "../../../store/actions/actions";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
	root: {
		width: '330px',
		height: '308px',
		// margin: "20px 0px 20px 60px",
		marginTop: "20px",
		marginRight: "15px",
		marginLeft: "15px",
		'&:hover': {
			borderColor: '#0365f2',
		}
	},
	root2: {
		maxWidth: '690px',
		maxHeight: '138px',
		padding: '1.5%',
		borderRadius: '10px'
	},
	logoPadding: {
		paddingLeft: '7%',
		paddingTop: '7%',
		paddingRight: '3%',
		paddingBottom: '3%'
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		objectFit: 'contain',
	},
	spacing: {
		color: '#5f7381',
		width: '52px',
		flexGrow: '0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-spacearound',
		paddingRight: "7%",
		alignItems: 'center',
		gap: '10px',
		padding: '0',
		paddingBottom: '50px'
	},
	inCol: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	iconGrp: {
		display: 'inline-flex',
		flexDirection: 'row',
		justifyContent: 'flexStart',
		alignItems: 'center',
		paddingTop: '3%',
		// gap : '8px'
	},
	roleTypoHeader: {
		fontSize: '18px',
		fontWeight: '600',
		color: '#324552',
		lineHeight: 1.33,
		fontStretch: 'normal',
		fontStyle: 'normal',
		letterSpacing: '0.2px'
	},
	companyLocationTypoHeader: {
		fontSize: '16px',
		fontWeight: 'normal',
		color: '#5f7381',
		lineHeight: 1.57,
		fontStretch: 'normal',
		fontStyle: 'normal',
		letterSpacing: '0.1px',
		paddingTop: '2%'
	},

	padding: {
		paddingTop: '0',
		lineHeight: 1.33
	},
	jobInfoPadding: {
		paddingLeft: '20px'
	},
	moreIconPadding: {
		color: '#5f7381',
	}

});

export default function JobCard({
	job
}) {
	const logo = job.logo
	const roleName = job.roleName
	const companyName = job.companyName
	const location = job.location
	const classes = useStyles();
	const icons = [[<LocalTaxiOutlinedIcon />, <TrainOutlinedIcon />, <DirectionsBusOutlinedIcon />, <MotorcycleOutlinedIcon />]]
	const dispatch = useDispatch();
	const stateForRenderingJobDescriptioninRight = useSelector((state => state.jobsDescription))
	const history = useHistory()
	const handleChangeForCard = () => {
		dispatch(showJob(job)),
			history.push('/findJobs')
	}
	return (
		<ThemeProvider theme={customtheme}>
			<Card className={classes.root} variant="outlined" data-testid="cardinjobcard" onClick={handleChangeForCard}>
				<div className={classes.header} data-testid="upperdivinjobcard">
					<MyImage
						className={classes.logoPadding}
						alt={logo}
						src={logo}
						width="80px"
						height="80px"
					/>
					<div className={` ${classes.spacing}`} data-testid="innerdivinjobcard">
						<Typography variant="h1" data-testid="2dtypographyinjobcard">
							2d
						</Typography>
						<MoreHorizIcon
							className={classes.moreIconPadding}
							fontSize="small"
							data-testid="morehorizoninjobcard"
						/>
					</div>
				</div>
				<CardContent data-testid="cardcontentinjobcard">
					<Typography gutterBottom variant="h3" data-testid="rolenameinjobcard">
						{roleName}
					</Typography>

					<Typography variant="h6" data-testid="companynameinjobcard">
						{companyName}
					</Typography>
					<Typography variant="h6" data-testid="locationinjobcard">
						{location}
					</Typography>

					<Typography gutterBottom variant="h5" data-testid="commuterouteinjobcard">
						Commute routes available:
					</Typography>
					<div className={classes.iconGrp} data-testid="iconnameinjobcard">
						{icons && icons.map(iconName => (
							<span style={{ color: '#9bbdcb' }} >{iconName}</span>
						))}

					</div>
				</CardContent>
			</Card>
		</ThemeProvider>
	);
}