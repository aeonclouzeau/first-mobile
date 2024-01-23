import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function Header(params) {
	<View>
		<TouchableOpacity>
			<Ionicons name="arrow-back-outline" size={40} color="black"></Ionicons>
		</TouchableOpacity>
		<View>
			<Image source={require("../../assets/icon.png")} />
		</View>
		<TouchableOpacity>
			<EvilIcons name="cart" size={40} color="black"></EvilIcons>
		</TouchableOpacity>
	</View>;
}
