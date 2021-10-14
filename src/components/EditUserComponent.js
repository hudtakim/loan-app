import React from "react";
import { connect } from 'react-redux';
import { Field, Form } from "react-final-form";

const required = (value) => (value ? undefined : "Required");
const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
const minValue = (min) => (value) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

function mapStateToProps(state) {
    return {
        initialValues: {
            id: state.users.getUserDetail.id,
            name: state.users.getUserDetail.name,
            address: state.users.getUserDetail.address,
            age: state.users.getUserDetail.age,
            no_hp: state.users.getUserDetail.no_hp
        }
    }
}

const EditUserComponent = (props) => {
    return (
        <Form onSubmit={(formObj) => {
            formObj.id = props.initialValues.id;
            props.submitHandler(formObj);
            
            }}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="mb-5">
                    <div className="row mt-4">
                        <Field name="name" validate={required} initialValue={props.initialValues.name}>
                            {({ input, meta }) => (
                                <div className="col">
                                    <input {...input} type="text" placeholder="Name" className="form-control" />
                                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="address" validate={required} initialValue={props.initialValues.address}>
                            {({ input, meta }) => (
                                <div className="col">
                                    <input {...input} type="text" placeholder="Address" className="form-control" />
                                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="row mt-3">
                        <Field name="age" validate={composeValidators(required, mustBeNumber, minValue(18))} initialValue={props.initialValues.age} >
                            {({ input, meta }) => (
                                <div className="col">
                                    <input {...input} type="text" placeholder="Age" className="form-control" />
                                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="no_hp" validate={composeValidators(required, mustBeNumber)} initialValue={props.initialValues.no_hp} >
                            {({ input, meta }) => (
                                <div className="col">
                                    <input {...input} type="text" placeholder="Phone Number" className="form-control" />
                                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <button className="btn btn-primary btn-block mt-4" type="submit">Submit</button>
                </form>
            )}
        </Form>
    );
};

export default connect(mapStateToProps, null)(EditUserComponent);