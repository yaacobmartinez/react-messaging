import React from "react";
import {
	makeStyles,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
	List,
	ListSubheader,
	Avatar,
} from "@material-ui/core";
import NewConversation from "../Conversations/NewConversation";

const useStyles = makeStyles((theme) => ({
	text: {
		color: theme.palette.text.primary,
		fontWeight: 500,
	},
}));
function AllContacts({ contacts, setComponent }) {
	const classes = useStyles();
	const handleContactClick = (e, contact) => {
		setComponent(
			<NewConversation contact={contact} setComponent={setComponent} />
		);
	};
	return (
		<div>
			<List subheader={<ListSubheader>All Contacts</ListSubheader>}>
				{contacts.map((contact) => (
					<ListItem
						button
						key={contact.id}
						onClick={(e) => {
							handleContactClick(e, contact);
						}}>
						<ListItemAvatar>
							<Avatar className={contact.color}>{contact.avatar}</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={
								<Typography className={classes.text}>
									{contact.contactName}
								</Typography>
							}
							secondary={
								<>
									<Typography
										component='span'
										variant='body2'
										style={{ fontWeight: 300 }}>
										{contact.number}
									</Typography>
								</>
							}
						/>
					</ListItem>
				))}
			</List>
		</div>
	);
}

export default AllContacts;
