import React from "react";
import { makeStyles, Typography, Avatar, Grid } from "@material-ui/core";

import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
	text: {
		color: theme.palette.text.primary,
	},
	topContacts: {
		padding: theme.spacing(2),
	},
	topContact: {
		textAlign: "center",
		color: theme.palette.text.primary,
		marginTop: theme.spacing(2),
	},
	topContactAvatar: {
		margin: "0 auto",
	},
}));

function TopContacts({ contacts }) {
	const classes = useStyles();

	return (
		<div className={classes.topContacts}>
			<Typography className={classes.text}>Top Contacts</Typography>
			<Grid container spacing={2}>
				{contacts.map((contact) => (
					<Grid item xs={3} className={classes.topContact} key={contact.id}>
						<Avatar className={clsx(classes.topContactAvatar, contact.color)}>
							{contact.avatar}
						</Avatar>
						<Typography variant='caption' gutterBottom>
							{contact.contactName}
						</Typography>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default TopContacts;
