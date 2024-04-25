import React from 'react'
import "./Hisobotlar.css"
import { BsPersonFill } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaSackDollar } from "react-icons/fa6";
import ActiveProducts from '../activeProducts/ActiveProducts';
const Hisobotlar = () => {
    return (
        <div>
            <div className="owner_page">
<div className="owner_card">
    <div className="owner_card-worker">
        <div className="owner_title">
            <h2>0</h2>
            <p>Ishchilar</p>
        </div>
        <div className="owner_icon"><BsPersonFill /></div>
    </div>
    <div className="owner_card-worker">
        <div className="owner_title">
            <h2>0</h2>
            <p>Maxsulotlar</p>
        </div>
        <div className="owner_icon"><IoNewspaperOutline />
</div>
    </div>
    <div className="owner_card-worker">
        <div className="owner_title">
            <h2>0</h2>
            <p>Buyurtmalar</p>
        </div>
        <div className="owner_icon"><HiOutlineShoppingBag />
</div>
    </div>
    <div className="owner_card-worker card_color">
        <div className="owner_title">
            <h2>0$</h2>
            <p>Daromad</p>
        </div>
        <div className="owner_icon"><FaSackDollar />
</div>
    </div>
</div>
            </div>
            
            <ActiveProducts/> 
        </div>
    )
}

export default Hisobotlar
