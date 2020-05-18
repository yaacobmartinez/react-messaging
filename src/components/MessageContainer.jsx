import React from "react";
import {
	ListItem,
	ListItemAvatar,
	Avatar,
	makeStyles,
	ListItemText,
	Typography,
} from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import { AccountCircle } from "@material-ui/icons";
import Conversation from "./Conversations/Conversation";
const useStyles = makeStyles((theme) => ({
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	read: {
		fontWeight: 300,
	},
	unread: {
		fontWeight: 600,
	},
}));
function MessageContainer({ message, setComponent }) {
	const classes = useStyles();
	const openConversation = () => {
		setComponent(
			<Conversation message={message} setComponent={setComponent} />
		);
	};
	return (
		<div>
			<ListItem button onClick={openConversation}>
				<ListItemAvatar>
					<Avatar className={classes.purple}>
						<AccountCircle />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={
						<Typography
							color='textPrimary'
							className={message.isRead ? classes.read : classes.unread}>
							{message.sender}
						</Typography>
					}
					secondary={
						<Typography
							noWrap
							component='span'
							variant='body2'
							color='textPrimary'
							className={message.isRead ? classes.read : classes.unread}>
							{message.message}
						</Typography>
					}
				/>
			</ListItem>
		</div>
	);
}

export default MessageContainer;
