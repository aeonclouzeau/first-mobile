import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormItem from "./componentes/controls/FormItem";
import Header from "./componentes/layout/Header";
import Wrapper from "./componentes/layout/Wrapper";

export default function App() {
	return (
		<Wrapper>
			<Header title="Componentes base" />
			<View>
				<Text>Texto uno</Text>
				<FormItem />
				<Text>Texto dos</Text>
				<FormItem />
				<StatusBar style="auto" />
			</View>
		</Wrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
