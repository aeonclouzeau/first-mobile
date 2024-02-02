import { TouchableOpacity, Text, Stylesheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function Button() {
	return <TouchableOpacity></TouchableOpacity>;
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: Colors.black,
		broderRadius: 25,
		paddingVertical: 10,
		width: "100%",
	},
	text: {
		color: Colors.white,
		fontFamily: Fonts.family.regular,
		fontSize: Fonts.size.normal,
	},
	containerWhite: {
		borderColor: Colors.white,
		broderRadius: 10,
		borderWidth: 2,
	},
});
