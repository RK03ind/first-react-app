import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as service from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
service.register();
