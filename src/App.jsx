import { Route, Routes } from "react-router-dom";
import { CreateOrder } from "./pages/CreateOrder";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";

function App() {
	return (
		<div className="container flex-grow-1">
			<Routes>
				<Route path="/order" element={<CreateOrder />} />
				<Route path="/" element={<Home />} />
				<Route path="/archive" element={<Archive />} />
			</Routes>
		</div>
	);
}

export default App;
