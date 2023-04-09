import axios from 'axios';
import {
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from '../constants/admin';
import { API_URL } from '../utility/urls';

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${API_URL}/api/login`,
      { username, password },
      config
    );

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: ADMIN_LOGOUT });
};

export const addProject =
  (projectName, gitLink, liveLink, image, description, projectstatus) =>
  async (dispatch) => {
    console.log({ image });
    try {
      dispatch({
        type: ADD_PROJECT_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        `${API_URL}/api/add-project`,
        {
          projectName,
          gitLink,
          liveLink,
          image,
          description,
          status: projectstatus,
        },
        config
      );

      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PROJECT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
