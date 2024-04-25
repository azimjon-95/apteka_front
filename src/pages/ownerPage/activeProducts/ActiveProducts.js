import React from 'react'
import "./ActiveProducts.css"
import g from "../../../assets/goku.jpg"
import { FaRegUserCircle } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
const ActiveProducts = () => {
    return (
        <div>
            <div className="active">
                <div className="active-products">
                    <div className="products">
                        <div className="see-all">
                            <h2>Active Maxsulotlar</h2>
                            <button>Barchasini ko'rish</button>
                        </div>
                    <div className="products_collection">
                        <ul className='collection'>
                            <h3>Mahsulot Nomi</h3>
                            <li>Kupen</li>
                        </ul>
                        <ul className='collection'>
                            <h3>Bo'limi</h3>
                            <li>Tabletka</li>
                        </ul>
                        <ul className='collection'>
                            <h3>Holati</h3>
                            <li>Qolmagan</li>
                        </ul>

                    </div>
                    </div>
                </div>
                <div className="costumers">
                    <div className="costumer">
                    <div className="see-all all">
                            <h2>Ishchilar</h2>
                            <button className='see_worker'>Barchasini ko'rish</button>
                        </div>
                        <div className="file">
                            <div className="imge">
                                <img src={g} alt="" />
                            </div>
                            <div className="file_title">
                                <h3>John Doe</h3>
                                <p>Doctor</p>
                            </div>
                            <div className="file_icons">
                            <FaRegUserCircle />
                            <IoCallOutline />
                            <MdOutlineMessage />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveProducts
