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
        getUserDetail: state.users.getUserDetail,
        errorUserDetail: state.users.errorUserDetail
    }
}

const CreateUserComponent = (props) => {
    return (
        <Form onSubmit={props.submitHandler} >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="mb-5">
                    <div className="row mt-4">
                        <Field name="name" validate={required}>
                            {({ input, meta }) => (
                                <div className="col">
                                    <input {...input} type="text" placeholder="Name" className="form-control" value={props.name} />
                                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="address" validate={required}>
                            {({ input, meta }) => (
                                <div className="col">
                                    <input {...input} type="text" placeholder="Address" className="form-control" />
                                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className="row mt-3">
                        <Field name="age" validate={composeValidators(required, mustBeNumber, minValue(18))}>
                            {({ input, meta }) => (
                                <div className="col">
                                    <input {...input} type="text" placeholder="Age" className="form-control" />
                                    {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="no_hp" validate={composeValidators(required, mustBeNumber)}>
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

export default connect(mapStateToProps, null)(CreateUserComponent);