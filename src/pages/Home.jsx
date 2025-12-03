import { Button } from "@/components/ui/button";
import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
	return (
		<div className="flex flex-col gap-4 h-full justify-center items-center bg-warning">
			<NavLink to="/order">
				<Button>Create Order</Button>
			</NavLink>
			<NavLink to="/archive">
				<Button>Archive</Button>
			</NavLink>
		</div>
	);
};
