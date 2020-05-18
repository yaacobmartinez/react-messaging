import { makeStyles, List, Fab, Slide } from "@material-ui/core";
import React, { useState } from "react";
import MessageContainer from "./MessageContainer";
import { ChatOutlined } from "@material-ui/icons";
import NewMessage from "./New/NewMessage";
import CustomAppbar from "./Appbar";

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: theme.spacing(8),
		overflow: "hidden",
	},
	fab: {
		textTransform: "none",
		fontWeight: 400,
		paddingRight: theme.spacing(2),
		position: "fixed",
		bottom: theme.spacing(4),
		right: theme.spacing(4),
	},
}));
function MessageList({ toggleDarkMode }) {
	const classes = useStyles();
	const [component, setComponent] = useState();
	const messages = [
		{
			id: 1,
			sender: "Matt Smith",
			message: "Hey, man can you work on this? ",
			isRead: true,
		},
		{
			id: 2,
			sender: "Bill Nye",
			message: "OK 👍",
			isRead: false,
		},
		{
			id: 3,
			sender: "Elon Musk",
			message: "See you @9 😂😂😂😂",
			isRead: false,
		},
		{
			id: 4,
			sender: "Davie504",
			message: "Slap like now! 🖐️",
			isRead: true,
		},
		{
			id: 5,
			sender: "Bill Skarsgard",
			message: "We all float down here.",
			isRead: true,
		},
		{
			id: 6,
			sender: "Joko Willink",
			message: "Be Dangerous but Disciplined 👍",
			isRead: false,
		},
		{
			id: 7,
			sender: "Jordan",
			message: "I act as if God exists.",
			isRead: false,
		},
		{
			id: 8,
			sender: "Emily",
			message: "Wingardium Leviosa! 🧹",
			isRead: true,
		},
		{
			id: 9,
			sender: "Karen",
			message: "CaN i sPeAk tO yOuR mAnAgEr?! ",
			isRead: true,
		},
		{
			id: 10,
			sender: "9 year old",
			message: "OK Boomer. 👴",
			isRead: false,
		},
		{
			id: 11,
			sender: "Pewdepie",
			message: "Bish Lasagna !",
			isRead: false,
		},
	];
	const newMessage = () => {
		setComponent(<NewMessage setComponent={setComponent} />);
	};
	return (
		<div>
			{!component ? (
				<Slide in={true} direction='right'>
					<div>
						<CustomAppbar toggleDarkMode={toggleDarkMode} />
						<div className={classes.root}>
							<List>
								{messages.map((message) => (
									<MessageContainer
										key={message.id}
										message={message}
										setComponent={setComponent}
									/>
								))}
							</List>
							<Fab
								onClick={newMessage}
								variant='extended'
								size='large'
								color='primary'
								className={classes.fab}>
								<ChatOutlined style={{ marginRight: 10 }} />
								Start chat
							</Fab>
						</div>
					</div>
				</Slide>
			) : (
				component
			)}
		</div>
	);
}

export default MessageList;
