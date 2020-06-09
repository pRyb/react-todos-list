import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

// import { fetchTask } from "./store/todos/actions";

const App = ({ numberOfTasks, fetchFirstTenTasks }: any) => {

  useEffect(() => {
    fetchFirstTenTasks();
  }, [fetchFirstTenTasks]);
  return (
    <div className="App">
      <Header />
      <Main />
      {numberOfTasks && numberOfTasks < 10 && <Footer />}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  numberOfTasks: state.todos.length,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchFirstTenTasks: () => dispatch({ type: "FETCH_FIRST_TEN_TASKS" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
