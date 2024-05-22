import { MainRouter } from "./router/MainRouter";
import { RouterProvider } from "react-router-dom";

export const App = () => {
	return (
		<div>
			<RouterProvider router={MainRouter} />
		</div>
	);
};
