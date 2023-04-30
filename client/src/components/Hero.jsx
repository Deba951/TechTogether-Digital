import { Link } from "react-router-dom";

const path1 = require('../assets/cimg1.jpg');
const path3 = require('../assets/cimg3.jpg');

function Hero() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={path1} alt="First slide" />

                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={path3} alt="Second slide" />
                </div>
            </div>

            <Link className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </Link>

            <div className="container hero-content">
                <div className="row justify-content-start">
                    <div className="col-10 col-lg-8">
                        <h1 className="display-3 text-white mb-4" style={{fontWeight: 600}}>Find The Perfect Job That You Deserve</h1>
                        <p className="fs-5 fw-medium mb-4 pb-2" style={{color: 'black', fontWeight: 500}}>Here at JobKamao we are dedicated to bring you diverse and inclusive places to work</p>
                        <a className="btn bstyle py-md-3 px-md-5 me-3" style={{backgroundColor: '#ff4c68'}}>Search A Job</a>
                        <a className="btn btn-outline-light py-md-3 px-md-5">Find A Talent</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;