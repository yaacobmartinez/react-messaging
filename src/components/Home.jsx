import React from "react";
import MessageList from "./MessageList";
import { makeStyles, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		background: theme.palette.background.default,
	},
}));
function Home({ toggleDarkMode }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline>
				<MessageList toggleDarkMode={toggleDarkMode} />
			</CssBaseline>
		</div>
	);
}

export default Home;
