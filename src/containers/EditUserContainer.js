import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'
import EditUserComponent from '../components/EditUserComponent'
import { getUserDetail, editUserHandler } from '../actions/userAction';
import { connect } from 'react-redux';

class EditUserContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Edit User</h1>
                <EditUserComponent submitHandler={editUserHandler}/>
            </Container>
        )
    }
}

export default connect()(EditUserContainer);