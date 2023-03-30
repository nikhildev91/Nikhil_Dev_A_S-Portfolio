import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/admin';
import AddProject from './AddProject';
import AddSkills from './AddSkills';

export default function NavBar() {
  const [showPage, setShowPage] = useState('AddProject');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      navigate('/admin-panel/login');
    }
  });
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <div className="fixed flex justify-between items-center w-full min-h-12 bg-[#08192f] p-5 z-10">
        <div className="w-full">
          <p className="font-blod text-4xl text-white">Admin Panel</p>
        </div>
        {userInfo && (
          <div className="w-full">
            <p className="font-blod text-4xl text-white">{userInfo.nickName}</p>
          </div>
        )}
        <div>
          <button
            onClick={handleLogout}
            className="text-white bg-pink-700 flex justify-center items-center py-2 px-10 rounded-lg text-lg font-bold"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="h-screen w-60 bg-[#052c5f] py-28  ">
          <div
            onClick={() => setShowPage('AddProject')}
            className={
              showPage === 'AddProject'
                ? 'h-20 w-60 flex items-center justify-center text-white font-bold text-xl bg-red-900 cursor-pointer'
                : 'h-20 w-60 flex items-center justify-center text-white font-bold text-xl hover:bg-red-900 cursor-pointer'
            }
          >
            Add Projects
          </div>
          <div
            onClick={() => setShowPage('AddSkills')}
            className={
              showPage === 'AddSkills'
                ? 'h-20 w-60 flex items-center justify-center text-white font-bold text-xl bg-red-900 cursor-pointer'
                : 'h-20 w-60 flex items-center justify-center text-white font-bold text-xl hover:bg-red-900 cursor-pointer'
            }
          >
            Add Skils
          </div>
        </div>
        <div className="mt-[100px] p-5 w-screen">
          {showPage === 'AddProject' ? (
            <AddProject />
          ) : (
            showPage === 'AddSkills' && <AddSkills />
          )}
        </div>
      </div>
    </div>
  );
}
