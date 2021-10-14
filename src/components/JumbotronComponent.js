import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
      title: state.users.title
      }
  }

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="display-3">Welcome to {props.title} WEB!!!</h1>
          <p className="lead">This is my first React App</p>
          <hr className="my-2" />
          <p>Website yang menampilkan daftar teman yang memiliki hutang kepada HDM-Vision.</p>
          <p className="lead">
            <Button color="primary"><FontAwesomeIcon icon={faInfo} /> Learn More</Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);