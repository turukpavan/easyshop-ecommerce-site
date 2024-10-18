import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const CountriesDropDown = (props) => {
    const [dropDown, setDropDown] = useState(false);
    const [showData, setShowData] = useState('');
    const [inputData,setInputData] = useState('');

    const { data } = props;
    const handleDropDown = () => {
        setDropDown(!dropDown)

    }

    const handleSelectedItem = (country, index) => {
        setShowData(filteredCountries[index])
        
    }
    const closeDropDown=()=>{
        setDropDown(!dropDown)

    }

    const handleInput=(e)=>{
        setInputData(e.target.value)
    }

    const filteredCountries = data.filter((country) =>
        country.toLowerCase().includes(inputData.toLowerCase())
      );
    
    return (
        <>  <div className="position-relative locationWrapper d-lg-flex">
            <button className="countries" onClick={handleDropDown}>
                <p className="yourLocation">Your Location</p>
                <p className="selectLocation">{showData !== '' ? showData.length>10 ? `${showData.substring(0,10)}...`:showData : 'Select Location'}</p>
                <i className="ri-arrow-down-s-line arrow"></i>

            </button>
                {/* {dropDown === true && <div className="countriesDropDown">
                    <form action=""
                    ><input type="text" value={inputData} onChange={handleInput} /></form>
                    <ul className=" list-unstyled">
                        {filteredCountries.map((country, index) => <li onClick={() => handleSelectedItem(country, index)}>{country}</li>)}
                    </ul>
                </div>} */}
        </div>

         <Dialog className="locationModel" open={dropDown} onClose={closeDropDown} TransitionComponent={Transition} >
            <Button className="close_"onClick={()=>closeDropDown()} >
            <CloseIcon />
            </Button>
            <h4>Choose your Delivery Location</h4>
            <p>Enter your address and will specify the offer for your area</p>
            <div className="inputWrapper w-100 ">
                <div className=" position-relative">
                <input type="text" className="border-0 height-1"  placeholder="Search for countries..." value={inputData} onChange={handleInput} />
                <i className="ri-search-line"></i>
                </div>
               <div className=" dropdownList" >
               <ul className=" list-unstyled py-2">
                        {filteredCountries.map((country, index) => <Button className=" d-block w-100 text-black text-start text-capitalize "
                        onClick={() =>{ handleSelectedItem(country, index);closeDropDown()}}>{country}</Button>)}
                        
                    </ul>
               </div>
            </div> 
    </Dialog>
      

        </>
    )
}

export default CountriesDropDown