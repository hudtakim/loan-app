import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'
import CreateUserComponent from '../components/CreateUserComponent'
import {createUserHandler} from "../actions/userAction";

class CreateUserContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Create User</h1>
                <CreateUserComponent submitHandler={(data) => createUserHandler(data)}/>
            </Container>
        )
    }
}

export default connect()(CreateUserContainer);
