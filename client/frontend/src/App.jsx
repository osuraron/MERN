import AnimalForm from "./AnimalForm";
import AnimalList from "./AnimalList";
import "./App.css";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <UserList />
      <AnimalList />
      <AnimalForm />
      <UserForm />
    </div>
  );
}

export default App;
