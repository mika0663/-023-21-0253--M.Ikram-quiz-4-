import React from 'react'
import c1 from "../assets/images/Crous_logo1.png";
import c2 from "../assets/images/Crous_logo2.png";
import c3 from "../assets/images/Crous_logo3.png";
import c4 from "../assets/images/Crous_logo4.png";
import c5 from "../assets/images/Crous_logo5.png";
import c6 from "../assets/images/Crous_logo6.png";
import c7 from "../assets/images/Crous_logo7.png";

const Crousal = () => {    
    return (
        <>
            <div className="container">
                <div className='crousal_logo text-center' style={{paddingTop: '3rem'}}>
                 <img className='px-2' src={c1} alt="" />
                 <img className='px-2' src={c2} alt="" />
                <img className='px-2' src={c3} alt="" />
                <img className='px-2' src={c4} alt="" />
                <img className='px-2' src={c5} alt="" />
                <img className='px-2' src={c6} alt="" />
                <img className='px-2' src={c7} alt="" />
                </div>
                <div className="crousal_text text-center">
                    <h1 ><b>Generate,imporove, and edit <br />content everywhere you write</b></h1>
                    <p style={{fontSize: '1.2rem'}}><b>Writer works everywhere you produce content, copy, and communications</b></p>
                </div>
            </div >
        </>
    )
}
export default Crousal
