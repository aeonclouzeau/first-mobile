import { View, StyleSheet } from "react-native";

export default function Content({ children }) {
	return <View>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 40,
	},
});
