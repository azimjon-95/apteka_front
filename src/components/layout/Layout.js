import React from 'react';
import './style.css';
import { sidebarOwner } from '../../utils/sidebarData';
import { Link } from 'react-router-dom';

// const DataSidebar = sidebarOwner
console.log(sidebarOwner);

const Layout = ({ children }) => {
    return (
        <div className='Container_sidebar'>
            <div className="Sidebar_box">
                <div className="sid_Nav">
                    <h1>Logo</h1>
                </div>

                <div className="side-Main">
                    {
                        sidebarOwner?.map((item, inx) => (
                            <Link key={inx} to={item.path}>
                                <div className="Side_rows">
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>


            </div>
            <div className="Main_box">
                {children}
            </div>
        </div>
    )
}

export default Layout