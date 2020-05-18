import React, { useState } from "react";
import {
	Slide,
	ListItem,
	ListItemAvatar,
	ListItemText,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { GroupAddOutlined } from "@material-ui/icons";
import Appbar from "./AppBar";
import TopContacts from "./TopContacts";
import MessageList from "../MessageList";
import AllContacts from "./AllContacts";
import {
	deepOrange,
	deepPurple,
	teal,
	lightGreen,
	lime,
} from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background.default,
		paddingTop: 115,
	},
	text: {
		color: theme.palette.text.primary,
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500],
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	teal: {
		color: theme.palette.getContrastText(teal[500]),
		backgroundColor: teal[500],
	},
	lightGreen: {
		color: theme.palette.getContrastText(lightGreen[500]),
		backgroundColor: lightGreen[500],
	},
	lime: {
		color: theme.palette.getContrastText(lime[500]),
		backgroundColor: lime[500],
	},
}));
function NewMessage({ setComponent }) {
	const classes = useStyles();
	const handleBack = () => {
		setComponent(<MessageList />);
	};
	const contacts = [
		{
			id: 1,
			color: classes.purple,
			avatar: "M",
			contactName: "Matt Smith",
			number: "0917 737 7111",
			type: "Work",
		},
		{
			id: 2,
			color: classes.teal,
			avatar: "BN",
			contactName: "Bill Nye",
			number: "0917 567 8908",
			type: "Mobile",
		},
		{
			id: 3,
			color: classes.purple,
			avatar: "E",
			contactName: "Elon Musk",
			number: "0917 123 4567",
			type: "Mobile",
		},
		{
			id: 4,
			color: classes.lime,
			avatar: "JW",
			contactName: "Joko Willink",
			number: "0917 234 5678",
			type: "Mobile",
		},
		{
			id: 5,
			color: classes.teal,
			avatar: "B",
			contactName: "Bill Skarsgard",
			number: "0919 345 6789",
			type: "Mobile",
		},
		{
			id: 6,
			color: classes.lightGreen,
			avatar: "J",
			contactName: "Jordan",
			number: "0910 456 7890",
			type: "Mobile",
		},
		{
			id: 7,
			color: classes.purple,
			avatar: "E",
			contactName: "Emily",
			number: "0909 567 8901",
			type: "Mobile",
		},
		{
			id: 8,
			color: classes.purple,
			avatar: "K",
			contactName: "Karen",
			number: "0915 678 9012",
			type: "Mobile",
		},
	];
	const [searchKey, setSearchKey] = useState(false);
	const [filteredContacts, setFilteredContacts] = useState(contacts);
	const filterContacts = (filter) => {
		if (isNaN(filter)) {
			const filterBy = (str) =>
				contacts.filter((item) =>
					new RegExp("^" + str.replace(/\*/g, ".*") + "$").test(
						item.contactName.toLowerCase()
					)
				);
			const results = filterBy(`*${filter}*`);
			return setFilteredContacts(results);
		}
		const filterBy = (str) =>
			contacts.filter((item) =>
				new RegExp("^" + str.replace(/\*/g, ".*") + "$").test(item.number)
			);
		const numbers = filterBy(`*${filter}*`);
		setFilteredContacts(numbers);
	};
	const contactProps = {
		handleBack,
		isSearching: setSearchKey,
		filteredContacts,
		filterContacts,
	};
	return (
		<Slide in={true} direction='left'>
			<div className={classes.root}>
				<Appbar {...contactProps} />
				{!searchKey ? (
					<div>
						<ListItem button style={{ padding: 20 }}>
							<ListItemAvatar>
								<GroupAddOutlined color='action' />
							</ListItemAvatar>
							<ListItemText
								primary={
									<Typography className={classes.text}>
										Start group conversation
									</Typography>
								}
							/>
						</ListItem>
						<TopContacts contacts={contacts} />
					</div>
				) : null}
				<AllContacts setComponent={setComponent} contacts={filteredContacts} />
			</div>
		</Slide>
	);
}

export default NewMessage;
