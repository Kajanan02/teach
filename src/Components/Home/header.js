import React from 'react';
import Search from "../../assets/search.svg"
import CardImg from "../../assets/banner-card.jpg"

function Header(props) {
    return (
        <div className={"home-header"}>
            <div className={"elementor-background-overlay"}></div>
            <div className={"container position-relative h-100"}>

                <div className={"row h-100"}>
                    <div className={"col-md-6 py-5 my-5 d-flex justify-content-center align-items-center"}>

                        <div className={""}>
                            <div className={"header-text"}>Search compare & find with <span
                                className={"primary-color"}>TeachMe</span></div>
                            <div className={"position-relative"}>
                                <input placeholder={"I want to learn..."} className={"header-text-input"}/>
                                <img src={Search} alt={"search"} className={"header-text-input-icon cursor-pointer"}/>
                            </div>
                            <p className={"text-white fs-5 mt-4"}>Uncover, evaluate, and secure your ideal course with
                                TeachMe.lk – where your learning adventure awaits in just one click.</p>

                        </div>
                    </div>
                    <div className={"col-md-6 d-flex justify-content-end align-items-center"}>

                        <div className="banner-card">
                            <img className="card-img-top" src={CardImg} alt={"Card cap"}/>
                            <div className="card-body">
                                <h5 className="card-title my-4 ">Basic Digital Marketing</h5>
                                <p className="card-text text-body-tertiary fs-6">Whether you want to start your career
                                    by looking for professional courses, you have come to the right place. Search and
                                    compare courses today!</p>
                            </div>
                            <div className={"card-circle"}>
                                Featured
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;