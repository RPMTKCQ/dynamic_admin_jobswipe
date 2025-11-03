import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { applicantsData } from "../../src/data/applicantsData";
import { companiesData } from "../../src/data/companiesData";

export default function AdminDashboard() {
  const router = useRouter();

const totalApplicants = applicantsData?.length ?? 0;
const totalCompanies = companiesData?.length ?? 0;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          JobSwipe <Text style={styles.headerSubtitle}>Admin</Text>
        </Text>
      </View>

      {/* Dashboard Title */}
      <Text style={styles.dashboardTitle}>Dashboard</Text>

      {/* Totals */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Total Applicants: {totalApplicants}</Text>
        <Text style={styles.statsText}>Total Companies: {totalCompanies}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push("/admin/mod-applicants")}
        >
          <Text style={styles.actionButtonText}>Applicants</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.push("/admin/mod-companies")}
        >
          <Text style={styles.actionButtonText}>Companies</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "#0B1C48",
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  dashboardTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#000",
    marginTop: 20,
    alignSelf: "center",
    marginBottom: 100,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  statsText: {
    fontSize: 14,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  actionButton: {
    backgroundColor: "#0B1C48",
    width: 140,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#e57373",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
