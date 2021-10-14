import React from 'react'
import { connect } from 'react-redux';
import { Table, Spinner } from 'reactstrap';


function mapStateToProps(state) {
    return {
        getUserDetail: state.users.getUserDetail,
        errorUserDetail: state.users.errorUserDetail
    }
}

const DetailUserComponent = (props) => {
    return (
        <Table striped className="mb-5">
            {props.getUserDetail ?
            <tbody>
                <tr>
                    <td width="200">Name</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.name}</td>
                </tr>
                <tr>
                    <td width="200">Address</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.address}</td>
                </tr>
                <tr>
                    <td width="200">Age</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.age}</td>
                </tr>
                <tr>
                    <td width="200">Phone Number</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.no_hp}</td>
                </tr>
            </tbody>
            : <div className="text-center"><Spinner color="dark"/></div> }
        </Table>
    )
}

export default connect(mapStateToProps, null)(DetailUserComponent);
