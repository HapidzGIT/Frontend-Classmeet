// NavbarComponent.js
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../Api';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie'; // Pastikan Anda mengimpor modul js-cookie

const NavbarComponent = ({ onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  let navigate = useNavigate();
  document.title = 'UserDashboard';

  const handleLogout = async () => {
    try {
      await Api.post('/api/logout');
      // Hapus cookies yang diset pada saat login
      Cookies.remove('token');
      Cookies.remove('user');
      Cookies.remove('permissions');
      Cookies.remove('role');

      // Hapus token dari localStorage (jika perlu)
      localStorage.removeItem('token');

      // Tampilkan notifikasi sukses
      toast.success('Logout Successfully!', {
        position: 'top-center',
        style: {
          borderRadius: '0.5rem',
          backgroundColor: '#10B981', // Warna hijau
          padding: '1rem',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'white',
        },
      });

      navigate('/');
    } catch (error) {
      console.error('Terjadi kesalahan saat logout:', error);
      // Tangani kesalahan atau tampilkan notifikasi kesalahan
      toast.error('Terjadi Kesalahan saat Logout', {
        position: 'top-right',
        duration: 4000,
      });
    }
  };

  return (
    <div className="flex justify-end items-center bg-white shadow-xl text-white p-4 w-full">
      <div className="mr-2 relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleDropdown} className="w-8 h-8 rounded-full cursor-pointer bg-slate-700">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
        {showDropdown && (
          <div className="absolute bg-white shadow-lg rounded w-36 top-full right-0 mt-2">
            <Link to="/ProfileDashboard">
              <div className="text-gray-700 p-2 cursor-pointer hover:bg-gray-100">Profile</div>
            </Link>
            <div className="text-gray-700 p-2 cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;