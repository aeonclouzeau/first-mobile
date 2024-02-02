import { View, Text, Stylesheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function Title({ title, color }) {
	return (
		<View style={style.container}>
			<Text style={[style.text, { color: color || Colors.black }]}>
				{title}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 30,
	},
	text: {
		color: Colors.white,
		fontFamily: Fonts.family.bold,
		fontSize: Fonts.size.large,
	},
});
