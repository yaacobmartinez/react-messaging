import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Home from "./components/Home";
const themeObject = {
	typography: {
		fontFamily: "Poppins, san-serif",
	},
	palette: {
		type: "light",
	},
};
const useDarkMode = () => {
	const [theme, setTheme] = useState(themeObject);
	const {
		palette: { type },
	} = theme;
	const toggleDarkMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === "light" ? "dark" : "light",
			},
		};
		setTheme(updatedTheme);
	};
	return [theme, toggleDarkMode];
};
function App() {
	const [theme, toggleDarkMode] = useDarkMode();
	const themeConfig = createMuiTheme(theme);
	return (
		<div>
			<ThemeProvider theme={themeConfig}>
				<Router>
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<Home {...props} toggleDarkMode={toggleDarkMode} />
							)}
						/>
					</Switch>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
