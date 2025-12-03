import { Route, Routes } from "react-router-dom";
import { CreateOrder } from "./pages/CreateOrder";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";

function App() {
	return (
		<div className="container max-w-[1280px] mx-auto flex-grow-1 py-8">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/order" element={<CreateOrder />} />
				<Route path="/archive" element={<Archive />} />
			</Routes>
		</div>
	);
}

export default App;
