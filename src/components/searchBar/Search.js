import React, { useState } from 'react';
import { Input, Select, Space } from 'antd';
import './style.css'; // Make sure to import Antd styles

const { Search } = Input;
const { Option } = Select;

const SearchBar = ({ onSearch }) => {
    const [category, setCategory] = useState('all');

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const handleSearch = (value) => {
        onSearch(value, category);
    };

    return (
        <Space >
            <div classNames="SearchBar">
                <Select size="middle" defaultValue="all" onChange={handleCategoryChange} style={{ width: 150 }}>
                    <Option value="all">All Categories</Option>
                    <Option value="category1">Category 1</Option>
                    <Option value="category2">Category 2</Option>
                    <Option value="category3">Category 3</Option>
                </Select>
                <Search
                    placeholder="Search..."
                    enterButton="Search"
                    size="middle"
                    onSearch={handleSearch}
                    style={{ width: 300 }}
                /></div>
        </Space>
    );
};

export default SearchBar;
