("use client");
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowLeftIcon } from "lucide-react";
import * as React from "react";
import { NavLink } from "react-router-dom";

export const CreateOrder = () => {
	const [position, setPosition] = React.useState("Open");

	return (
		<div className="max-w-5xl mx-auto flex justify-between w-full">
			<NavLink to="/">
				<Button className="rounded-full w-10 py-5 px-3">
					<ArrowLeftIcon />
				</Button>
			</NavLink>

			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button as="span" className="min-w-3xs">
						{position}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
						<DropdownMenuRadioItem value="Top">Top</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="Bottom">Bottom</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="Right">Right</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
