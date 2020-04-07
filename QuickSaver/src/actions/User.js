import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLEAR_SERVER_ERROR,
  CHOOSE_CATAGORY_SUCCESS,
  CHOOSE_CATAGORY_FAILURE,
  REMOVE_CATAGORY_SUCCESS,
  REMOVE_CATAGORY_FAILURE,
  LIKE_DISCOUNT_SUCCESS,
  LIKE_DISCOUNT_FAILURE,
  REMOVE_DISCOUNT_LIKE_SUCCESS,
  REMOVE_DISCOUNT_LIKE_FAILURE,
  UPDATE_USER_SUCCESS,
} from '../constants/User';

import { getSession, createSession, deleteSession } from './Session';

// const API_URL = 'https://morning-bayou-76530.herokuapp.com';
const MAIL_API = 'https://secure-fortress-18804.herokuapp.com';
const API_URL = 'http://quicksavers-5e6839d95e4112000146c226.c.5e6588bc5e4112000146c1bf.cycle.io:3000';
// const MAIL_API = 'http://localhost:3001';

export function loginSuccess(details) {
  return {
    type: LOGIN_SUCCESS,
    details,
  };
}

export function loginFailure(details) {
  return {
    type: LOGIN_FAILURE,
    details,
  };
}

export function signupSuccess(details) {
  return {
    type: SIGNUP_SUCCESS,
    details,
  };
}

export function signupFailure(details) {
  return {
    type: SIGNUP_FAILURE,
    details,
  };
}

export function clearServerError() {
  return {
    type: CLEAR_SERVER_ERROR,
  };
}

export function chooseCatagorySuccess(details) {
  return {
    type: CHOOSE_CATAGORY_SUCCESS,
    details,
  };
}

export function chooseCatagoryFailure(details) {
  return {
    type: CHOOSE_CATAGORY_FAILURE,
    details,
  };
}

export function removeCatagorySuccess(details) {
  return {
    type: REMOVE_CATAGORY_SUCCESS,
    details,
  };
}

export function removeCatagoryFailure(details) {
  return {
    type: REMOVE_CATAGORY_FAILURE,
    details,
  };
}

export function likeDiscountSuccess(details) {
  return {
    type: LIKE_DISCOUNT_SUCCESS,
    details,
  };
}

export function likeDiscountFailure(details) {
  return {
    type: LIKE_DISCOUNT_FAILURE,
    details,
  };
}

export function removeDiscountLikeSuccess(details) {
  return {
    type: REMOVE_DISCOUNT_LIKE_SUCCESS,
    details,
  };
}

export function removeDiscountLikeFailure(details) {
  return {
    type: REMOVE_DISCOUNT_LIKE_FAILURE,
    details,
  };
};

export function updateUserSuccess(details) {
  return {
    type: UPDATE_USER_SUCCESS,
    details,
  };
}

export const login = (email, password) => dispatch => {
  return fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email.toLowerCase(),
      password,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      console.log('login resp', responseJson)
      const selected_catagories = responseJson.selected_catagories.map(itm => {
        return JSON.parse(itm);
      });

      if (responseJson.status !== 200) {
        dispatch(loginFailure());
        return responseJson;
      }
      createSession(email, password);
      dispatch(
        loginSuccess({
          ...responseJson.body,
          selected_catagories,
          all_catagories: responseJson.all_catagories,
          user_discounts: responseJson.user_discounts,
        }),
      );
      return responseJson;
    })
    .catch(e => {
      dispatch(loginFailure(e));
    });
};

export const signup = (full_name, email, password) => dispatch => {
  return fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      full_name,
      email: email.toLowerCase(),
      password,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      if (responseJson.status !== 200) {
        dispatch(signupFailure(responseJson));
        return;
      }
      createSession(email, password);
      dispatch(signupSuccess({
        ...responseJson.body,
        all_catagories: responseJson.all_catagories,
        user_discounts: responseJson.user_discounts,
      }));
    })
    .catch(e => {
      dispatch(signupFailure(e));
    });
};

export const updateUser = params => (dispatch, getState) => {
  const user_id = getState().user.id;
  return fetch(`${API_URL}/users/${user_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      user: params,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      console.log('updateUser resp', responseJson)
      dispatch(updateUserSuccess(responseJson))
      return responseJson;
    })
    .catch(e => {
      console.log('updating error')
    });
};

export const chooseCatagory = last_catagory_id => (dispatch, getState) => {
  const user_id = getState().user.id;
  return fetch(`${API_URL}/user_last_catagories`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      user_id,
      last_catagory_id,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      const selected_catagories = responseJson.selected_catagories.map(itm => {
        return JSON.parse(itm);
      });
      dispatch(chooseCatagorySuccess({...responseJson, selected_catagories}));
    })
    .catch(e => {
      dispatch(chooseCatagoryFailure(e));
    });
};

export const removeCatagory = id => dispatch => {
  return fetch(`${API_URL}/user_last_catagories/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(responseJson => {
      const selected_catagories = responseJson.selected_catagories.map(itm => {
        return JSON.parse(itm);
      });
      dispatch(removeCatagorySuccess({...responseJson, selected_catagories}));
    })
    .catch(e => {
      dispatch(removeCatagoryFailure(e));
    });
};

export const likeDiscount = user_discount_id => dispatch => {
  return fetch(`${API_URL}/likes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      user_discount_id,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {

      dispatch(likeDiscountSuccess(responseJson));
    })
    .catch(e => {
      dispatch(likeDiscountFailure(e));
    });
};

export const removeDiscountLike = id => dispatch => {
  return fetch(`${API_URL}/likes/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(responseJson => {
      dispatch(removeDiscountLikeSuccess(responseJson));
    })
    .catch(e => {
      dispatch(removeDiscountLikeFailure(e));
    });
};

export const addCard = params => dispatch => {
  return fetch(`${API_URL}/payment`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      params,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      // dispatch(removeDiscountLikeSuccess(responseJson));
    })
    .catch(e => {
      // dispatch(removeDiscountLikeFailure(e));
    });
};

export const editCard = params => dispatch => {
  return fetch(`${API_URL}/payment`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      params,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      // dispatch(removeDiscountLikeSuccess(responseJson));
    })
    .catch(e => {
      // dispatch(removeDiscountLikeFailure(e));
    });
};

export const resetPassword = (email, password) => {
  return fetch(`${API_URL}/reset_password`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email.toLowerCase(),
      password,
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      createSession(email, password);
    })
    .catch(e => {
      // e;
    });
};

export const forgotPassword = email => {
  return fetch(`${API_URL}/forgot_password`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      email: email.toLowerCase(),
    }),
  })
    .then(res => res.json())
    .then(responseJson => {
      forgotPasswordMail(email, responseJson.body)
    })
    .catch(e => {
      // e;
    });
};

export const forgotPasswordMail = (email, temp) => {
  if (temp) {
    return fetch(`${MAIL_API}/mail`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email.toLowerCase(),
        temp,
      }),
    });
  } else {
    return;
  }
};
