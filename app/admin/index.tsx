import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AdminHomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          JobSwipe <Text style={styles.subHeader}>Admin</Text>
        </Text>
      </View>

      {/* Main Buttons */}
      <View style={styles.content}>
        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0B1C48" }]}
          onPress={() => router.push("/admin/signup")}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "white", borderColor: "#0B1C48", borderWidth: 1 },
          ]}
          onPress={() => router.push("/admin/login")}
        >
          <Text style={[styles.buttonText, { color: "#0B1C48" }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 160,
    backgroundColor: "#0B1C48",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 280,
    paddingVertical: 14,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
