import { useState, useEffect } from 'react';
import React from 'react';
import Sidebar from '../components/Sidebar';
import Cookies from 'js-cookie';
import { FaUsers } from "react-icons/fa";
import axios from 'axios';

const DashboardPages = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isusers, setIsUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Mendapatkan nilai peran dari cookie
    const roles = Cookies.get('roles');
    // Periksa apakah pengguna memiliki peran admin
    setIsAdmin(roles && JSON.parse(roles).includes('admin')); // Mengubah kondisi di sini

    console.log('Role:', roles); // Tambahkan console log di sini
    FetchDataUsers()
  }, []);

  const FetchDataUsers = async () => {
    setLoading(true)
    const response = await axios.get("http://127.0.0.1:8000/api/users")
    setIsUsers(response.data)
    console.log(response.data)
    setLoading(false)
  }

  if (!isAdmin) {
    return <div>Anda tidak memiliki izin untuk mengakses halaman ini.</div>;
  }

  return (
    <div className="flex bg-green-50">
      <Sidebar />
      <div className="flex">
        <div className="hero min-h-screen">
          <div className="flex-col lg:flex-row-reverse w-full">
            <div className="px-32">
              <div className="m-10">
                <h1 className="text-5xl font-bold text-center ml-5">Hallo, Admin 🤚</h1>
                <p className="py-6 text-center text-2xl w-[500px] ml-32">
                  Selamat Datang di dashboard admin, <br />
                  Disini anda bisa manage mulai dari data lomba, jadwal lomba hingga pendaftaran lomba.
                </p>
              </div>
              <div className="container">
                <div className="flex flex-wrap ">
                  <div className="w-full grid grid-cols-3 gap-10">
                  <div className="shadow-lg w-[300px] py-5 px-8 flex">
                   <div><FaUsers  className='mr-3 mt-5'/></div>
                 { loading ? <div>Loading...</div>  : <div>
                      <p className='font-semibold'> Pendaftar</p>
                      <h1 className='text-lg font-bold'>Jumlah Pendaftar : {isusers.total}</h1>
                   </div>}
                  </div>
                  <div className="shadow-lg w-[300px] py-5 px-8 flex">
                   <div><FaUsers  className='mr-3 mt-5'/></div>
                   <div>
                      <p className='font-semibold'> Pemenang</p>
                      <h1 className='text-lg font-bold'>Jumlah Pendaftar : 5</h1>
                   </div>
                  </div>
                  <div className="shadow-lg w-[300px] py-5 px-8 flex">
                   <div><FaUsers  className='mr-3 mt-5'/></div>
                   <div>
                      <p className='font-semibold'> Pendaftar</p>
                      <h1 className='text-lg font-bold'>Jumlah Pendaftar : 5</h1>
                   </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardPages;
