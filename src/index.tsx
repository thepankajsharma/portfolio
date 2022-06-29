import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./app/App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { storeTheme } from "./assets/css/style";

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={createTheme(storeTheme)}>
			<App />
		</ThemeProvider>
	</StrictMode>,
	document.getElementById("root")
);
