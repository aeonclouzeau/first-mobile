import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator;

export default function Dashboard() {
	return (
		<DrawerNavigator>
			<Drawer.screen></Drawer.screen>
		</DrawerNavigator>
	);
}
