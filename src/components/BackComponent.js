import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export const BackComponent = () => {
    return (
        <Row>
            <Col>
                <Link to="/">
                    <Button color="primary" className="btn btn-sm mb-3">
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}
