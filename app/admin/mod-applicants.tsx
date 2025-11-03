import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

//  Import applicant data from a separate file
import { applicantsData } from "../../src/data/applicantsData";

export default function AdminModApplicants() {
  const router = useRouter();

  //  Use data from the imported file
  const [applicants] = useState(applicantsData);
  const [search, setSearch] = useState("");

  //  Filter by email
  const filteredApplicants = applicants.filter((a) =>
    a.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>JobSwipe</Text>
        <Text style={styles.adminText}>Admin</Text>
      </View>

      {/* Title and Dynamic Count */}
      <View style={styles.headerContent}>
        <Text style={styles.title}>Modify Applicants</Text>
        <Text style={styles.count}>
          Total Applicants: {filteredApplicants.length}
        </Text>
      </View>

      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Input Email to Search"
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Name</Text>
        <Text style={[styles.tableHeaderText, { flex: 0.8 }]}>Age</Text>
        <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Contact No.</Text>
        <Text style={[styles.tableHeaderText, { flex: 2 }]}>Location</Text>
        <Text style={[styles.tableHeaderText, { flex: 2 }]}>Email</Text>
      </View>

      {/* Table Data */}
      <FlatList
        data={filteredApplicants}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1.5 }]}>{item.name}</Text>
            <Text style={[styles.tableCell, { flex: 0.8 }]}>{item.age}</Text>
            <Text style={[styles.tableCell, { flex: 1.5 }]}>{item.contact}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.location}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.email}</Text>
          </View>
        )}
      />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={() => router.push("/admin/dashboard")}
        >
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ===============================
// STYLES
// ===============================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    backgroundColor: "#0b1b4d",
    height: 120,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  logo: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    marginRight: 5,
  },
  adminText: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  count: {
    fontSize: 15,
    color: "#000",
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 25,
    borderColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#ddd",
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableHeaderText: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 13,
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  tableCell: {
    fontSize: 13,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  goBackButton: {
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  goBackText: {
    color: "black",
  },
  logoutButton: {
    backgroundColor: "#e44",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: "white",
  },
});
