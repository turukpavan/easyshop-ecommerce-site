import React, { useEffect, useState } from 'react';
import { products } from '../../api/AllProductsAPI';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
    const [inputData,setInputData]=useState('');
    const [dropDown,setDropDown]=useState(false);
    const [filteredData,setFilterData]=useState([]);
    const navigate=useNavigate();

    const handleInput=(e)=>{
        setInputData(e.target.value);
    }
    
  useEffect(()=>{
    if(inputData.length>0){
        setDropDown(true)
        const data = products.filter((item) =>
            item.name.toLowerCase().includes(inputData.toLowerCase())
          );
          setFilterData(data)
        }else{
            setFilterData([])
            setDropDown(false)
        }


  },[inputData])
    

    return (
        <>
            <div className="inputWrapper  ">
                <input type="text" className="border-0" placeholder="Search for products..." value={inputData} onChange={handleInput} onBlur={(e) => {if (!e.relatedTarget || !e.relatedTarget.classList.contains('dropdown-button')) { setDropDown(false); }}}/>
                <i className="ri-search-line"></i>
                <div className={`productDropDown position-absolute top-100 w-100 start-0 border shadow bg-white z-1 h-400 px-0 overflow-y-hidden ${dropDown ? "d-block" :"d-none"}`}>
                        <ul className='p-0 '>{ filteredData.length===0 ? <Button className='text-black text-decoration-none text-capitalize w-90 d-inline-block'>No data found</Button>:
                            filteredData.map((item)=><Button className='dropdown-button w-100  text-black text-decoration-none text-capitalize w-90 d-inline-block text-start mx-0' onClick={()=>navigate(`/productDetails/${item.id}`)}>{item.name}</Button>)   
                            }                         
                        </ul>
                </div>

            </div>
        </>
    )
}

export default SearchBox;