import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getAdmin } from "../../src/admin/adminData";

export default function AdminLoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Hardcoded admin
    if (email === "admin@gmail.com" && password === "admin123") {
      router.push("/admin/dashboard");
      return;
    }

    // Registered admin (from signup)
    const admin = getAdmin(email, password);
    if (admin) {
      router.push("/admin/dashboard");
    } else {
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      {/* Curved header */}
      <View style={styles.header}>
        <Text style={styles.logo}>JobSwipe</Text>
        <Text style={styles.adminLabel}>Admin</Text>
      </View>

      {/* Login form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/admin/signup")}>
          <Text style={styles.linkText}>Don’t have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  header: {
    backgroundColor: "#0B1B4D",
    height: 160,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },
  adminLabel: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  formContainer: {
    paddingHorizontal: 30,
    marginTop: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
    height: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 18,
    fontSize: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  loginButton: {
    backgroundColor: "#0B1B4D",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
    width: 200,
    alignSelf: "center",
  },
  loginText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  linkText: {
    textAlign: "center",
    color: "#0B1B4D",
    marginTop: 20,
    fontSize: 14,
  },
});
