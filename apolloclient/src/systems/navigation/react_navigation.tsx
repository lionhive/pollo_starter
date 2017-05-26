import { connect } from "react-redux";
import App from "./app";

const mapStateToProps = (state: any) => ({
  nav: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);
export default AppWithNavigationState;
