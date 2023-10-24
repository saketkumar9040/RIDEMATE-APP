import { Provider } from "react-redux";
import MainNavigator from "./src/navigations/mainNavigator";
import Store from "./src/redux/store";

export default function App() {
  return (
  <Provider store={Store}>
    <MainNavigator />
    </Provider>);
}
