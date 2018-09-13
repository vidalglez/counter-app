import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CounterForm from "./components/counter-form";
import StudentDashboard from './components/student-dashboard'
import configureStore from "./store/configureStore";

import "./styles.css";
/*
function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>Basic React & Redux Example</h2>
      <CounterForm counter={0} />
    </div>
  );
}*/
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Counter App</h1>
      <h2>Basic React & Redux Example</h2>
      <CounterForm counter={0} />
      <hr />
      <StudentDashboard />
    </div>
  </Provider>
);

store.subscribe(() => {
  console.log(store.getState());
});

//store.dispatch(addCounter());
/*
store.dispatch(addCounter({ incrementBy: 5 }));
store.dispatch(decreaseCounter());
store.dispatch(decreaseCounter({ decremenetBy: 2 }));
store.dispatch(setCounter({ counter: 2 }));
store.dispatch(resetCounter());
*/
/*
const names = ['Yo', 'Tu', 'El'];
const user = {
    name: 'Jen',
    age: 24    
}
console.log([
    ...names,
    'Nostros'
]);

console.log({    
    ...user,
    location: 'GDL',
    age:25
});
*/
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
