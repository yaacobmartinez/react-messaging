import React, { useState, useRef } from "react";
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	InputBase,
} from "@material-ui/core";
import {
	ArrowBack,
	KeyboardOutlined,
	DialpadOutlined,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
		opacity: 0.9,
	},
}));
function CustomAppBar(props) {
	const classes = useStyles();
	const { handleBack, isSearching, filterContacts } = props;
	const inputRef = useRef(null);
	const [search, setSearch] = useState("text");
	const [searchKey, setSearchKey] = useState("");
	const handleChange = () => {
		setSearchKey("");
		if (search !== "number") {
			setSearch("number");
			inputRef.current.focus();
			return;
		}
		inputRef.current.focus();
		setSearch("text");
	};
	const handleSearch = (e) => {
		setSearchKey(e.target.value);
		filterContacts(e.target.value);
		if (!e.target.value) {
			isSearching(false);
		} else {
			isSearching(true);
		}
	};
	return (
		<div>
			<AppBar className={classes.root}>
				<Toolbar>
					<IconButton onClick={handleBack}>
						<ArrowBack />
					</IconButton>
					<Typography style={{ flex: 1 }}>New conversation</Typography>
				</Toolbar>
				<Toolbar variant='dense'>
					<Typography>To</Typography>
					<InputBase
						inputRef={inputRef}
						autoFocus
						type={search}
						value={searchKey}
						onChange={(e) => {
							handleSearch(e);
						}}
						placeholder='Type a name or phone number'
						style={{ flex: 1, marginLeft: 40 }}
					/>
					<IconButton onClick={handleChange}>
						{search === "text" ? <KeyboardOutlined /> : <DialpadOutlined />}
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default CustomAppBar;
