import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { applicantsData } from "../../src/data/applicantsData";

export default function ApplicantSignupScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!name || !age || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill out all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    
    applicantsData.push({
      name,
      age: Number(age),
      email,
      password,
    });

    Alert.alert("Success", "Applicant registered!");
    console.log("Updated applicants list:", applicantsData);

    router.push("/"); 
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, backgroundColor: "#F7F7F7", alignItems: "center" }}>
        
        <View
          style={{
            backgroundColor: "#0B1E52",
            height: 120,
            width: "100%",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Applicant Sign Up</Text>
        </View>

        
        <View style={{ flex: 1, width: "85%", justifyContent: "center" }}>
          <TextInput placeholder="Full Name" style={styles.input} value={name} onChangeText={setName} />
          <TextInput placeholder="Age" style={styles.input} keyboardType="numeric" value={age} onChangeText={setAge} />
          <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" value={email} onChangeText={setEmail} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
          <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = {
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#0B1E52",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 20,
  },
};
