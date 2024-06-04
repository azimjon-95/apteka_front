// RegisterForm.js
import React, { useState } from 'react';
import './Register.css';
import axios from "axios";

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
    setLoading(true);
    
    try {
      const response = await axios.post('https://apteka-git-main-n-coder-23s-projects.vercel.app/users/createUser', formData)
      setLoading(false);
      console.log(response);

      if (response.data) {
        alert('Form data saved successfully');
      } else {
        alert('Error saving form data');
    }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving form data');
      setLoading(false);
    }
  
  }
  return (
    <div className="body">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Ro'yxatdan o'tish</h2>
        <div className="form-row">
          <label>
            Ism:
            <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
            {errors.fname && <span className="error">{errors.fname}</span>}
          </label>
          <label>
            Familiya:
            <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
            {errors.lname && <span className="error">{errors.lname}</span>}
          </label>
        </div>
        <div className="form-row">
          <label>
            Tug'ilgan sana:
            <input type="text" name="birthday" value={formData.birthday} onChange={handleChange} placeholder="MMDDYYYY" />
            {errors.birthday && <span className="error">{errors.birthday}</span>}
          </label>
          <label>
            Foydalanuvchi nomi:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
            {errors.username && <span className="error">{errors.username}</span>}
          </label>
        </div>
        <div className="form-row">
          <label>
            Parol:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}
          </label>
          <label>
            Jins:
            <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
            {errors.gender && <span className="error">{errors.gender}</span>}
          </label>
        </div>
        <div className="form-row">
          <label>
            Telefon raqami:
            <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
            {errors.phonenumber && <span className="error">{errors.phonenumber}</span>}
          </label>
          <label>
            Manzil:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
            {errors.address && <span className="error">{errors.address}</span>}
          </label>
        </div>
        <div className="form-row">
          <label>
            Maosh:
            <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
            {errors.salary && <span className="error">{errors.salary}</span>}
          </label>
          <label>
            ID raqami:
            <input type="text" name="idnumber" value={formData.idnumber} onChange={handleChange} />
            {errors.idnumber && <span className="error">{errors.idnumber}</span>}
          </label>
        </div>
        <div className="form-row">
          <label>
            Tur:
            <input type="text" name="type" value={formData.type} onChange={handleChange} />
            {errors.type && <span className="error">{errors.type}</span>}
          </label>
          <label>
            Ish vaqti:
            <input type="text" name="worktime" value={formData.worktime} onChange={handleChange} />
            {errors.worktime && <span className="error">{errors.worktime}</span>}
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Yuklanmoqda...' : "Ro'yxatdan o'tish"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
