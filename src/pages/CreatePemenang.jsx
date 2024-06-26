import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

const CreatePemenang = () => {

  const { id } = useParams(); // Mengambil ID jadwal lomba dari URL
  const [kelasPemenang, setKelasPemenang] = useState({
    jadwal_lomba_id: id,
    kelas_pemenang: '',
  });

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim data kelas pemenang ke API
      const response = await axios.post('http://127.0.0.1:8000/api/pemenangsjadwal', kelasPemenang);
      console.log(response.data);
     toast.success("Berhasil Menambahkan Pemanang", {
      position : "top-center",
      duration : 3000
     })
     navigate("/JadwalLomba")
    } catch (error) {
      console.error('Error adding winner:', error);
      alert('Terjadi kesalahan saat menyimpan data pemenang');
    }
  };

  const handleInputChange = (e) => {
    setKelasPemenang({ ...kelasPemenang, kelas_pemenang: e.target.value });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <h1 className="text-3xl font-bold mb-6 ml-7 mt-10">Pilih Kelas pemenang</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="ml-7 bg-green-100 rounded-md px-9 py-4 text-[19px] border"
            name="kelas_pemenang"
            value={kelasPemenang.kelas_pemenang}
            onChange={handleInputChange}
            placeholder="Kelas Pemenang"
          />
          <div className="mt-7 ml-7">
            <button
              type="submit"
              className="px-5 py-3 bg-green-500 rounded font-bold text-[18px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePemenang;
