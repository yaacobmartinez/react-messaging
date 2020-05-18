import React, { useState } from "react";
import {
	AppBar,
	Typography,
	makeStyles,
	Toolbar,
	IconButton,
	useScrollTrigger,
	Menu,
	MenuItem,
	Grow,
} from "@material-ui/core";
import { Search, MoreVert } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
		textAlign: "center",
		opacity: 0.9,
	},
	text: {
		flex: 1,
		fontSize: 18,
		fontWeight: 500,
		marginLeft: theme.spacing(8),
	},
	icon: {
		paddingRight: 0,
	},
	menu: {
		paddingRight: theme.spacing(4),
	},
}));
function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 2 : 0,
	});
}
function CustomAppbar(props) {
	const classes = useStyles();
	const [menu, setMenu] = useState(null);
	const handleOpen = (e) => {
		setMenu(e.currentTarget);
	};
	const handleClose = () => {
		setMenu(null);
	};
	const changeTheme = () => {
		props.toggleDarkMode();
	};
	return (
		<div>
			<ElevationScroll {...props}>
				<AppBar className={classes.root} elevation={0}>
					<Toolbar>
						<Typography className={classes.text}>Messages</Typography>
						<IconButton className={classes.icon}>
							<Search />
						</IconButton>
						<IconButton className={classes.icon} onClick={handleOpen}>
							<MoreVert />
						</IconButton>
						<Menu
							PaperProps={{
								style: {
									paddingRight: 20,
								},
							}}
							anchorEl={menu}
							keepMounted
							open={Boolean(menu)}
							TransitionComponent={Grow}
							onClose={handleClose}>
							<MenuItem onClick={handleClose}>Mark all as read</MenuItem>
							<MenuItem onClick={handleClose}>Messages for web</MenuItem>
							<MenuItem onClick={handleClose}>Blocked contacts</MenuItem>
							<MenuItem onClick={changeTheme}>Toggle Dark Mode</MenuItem>
							<MenuItem onClick={handleClose}>Archived</MenuItem>
							<MenuItem onClick={handleClose}>Settings</MenuItem>
							<MenuItem onClick={handleClose}>Help and feedback</MenuItem>
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</div>
	);
}

export default CustomAppbar;
