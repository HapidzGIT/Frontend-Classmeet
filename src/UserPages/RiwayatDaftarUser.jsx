import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarUser from '../components/SidebarUser';

const RiwayatDaftarUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tokenUser, setTokenUser] = useState('');
  const [dataRiwayat, setDataRiwayat] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setTokenUser(token);
    }
  }, []);

  useEffect(() => {
    if (tokenUser) {
      responseData();
    }
  }, [tokenUser]);

  const responseData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/api/get-by-user', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      console.log(data)
      setDataRiwayat(data);
      console.log(data.length)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  
  };

  const datadaftar = dataRiwayat.length
  if (datadaftar === 0) {
    return (
      <div className="flex flex-wrap w-full min-h-screen">
      <SidebarUser />
      <div className="ml-5 sm:block">
        <div className="container pt-16 px-16">
          <h1 className="text-2xl font-bold">Untuk Saat ini anda belum mendaftar lomba apapun</h1>
          <hr />
        </div>
      </div>
    </div>
    )
  }

  return (
    <div className="flex flex-wrap w-full min-h-screen">
      <SidebarUser />
      <div className="ml-5 sm:block">
        <div className="container pt-16 px-16">
          <h1 className="text-2xl font-bold">Riwayat Daftar Anda</h1>
          <hr />
          {isLoading ? (
            "Loading Data Riwayat User..."
          ) : (
            <div className="flex flex-col gap-4">
              {dataRiwayat.map(item => (
                <div key={item.id} className="flex justify-between gap-40 items-center p-2 border-b">
                  <div className='flex flex-col '><h1 className='text-lg py-8 font-semibold'>Nama Lomba dan kelas</h1>
                  
                  <div className="p-1 flex items-center justify-center gap-x-3">
                    <h1 className="font-semibold text-2xl">{item.nama_lomba}</h1>,
                    <p className='font-semibold text-2xl'>{item.nama_kelas}</p>
                  </div>
                  </div>
                  <div className='flex flex-col '><h1 className='text-lg py-8 font-semibold'>Anda Telah Mendaftar di</h1>
                  <div className="">
                    <p className="text-slate-400">{item.message}</p>
                    <h1 className="font-semibold text-2xl">anda {item.nama_peserta} Telah Terdaftar</h1>
                  </div>
                  </div>
                </div>
              ))}
              
            </div>
          ) }
        </div>
      </div>
    </div>
  );
};

export default RiwayatDaftarUser;


