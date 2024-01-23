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
				<Text>Sin etiqueta</Text>
				<FormItem />
				<Text>Con etiqueta</Text>
				<FormItem label="correo electronico" />
				<StatusBar style="auto" />
			</View>
		</Wrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#fff",
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 40,
	},
});
