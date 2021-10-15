import Axios from 'axios';
import Swal from 'sweetalert2';

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

export const getUsersList = () => {
    return (dispatch) => {
        Axios
            .get('http://localhost:3001/api/get')
            .then(function (response) {
                // handle success
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                // handle error
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    }
}

export const getUserDetail = (id) => {
    return (dispatch) => {
        Axios
            .get('http://localhost:3001/api/get/' + id)
            .then(function (response) {
                // handle success
                dispatch({
                    type: GET_USER_DETAIL,
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                // handle error
                dispatch({
                    type: GET_USERS_LIST,
                    payload: {
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    }
}

export const deleteUserDetail = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USER_DETAIL,
            payload: {
                data: false,
                errorMessage: false
            }
        })
    }
}

export const createUserHandler = (formObj) => {
    Axios.post("http://localhost:3001/api/insert", {
        name: formObj.name,
        address: formObj.address,
        age: formObj.age,
        no_hp: formObj.no_hp
    }).then(response => {
        Swal.fire(
            'User Created!',
            'Name: ' + formObj.name + ', Age: ' + formObj.age,
            'success'
        ).then((result) => {
            if (result.value) {
                window.location.replace(process.env.PUBLIC_URL);
            }
          });
        //setMovieList([...movieReviewList, {movieName: movieName, movieReview: review}]);
        return (dispatch) => {
            dispatch({
                type: POST_USER_CREATE,
                payload: {
                  data: response.data,
                  errorMessage: false,
                },
              });
        }

    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Create User Failed!',
            text: error,
            footer: '<a href="https://f4.bcbits.com/img/a0257396577_10.jpg">Why do I have this issue?</a>'
        })
        return (dispatch) => {
            dispatch({
                type: POST_USER_CREATE,
                payload: {
                  data: false,
                  errorMessage: error.message,
                },
              });
        }
    })
}

export const editUserHandler = (formObj) => {
    Axios.put("http://localhost:3001/api/edit", {
        id: formObj.id,
        name: formObj.name,
        address: formObj.address,
        age: formObj.age,
        no_hp: formObj.no_hp
    }).then(response => {
        Swal.fire(
            'User Updated!',
            'Name: ' + formObj.name + ', Age: ' + formObj.age,
            'success'
        ).then((result) => {
            if (result.value) {
                window.location.replace(process.env.PUBLIC_URL);
            }
          });
        return (dispatch) => {
            dispatch({
                type: PUT_USER_EDIT,
                payload: {
                  data: response.data,
                  errorMessage: false,
                },
              });
        }
    }).catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Update User Failed!',
            text: error,
            footer: '<a href="https://f4.bcbits.com/img/a0257396577_10.jpg">Why do I have this issue?</a>'
        })
        return (dispatch) => {
            dispatch({
                type: PUT_USER_EDIT,
                payload: {
                  data: false,
                  errorMessage: error.message,
                },
              });
        }
    })
}

export const deleteUser = (id) => {
    return (dispatch) => {
        Axios
            .delete(
                "http://localhost:3001/api/delete/" + id
            )
            .then(function (response) {
                Swal.fire(
                    'User Deleted!',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        window.location.reload();
                    }
                    
                  });

            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Delete User Failed!',
                    text: error,
                    footer: '<a href="https://f4.bcbits.com/img/a0257396577_10.jpg">Why do I have this issue?</a>'
                })

            });
    };
};

export const deleteDataUser = () => {
    return (dispatch) => {
      dispatch({
        type: GET_USER_DETAIL,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
  
  
      dispatch({
        type: POST_USER_CREATE,
        payload: {
          data: false,
          errorMessage: false,
        },
      });
    };
  };