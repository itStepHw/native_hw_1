import {Text, View, StyleSheet, TextInput, Dimensions} from "react-native";
import {Header} from "@/app/components/header/Header";
import {LoginForm} from "@/app/components/loginForm/LoginForm";

export default function Index() {
  return (
      <View style={styles.container}>
        <Header />
          <LoginForm />
      </View>

  )
}


const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
})