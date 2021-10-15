import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import JumbotronComponent from './components/JumbotronComponent'
import { BrowserRouter, Route} from "react-router-dom";
import HomeContainer from './containers/HomeContainer'; 
import EditUserContainer from './containers/EditUserContainer';
import DetailUserContainer from './containers/DetailUserContainer';
import CreateUserContainer from './containers/CreateUserContainer';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/loan-app" exact component={HomeContainer} />
          <Route path="/loan-app/create" exact component={CreateUserContainer} />
          <Route path="/loan-app/edit/:id" exact component={EditUserContainer} />
          <Route path="/loan-app/detail/:id" exact component={DetailUserContainer} />
        </BrowserRouter>
      </div>
    )
  }
}