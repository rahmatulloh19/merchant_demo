import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Archive = () => {
	return (
		<div>
			<NavLink to="/">
				<Button>
					<ArrowLeftIcon />
				</Button>
			</NavLink>
		</div>
	);
};
