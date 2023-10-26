import { Provider } from "react-redux";
import MainNavigator from "./src/navigations/mainNavigator";
import Store from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView style={{flex:1,}} 
        >
          <MainNavigator />
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
}
