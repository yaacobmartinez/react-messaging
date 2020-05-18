import React, { useState } from "react";
import CustomAppBar from "./AppBar";
import { Slide } from "@material-ui/core";
import NewMessageField from "./NewMessageField";
import Messages from "./Messages";

function Conversation(props) {
	const { setComponent, message } = props;
	const [newMessage, setNewMessage] = useState([]);
	const addNewMessage = (message) => {
		setNewMessage((prevState) => [...newMessage, message]);
	};
	const passProps = {
		newMessage,
		setNewMessage: addNewMessage,
		message,
	};
	return (
		<Slide in={true} direction='left'>
			<div>
				<CustomAppBar setComponent={setComponent} contact={message.sender} />
				<Messages {...passProps} />
				<NewMessageField {...passProps} />
			</div>
		</Slide>
	);
}

export default Conversation;
