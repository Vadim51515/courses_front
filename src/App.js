import logo from './logo.svg';
import './App.css';
import Courses from './Components/Courses/Courses';
import { Route, Switch } from 'react-router';
import ChangeCourse from './Components/ChangeCourse/ChangeCourse';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Application from './Components/Application/Application';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/course/:id?' render={() => <ChangeCourse />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/application' render={() => <Application/>} />
        <Route path='/' render={() => <Courses />} />
      </Switch>
    </div>
  );
}

export default App;

// 1) Анализы
// 2)Ренген стоп
// 3)Эректо скопия
