import { NavLink, Route, Routes } from "react-router-dom";
import { Button } from "./components/ui/button";

function App() {
	return (
		<div className="container flex-grow-1">
			<div className="flex flex-col gap-4 h-full justify-center items-center bg-warning bg-white">
				<NavLink to="/order">
					<Button>Create Order</Button>
				</NavLink>
				<NavLink to="/archive">
					<Button>Archive</Button>
				</NavLink>
			</div>

			<Routes>
				<Route path="/order" />
				<Route path="/archive" />
			</Routes>
		</div>
	);
}

export default App;
