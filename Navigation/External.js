import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

export default function External() {
	return (
		<Stack.Navigator initialRouteName="Welcome">
			<Stack.Screen
				name="Login"
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
