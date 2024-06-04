import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Royhat.css"
import {FaArrowCircleRight} from "react-icons/fa"
import {FaArrowCircleLeft} from "react-icons/fa"
import {} from "react-icons/fa"
const PaginationGetUser = () => { 
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`https://apteka-git-main-n-coder-23s-projects.vercel.app/${currentPage}`)
                setUsers(response.data.innerData)
                console.log(response);
                setTotalPage(response.data.totalPage)
            } catch (error) {
                console.error("error >>>", error);//3
            }
        }
        fetchData();
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1); 
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); 
        }
    }

    const style = { 
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "0 20px",
        flexDirection: "column"
    };
    
    const renderPageButtons = () => {
        const buttons = [];
        for (let i = 1; i <= totalPage; i++) {
            buttons.push(
                <button key={i} onClick={() => setCurrentPage(i)} disabled={currentPage === i}>{i}</button>
            );
        }
        return buttons;
    };

    return (
        <div style={style}>
            <table className='table' border={1} style={{ borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Ismingiz</th>
                        <th>Familyangiz</th>
                        <th>manzilingiz</th>
                        <th>Yoshingiz</th>
                        <th>Passport S.raqamingiz</th>
                        <th>Jinsingiz</th>
                        <th>Tug`ilgan kuningiz</th>
                        <th>Ish vaqtingiz</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.username}</td>
                                <td>{value.password}</td>
                                <td>{value.ismingiz}</td>
                                <td>{value.familyangiz}</td>
                                <td>{value.manzilingiz}</td>
                                <td>{value.yoshingiz}</td>
                                <td>{value.passportSeriyaRaqamingiz}</td>
                                <td>{value.jinsingiz}</td>
                                <td>{value.tugilganKuningiz}</td>
                                <td>{value.IshVaqtingiz}</td>
                    
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='BtnPagination'>
                <button onClick={handlePrevPage} disabled={currentPage === 1}><FaArrowCircleLeft/></button>
                {renderPageButtons()}
                <button onClick={handleNextPage} disabled={currentPage === totalPage}><FaArrowCircleRight/></button>
            </div>
        </div>
    );
};

export default PaginationGetUser; 