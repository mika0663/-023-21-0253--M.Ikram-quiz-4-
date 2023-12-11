import React from 'react'
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import img_logo from "../assets/images/img_logo.png";
import './styles.css'; 
const Publication1 = () => {
    return (
        <>
            <div className="container my-5 pub_text">
                <h1 className='text-center my-5'>People who has published their books using writealy</h1>
                <div className="row">
                    <div className="col col-sm-6 col-md-4 col-lg-4 whiteBackground">
                        <div className="row bg-white whiteBackground">
                            <div className="col whiteBackground">
                                <img className='pub_brand my-5 mx-4  whiteBackground' src={img_logo} alt="Brand" />
                            </div>
                            <div className="col whiteBackground">
                                <img className=' pub_people whiteBackground' src={p1} alt="Naive" />
                            </div>
                        </div>
                        <h1 className='mx-4  whiteBackground' style={{ fontSize: '4rem' }}>2x</h1>
                        <h3 className='mx-4  whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                        <p className='mx-4  whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                        <p className='mx-4  whiteBackground'> <b>Ty Manager</b> <br /> VP of Marketing</p>
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-4 whiteBackground col2">
                        <div className="row whiteBackground">
                            <div className="col whiteBackground">
                                <img className='pub_brand my-5 mx-4 whiteBackground' src={img_logo} alt="Brand" />
                            </div>
                            <div className="col whiteBackground">
                                <img className='pub_people whiteBackground' src={p2} alt="Naive" />
                            </div>
                        </div>
                        <h1 className='mx-4 whiteBackground' style={{ fontSize: '4rem' }}>18x</h1>
                        <h3 className='mx-4 whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                        <p className='mx-4 whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                        <p className='mx-4 whiteBackground'> <b>Ty Manager</b> <br /> VP of Marketing</p>
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-4 whiteBackground col2">
                        <div className="row whiteBackground">
                            <div className="col whiteBackground">
                                <img className='pub_brand my-5 mx-2 whiteBackground' src={img_logo} alt="Brand" />
                            </div>
                            <div className="col whiteBackground">
                                <img className='pub_people whiteBackground' src={p4} alt="Naive" />
                            </div>
                        </div>
                        <h1 className='mx-4 whiteBackground' style={{ fontSize: '4rem' }}>5x</h1>
                        <h3 className='mx-4 whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                        <p className='mx-4 whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                        <p className='mx-4 whiteBackground'> <b>Ty Manager</b> <br /> VP of Marketing</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Publication1
