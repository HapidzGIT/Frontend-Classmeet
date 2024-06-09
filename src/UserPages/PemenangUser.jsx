import React, { useState } from 'react';
import SidebarUser from '../components/SidebarUser';
import { useQuery } from '@tanstack/react-query';
import Api from '../Api';
import axios from 'axios';

const PemenangUser = () => {
  const { data: fetchProduct, isLoading } = useQuery({
    queryFn: async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/pemenangs');
      return response;
    },
    queryKey: ['fetch.lomba'],
  });

  if (isLoading) {
    return <div>Loading..</div>;
  }

  const { data } = fetchProduct;
  console.log(data);

  const dataLomba = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className="border my-20 bg-gray-700 w-72 h-36 shadow-xl text-white text-[18px] font-semibold rounded-lg">
          <div className="px-3">
            {' '}
            <h1>Pemenang Lomba : {item.kelas_pemenang}</h1>
          </div>
          <div className="px-3">
            {' '}
            <h1>Nama Lomba : {item.tempat}</h1>
          </div>
          <div className="px-3">
            {' '}
            <h1>Nama Lomba : {item.tanggal}</h1>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex">
        <SidebarUser />
        <div className="max-w-7xl mx-auto pt-20 text-2xl font-bold">
          Scores dan Pemenang
          <div>{dataLomba()}</div>
        </div>
      </div>
    </>
  );
};

export default PemenangUser;
