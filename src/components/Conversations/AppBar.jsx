import React, { useState } from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	makeStyles,
	Menu,
	MenuItem,
	Grow,
} from "@material-ui/core";
import {
	ArrowBackOutlined,
	PhoneOutlined,
	MoreVertTwoTone,
} from "@material-ui/icons";
import Home from "../Home";

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
		opacity: 0.9,
	},
}));
function CustomAppBar({ contact, setComponent }) {
	const classes = useStyles();
	const handleBack = () => {
		setComponent(<Home />);
	};
	const [menu, setMenu] = useState(null);
	const handleOpen = (e) => {
		setMenu(e.currentTarget);
	};
	const handleClose = () => {
		setMenu(null);
	};
	return (
		<div>
			<AppBar className={classes.root} elevation={1}>
				<Toolbar>
					<IconButton onClick={handleBack}>
						<ArrowBackOutlined />
					</IconButton>
					<Typography style={{ flex: 1 }}>{contact}</Typography>
					<IconButton>
						<PhoneOutlined />
					</IconButton>
					<IconButton onClick={handleOpen}>
						<MoreVertTwoTone />
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
						<MenuItem onClick={handleClose}>Details</MenuItem>
						<MenuItem onClick={handleClose}>Search</MenuItem>
						<MenuItem onClick={handleClose}>Archive</MenuItem>
						<MenuItem onClick={handleClose}>Delete</MenuItem>
						<MenuItem onClick={handleClose}>Help and feedback</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default CustomAppBar;
