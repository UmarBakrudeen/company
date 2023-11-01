import React, { Fragment } from 'react'
import './Slider.scss';
import SliderImage from '../../Images/undraw_programming_re_kg9v.png';
import ServiceImage from '../../Images/undraw_services_re_hu5n.png';
import GrowthImage from '../../Images/growth.png';


export const Slider = () => {
    return (
        <Fragment>

            {/* Slider  */}
            <div className="slider__container">
                <div className="slider__content">
                    <div className="slider__wrapper">
                        <div className="left">
                            <h4> EXPERIENCED SOLUTION SERVICE </h4>
                            <h1> We Are Here For <br />IT Solution & Services </h1>
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.  iusto <br /> vitae deleniti perspiciatis nisi qu</p>
                            <button className='btn-contact'> Contact Now </button>
                        </div>
                        <div className="right">
                            <img src={SliderImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="slider__items">
                <div className="slider__menus">
                    <div className="items">
                        <i className='bx bxs-business'></i>
                        <div className="text">
                            <h3> SOFTECH </h3>
                            <p> IT SOLUTIONS </p>
                        </div>
                    </div>
                    <div className="items">
                        <i className='bx bxs-component'></i>
                        <div className="text">
                            <h3> ADSONS </h3>
                            <p> TECHNOLOGY  </p>
                        </div>
                    </div>
                    <div className="items">
                        <i className='bx bx-stats'></i>
                        <div className="text">
                            <h3> RISON </h3>
                            <p> IT SERVICE </p>
                        </div>
                    </div>
                    <div className="items">
                        <i className='bx bx-package'></i>
                        <div className="text">
                            <h3> DATSON </h3>
                            <p> SECURITY  </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About */}
            <div className="slider__container">
                <div className="slider__content">
                    <div className="slider__wrapper">
                        <div className="right">
                            <img src={ServiceImage} alt="Services" style={{ paddingRight: "150px" }} />
                        </div>
                        <div className="left">
                            <h4> ABOUT CODE POINT </h4>
                            <h1> Get Solution And <br /> Services On One Click  </h1>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, dolor qui. Cumque, beatae
                                facilis debitis consectetur sapiente, dolore optio praesentium ut commodi voluptates labore
                                odit dolorem similique veniam. Fugit, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Est, facilis consequatur eos tempore quae neque voluptatum rem temporibus minima assumenda, quisquam ullam
                                error aliquam eum. Earum aliquid laudantium pariatur suscipit! Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Vero asperiores  deleniti cumque natus debitis esse deserunt minus,
                                animi sed? Veniam quia fugiat cumque. Obcaecati minima in asperiores doloribus fugit reprehenderit! </p>
                            <button className='btn-contact'> Contact Now </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offer */}
            <div className="slider__container">
                <div className="slider__content">
                    <div className="slider__service__wrapper">
                        <h3> What We Offer </h3>
                        <h1> Our Featured Services </h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis modi corporis, vitae velit exercitationem quos</p>
                        <div className="cards">
                            <div className="card">
                                <i class='bx bx-server'></i>
                                <h4> Server Maintenance </h4>
                            </div>
                            <div className="card">
                                <i class='bx bxs-data' ></i>
                                <h4> Data Infrastructure </h4>
                            </div>
                            <div className="card">
                                <i class='bx bxl-chrome' ></i>
                                <h4> Web Development </h4>
                            </div>
                            <div className="card">
                                <i class='bx bx-mobile-alt' ></i>
                                <h4> Mobile App Development </h4>
                            </div>
                            <div className="card">
                                <i class='bx bx-desktop' ></i>
                                <h4> Desktop App Development </h4>
                            </div>
                            <div className="card">
                                <i class='bx bx-store-alt' ></i>
                                <h4> Digital Marketing </h4>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            {/* Offer */}

            <div className="achievement__container">
                <div className="achievement__content">
                    <div className="achievement__wrapper ">
                        <h3> What We Achievements </h3>
                        <h1> Our Achievements </h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis modi corporis, vitae velit exercitationem quos</p>
                        <div className="container">
                            <div className="left">
                                <img src={GrowthImage} alt="" />
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <i class='bx bx-server'></i>
                                    <h4> 10+ </h4>
                                    <p>Completed Project </p>
                                </div>
                                <div className="card">
                                    <i class='bx bxs-data' ></i>
                                    <h4> 20+ </h4>
                                    <p> Success Project </p>
                                </div>
                                <div className="card">
                                    <i class='bx bxl-chrome' ></i>
                                    <h4> 50+ </h4>
                                    <p> Solution Given  </p>
                                </div>
                                <div className="card">
                                    <i class='bx bxl-chrome' ></i>
                                    <h4> 20+ </h4>
                                    <p> Happy Clients  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            {/* Offer */}

            <div className="achievement__container">
                <div className="achievement__content">
                    <div className="achievement__wrapper ">
                        <h3> What We Achievements </h3>
                        <h1> Our Achievements </h1>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius veritatis modi corporis, vitae velit exercitationem quos</p>
                        <div className="container">
                            <div className="items">
                                <img src={GrowthImage} alt="" />
                                <h3> Analysis </h3>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore magni </p>
                                <button className='header-btn'> Get A Quote </button>
                            </div>
                            <div className="items">
                                <img src={GrowthImage} alt="" />
                                <h3> Identity </h3>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore magni </p>
                                <button className='header-btn'> Get A Quote </button>
                            </div>
                            <div className="items">
                                <img src={GrowthImage} alt="" />
                                <h3> Development </h3>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore magni </p>
                                <button className='header-btn'> Get A Quote </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >

            {/* About */}
            <div className="slider__container">
                <div className="slider__content">
                    <div className="slider__wrapper">
                        <div className="right">
                            <img src={ServiceImage} alt="Services" style={{ paddingRight: "150px" }} />
                        </div>
                        <div className="left">
                            <h4> OUR PROJECTS </h4>
                            <h1> Our Latest Case Studies  </h1>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, dolor qui. Cumque, beatae
                                facilis debitis consectetur sapiente, dolore optio praesentium ut commodi voluptates labore
                                odit dolorem similique veniam. Fugit, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Est, facilis consequatur eos tempore quae neque voluptatum rem temporibus minima assumenda, quisquam ullam
                                error aliquam eum. Earum aliquid laudantium pariatur suscipit! Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Vero asperiores  deleniti cumque natus debitis esse deserunt minus,
                                animi sed? Veniam quia fugiat cumque. Obcaecati minima in asperiores doloribus fugit reprehenderit! </p>
                            <button className='btn-contact'> Contact Now </button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment >
    )
}
