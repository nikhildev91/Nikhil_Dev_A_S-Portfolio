import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from '../adminPanelComponents/NavBar';

export default function Dashboard() {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      navigate('/admin-panel/login');
    }
  }, [userInfo, navigate]);
  return (
    <div>
      <NavBar />
    </div>
  );
}
