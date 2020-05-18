import React, { useState } from "react";
import CustomAppBar from "./AppBar";
import NewMessageField from "./NewMessageField";
import Messages from "./Messages";

function NewConversation(props) {
	const { contact, setComponent } = props;
	const [newMessage, setNewMessage] = useState([]);
	const addNewMessage = (message) => {
		setNewMessage((prevState) => [...newMessage, message]);
	};
	const passProps = {
		newMessage,
		setNewMessage: addNewMessage,
		contact,
	};
	return (
		<div>
			<CustomAppBar setComponent={setComponent} contact={contact.contactName} />
			<Messages {...passProps} />
			<NewMessageField {...passProps} />
		</div>
	);
}

export default NewConversation;
