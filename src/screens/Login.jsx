/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/admin';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/admin-panel/login');
    } else {
      navigate('/admin-panel');
    }
  }, [userInfo, navigate]);

  const handleSubmit = () => {
    if (username && password) {
      setErrMsg('');
      setError(false);
      dispatch(login(username, password));
    } else {
      setErrMsg('All Fields Required!...');
      setError(true);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#08192f]">
      <div className="w-full m-5 md:w-[30%] min-h-[50%] bg-blue-50 p-10">
        <p className="text-center border border-b-pink-600 font-bold text-4xl md:text-7xl ">
          Login
        </p>
        {error && (
          <div className="w-full h-16 flex items-center justify-center text-red-600 bg-red-300 mt-4 rounded-lg">
            {errMsg}
          </div>
        )}
        <input
          value={username}
          type="text"
          className="w-full my-5 p-4 border-pink-600"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          value={password}
          className="w-full my-5 p-4 border-pink-600"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full p-4 border border-pink-600 rounded-lg bg-[#1675f1] hover:bg-[#08192f] text-xl md:text-3xl font-bold text-white "
        >
          Login
        </button>
      </div>
      {/* <pre className="text-white">{JSON.stringify(userInfo, null, 4)}</pre> */}
    </div>
  );
}

export default Login;
