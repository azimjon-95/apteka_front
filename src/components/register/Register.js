// RegisterForm.js
import React, { useState } from 'react';
import './Register.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    birthday: '',
    username: '',
    password: '',
    gender: '',
    phonenumber: '',
    address: '',
    salary: '',
    idnumber: '',
    type: '',
    worktime: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Bu yerda formani jo'natish funksiyasini qo'shishingiz mumkin
  };
  return (
    <div className="body">

    <form onSubmit={handleSubmit} className="register-form">
      <h2>Ro'yxatdan o'tish</h2>
      <div className="form-row">
        <label>
          Ism:
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
        </label>
        <label>
          Familiya:
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Tug'ilgan sana:
          <input type="text" name="birthday" value={formData.birthday} onChange={handleChange} placeholder="MMDDYYYY" />
        </label>
        <label>
          Foydalanuvchi nomi:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Parol:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <label>
          Jins:
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Telefon raqami:
          <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
        </label>
        <label>
          Manzil:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Maosh:
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
        </label>
        <label>
          ID raqami:
          <input type="text" name="idnumber" value={formData.idnumber} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Tur:
          <input type="text" name="type" value={formData.type} onChange={handleChange} />
        </label>
        <label>
          Ish vaqti:
          <input type="text" name="worktime" value={formData.worktime} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Ro'yxatdan o'tish</button>
    </form>
    </div>

  );
};

export default RegisterForm;
