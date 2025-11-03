import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { addAdmin } from "../../src/admin/adminData";

export default function AdminSignupScreen() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = () => {
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    addAdmin(form.email, form.password);
    Alert.alert("Success", "Account created successfully!");
    router.push("/admin/login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Curved Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>JobSwipe</Text>
        <Text style={styles.adminLabel}>Admin</Text>
      </View>

      {/* Signup Form */}
      <View style={styles.formContainer}>
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={form.firstName}
              onChangeText={(text) => setForm({ ...form, firstName: text })}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Middle Name</Text>
            <TextInput
              style={styles.input}
              value={form.middleName}
              onChangeText={(text) => setForm({ ...form, middleName: text })}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={form.lastName}
              onChangeText={(text) => setForm({ ...form, lastName: text })}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={form.confirmPassword}
              onChangeText={(text) =>
                setForm({ ...form, confirmPassword: text })
              }
            />
          </View>
        </View>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
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
  signupButton: {
    backgroundColor: "#0B1B4D",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
    width: "50%",
  },
  signupText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
