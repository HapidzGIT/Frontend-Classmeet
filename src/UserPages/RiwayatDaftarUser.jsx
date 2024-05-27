import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarUser from '../components/SidebarUser';
import { FaBasketballBall } from "react-icons/fa";

const RiwayatDaftarUser = () => {

  const [loading, isloading] = useState(false);

  
  return (
    <div className="flex flex-wrap w-full min-h-screen">
      <SidebarUser />
      <div className="ml-5 sm:block">
        <div className="container pt-16 px-16">
          <h1 className="text-2xl font-bold">Riwayat Daftar User</h1>
          <hr />
      
            <div className='flex justify-between gap-40 items-center' >
              <div className='p-1'>
                <p className='font-semibold pt-10 text-2xl'>Basket</p>
                <h1>Anda Telah mendaftar di perlombaan </h1>
              </div>
              <div className=''>
                <h1 className='font-semibold pt-10 text-2xl'>Basket</h1>
                <p className='text-slate-400'>Terdaftar</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatDaftarUser;
