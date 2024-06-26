import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';


const DashboardUser = () => {
 
  const [userData, setUserData] = useState(''); // Menambah state untuk menyimpan data user

  useEffect(() => {
    loadUserData();
  }, []);


  const loadUserData = () => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  };

  console.log(userData); // Debugging: melihat isi userData

  return (
    <Layout>
      <div className="hero">
        <div className="flex-col lg:flex-row-reverse w-full mt-40">
          <div className="px-64">
            <h1 className="text-5xl font-bold">
              Halo {userData.name}, Selamat datang di <span className="text-green-300">SIMEET</span>
            </h1>
            <p className="py-6 text-2xl">Anda Bisa Mendaftar, Melihat Jadwal Mengirim Saran dan Melihat Data  di Web aplikasi ini Semua kebutuhan classmeet dalam satu website</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardUser;
