import { store } from "@/redux";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
