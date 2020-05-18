import React, { useState } from "react";
import { makeStyles, Toolbar, IconButton, InputBase } from "@material-ui/core";
import {
	AddCircleOutlineOutlined,
	AddAPhotoOutlined,
	SendOutlined,
	InsertEmoticonOutlined,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		bottom: 0,
		background: theme.palette.background.default,
	},
	toolbar: {
		padding: theme.spacing(2, 2, 2, 0),
	},
	fieldContainer: {
		display: "flex",
		border: "1px solid",
		borderColor: theme.palette.background.paper,
		borderRadius: 20,
		padding: theme.spacing(0, 2),
		marginLeft: theme.spacing(2),
		background: theme.palette.action.hover,
	},
}));
function NewMessageField(props) {
	const classes = useStyles();
	const { setNewMessage } = props;
	const [message, setMessage] = useState("");
	const handleChange = (e, newValue) => {
		setMessage(newValue);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setNewMessage({ message });
		setMessage("");
	};
	return (
		<div>
			<div className={classes.root}>
				<Toolbar className={classes.toolbar}>
					<IconButton>
						<AddCircleOutlineOutlined />
					</IconButton>
					<IconButton>
						<AddAPhotoOutlined />
					</IconButton>
					<div className={classes.fieldContainer}>
						<InputBase
							multiline
							placeholder='Text Message'
							fullWidth
							value={message}
							onChange={(e) => {
								handleChange(e, e.target.value);
							}}
						/>
						<IconButton>
							<InsertEmoticonOutlined />
						</IconButton>
						<IconButton onClick={handleSubmit}>
							<SendOutlined />
						</IconButton>
					</div>
				</Toolbar>
			</div>
		</div>
	);
}

export default NewMessageField;
