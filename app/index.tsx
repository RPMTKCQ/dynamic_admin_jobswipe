import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Blue Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>JobSwipe</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0B1C48" }]}
          onPress={() => router.push("")}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>Sign Up</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: "white", borderColor: "#0B1C48", borderWidth: 1 },
          ]}
          onPress={() => router.push("")}
        >
          <Text style={[styles.buttonText, { color: "#0B1C48" }]}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Admin Button */}
      <View style={styles.adminContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#0B1C48" }]}
          onPress={() => router.push("/admin")}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>Admin</Text>
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
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: "600",
    color: "#000",
    marginBottom: 40,
    bold:true,
  },
  button: {
    width: 200,
    paddingVertical: 14,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  adminContainer: {
    marginBottom: 60, // pushes the Admin button further down
  },
});
