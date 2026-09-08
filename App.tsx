import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import CompanyHeader from './src/components/CompanyHeader';
import EmployedList from './src/components/EmployedList';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <CompanyHeader />
        </View>
        <View style={styles.listContainer}>
          <EmployedList />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2196F3',
  },
  headerContainer: {
    flex: 0.3,
  },
  listContainer: {
    flex: 0.7,
    backgroundColor: '#ffffff',
  },
});