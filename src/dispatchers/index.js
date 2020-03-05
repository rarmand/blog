// łączenie aplikacji ze stanem ogólnym opracowanym w Redux
import { connect } from "react-redux";
import { languageFetched } from "../actions";
import App from "../views/app";

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = { languageFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
