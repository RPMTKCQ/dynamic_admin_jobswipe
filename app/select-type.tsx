import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function SelectTypeScreen() {
  const router = useRouter();

  return (
    <>
      {/* Hides the header/back arrow */}
      <Stack.Screen options={{ headerShown: false }} />

      {/* Screen Content */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#F7F7F7",
          alignItems: "center",
        }}
      >
        {/* Header Banner */}
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
          <Text
            style={{
              color: "white",
              fontSize: 36,
              fontWeight: "bold",
            }}
          >
            JobSwipe
          </Text>
        </View>

        {/* Welcome Section */}
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginBottom: 30,
              color: "#000",
            }}
          >
            Welcome
          </Text>

          {/* Applicant Button */}
          <TouchableOpacity
            onPress={() => router.push("/applicant/signup")}
            style={{
              borderWidth: 1,
              borderColor: "#0B1E52",
              borderRadius: 25,
              paddingVertical: 10,
              paddingHorizontal: 40,
              marginBottom: 15,
            }}
          >
            <Text style={{ color: "#0B1E52", fontWeight: "600" }}>Applicant</Text>
          </TouchableOpacity>

          {/* Company Button */}
          <TouchableOpacity
            onPress={() => router.push("/company/signup")}
            style={{
              borderWidth: 1,
              borderColor: "#0B1E52",
              borderRadius: 25,
              paddingVertical: 10,
              paddingHorizontal: 40,
            }}
          >
            <Text style={{ color: "#0B1E52", fontWeight: "600" }}>Company</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
