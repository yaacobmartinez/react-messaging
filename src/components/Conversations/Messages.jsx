import React from "react";
import {
	makeStyles,
	ListItem,
	Avatar,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import { AccountCircle } from "@material-ui/icons";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		bottom: theme.spacing(10),
		padding: theme.spacing(0),
		width: "100%",
	},
	messageContainer: {
		flex: "none",
		marginLeft: theme.spacing(0) - 4,
		borderRadius: 20,
		background: theme.palette.action.hover,
		padding: theme.spacing(1, 2),
	},
	message: {
		fontSize: 14,
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	fromContact: {
		justifyContent: "flex-start",
	},
	fromMe: {
		justifyContent: "flex-end",
	},
	fromMeContainer: {
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
}));
function Messages(props) {
	const { newMessage, message } = props;
	const classes = useStyles();
	return (
		<div className={classes.root}>
			{message && (
				<ListItem className={classes.fromContact}>
					<ListItemAvatar>
						<Avatar className={classes.purple}>
							<AccountCircle />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						className={classes.messageContainer}
						primary={
							<Typography component='span' className={classes.message}>
								{message.message}
							</Typography>
						}
					/>
				</ListItem>
			)}
			{newMessage
				? newMessage.map((msg) => (
						<ListItem className={classes.fromMe}>
							<ListItemText
								className={clsx(
									classes.messageContainer,
									classes.fromMeContainer
								)}
								primary={
									<Typography component='span' className={classes.message}>
										{msg.message}
									</Typography>
								}
							/>
						</ListItem>
				  ))
				: null}
		</div>
	);
}

export default Messages;
