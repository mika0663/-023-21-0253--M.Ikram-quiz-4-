import React from 'react'
import Card from 'react-bootstrap/Card';
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import img_logo from "../assets/images/img_logo.png";
const Reviews = () => {
    return (
        <>
        <div className="container my-5">
            <h1 className='text-center my-5'>People who has published their books using writealy</h1>
            <div className="container my-5 pub_text">
                <div className="row" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div className="col col-sm-6 col-md-4 col-lg-3">
                        <Card style={{ width: '21.4rem' }} className='whiteBackground bg-white review'>
                            <div className="review row bg-white whiteBackground">
                                <div className="col whiteBackground image_brand">
                                    <img className='pub_brand my-5 mx-4  whiteBackground' src={img_logo} alt="Brand" />
                                    <div className="col whiteBackground text-end image_people">
                                        <img className=' pub_people whiteBackground' src={p1} alt="Naive" />
                                    </div>
                                </div>
                                <div className="card_text bg-white">
                                    <h1 className='mx-4  whiteBackground' style={{ fontSize: '4rem' }}>2x</h1>
                                    <h3 className='mx-4  whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                                    <p className='mx-4  whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                                    <p className='mx-4  whiteBackground'> <b className='bg-white'>Ty Manager</b> <br /> VP of Marketing</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-3 sec">
                        <Card style={{ width: '21.4rem' }} className='whiteBackground bg-white review'>
                            <div className="review row bg-white whiteBackground">
                                <div className="col whiteBackground image_brand">
                                    <img className='pub_brand my-5 mx-4 whiteBackground' src={img_logo} alt="Brand" />
                                    <div className="col whiteBackground text-end image_people">
                                        <img className='pub_people whiteBackground' src={p2} alt="Naive" />
                                    </div>
                                </div>
                                <div className="card_text bg-white">
                                <h1 className='mx-4 whiteBackground' style={{ fontSize: '4rem' }}>5x</h1>
                        <h3 className='mx-4 whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                        <p className='mx-4 whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                        <p className='mx-4 whiteBackground'> <b className='bg-white'>Ty Manager</b> <br /> VP of Marketing</p>
                     </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-3 sec">
                        <Card style={{ width: '21.4rem' }} className='whiteBackground bg-white review'>
                            <div className="review row bg-white whiteBackground">
                                <div className="col whiteBackground image_brand">
                                    <img className='pub_brand my-5 mx-4  whiteBackground' src={img_logo} alt="Brand" />
                                    <div className="col whiteBackground text-end image_people">
                                        <img className=' pub_people whiteBackground' src={p3} alt="Naive" />
                                    </div>
                                </div>
                                <div className="card_text bg-white">
                                    <h1 className='mx-4  whiteBackground' style={{ fontSize: '4rem' }}>2x</h1>
                                    <h3 className='mx-4  whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                                    <p className='mx-4  whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                                    <p className='mx-4  whiteBackground'> <b className='bg-white'>Ty Manager</b> <br /> VP of Marketing</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
<div className="row my-4" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div className="col col-sm-6 col-md-4 col-lg-3">
                        <Card style={{ width: '21.4rem' }} className='whiteBackground bg-white review'>
                            <div className="review row bg-white whiteBackground">
                                <div className="col whiteBackground image_brand">
                                    <img className='pub_brand my-5 mx-4  whiteBackground' src={img_logo} alt="Brand" />
                                    <div className="col whiteBackground text-end image_people">
                                        <img className=' pub_people whiteBackground' src={p4} alt="Naive" />
                                    </div>
                                </div>
                                <div className="card_text bg-white">
                                    <h1 className='mx-4  whiteBackground' style={{ fontSize: '4rem' }}>35x</h1>
                                    <h3 className='mx-4  whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                                    <p className='mx-4  whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                                    <p className='mx-4  whiteBackground'> <b className='bg-white'>Ty Manager</b> <br /> VP of Marketing</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-3 sec">
                        <Card style={{ width: '21.4rem' }} className='whiteBackground bg-white review'>
                            <div className="review row bg-white whiteBackground">
                                <div className="col whiteBackground image_brand">
                                    <img className='pub_brand my-5 mx-4 whiteBackground' src={img_logo} alt="Brand" />
                                    <div className="col whiteBackground text-end image_people">
                                        <img className='pub_people whiteBackground' src={p5} alt="Naive" />
                                    </div>
                                </div>
                                <div className="card_text bg-white">
                                <h1 className='mx-4 whiteBackground' style={{ fontSize: '4rem' }}>23x</h1>
                        <h3 className='mx-4 whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                        <p className='mx-4 whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                        <p className='mx-4 whiteBackground'> <b className='bg-white'> Ty Manager</b> <br /> VP of Marketing</p>
                     </div>
                            </div>
                           </Card>
                    </div>
                    <div className="col col-sm-6 col-md-4 col-lg-3 sec">
                        <Card style={{ width: '21.4rem' }} className='whiteBackground bg-white review'>
                            <div className="review row bg-white whiteBackground">
                                <div className="col whiteBackground image_brand">
                                    <img className='pub_brand my-5 mx-4  whiteBackground' src={img_logo} alt="Brand" />
                                    <div className="col whiteBackground text-end image_people">
                                        <img className=' pub_people whiteBackground' src={p6} alt="Naive" />
                                    </div>
                                </div>
                                <div className="card_text bg-white">
                                    <h1 className='mx-4  whiteBackground' style={{ fontSize: '4rem' }}>18x</h1>
                                    <h3 className='mx-4  whiteBackground'>Increase in search <br /> traffic in 4 weeks</h3>
                                    <p className='mx-4  whiteBackground'>“No other competitors were able to mimic our voice and tone like Writer. With it, we increased our publication cadence dramatically.”</p>
                                    <p className='mx-4  whiteBackground'> <b className='bg-white'>Ty Manager</b> <br /> VP of Marketing</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Reviews
