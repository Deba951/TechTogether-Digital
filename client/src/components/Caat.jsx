import { Link } from "react-router-dom"

export default function Cat() {

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    }
    return (
        <div class="container-xxl py-5 category">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-mail-bulk mb-4 ic"></i>
                            <h6 class="mb-3" style={linkStyle}>Marketing</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-headset ic mb-4"></i>
                            <h6 class="mb-3" style={linkStyle}>Customer Service</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-user-tie ic mb-4"></i>
                            <h6 class="mb-3" style={linkStyle}>Human Resource</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-tasks ic mb-4"></i>
                            <h6 class="mb-3" style={linkStyle}>Project Management</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-chart-line ic mb-4"></i>
                            <h6 class="mb-3" style={linkStyle}>Business Development</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-hands-helping ic mb-4"></i>
                            <h6 class="mb-3" style={linkStyle}>Sales & Communication</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-book-reader ic mb-4"></i>
                            <h6 class="mb-3" style={linkStyle}>Teaching & Education</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-drafting-compass ic mb-4"></i>
                            <h6 class="mb-3" style={linkStyle}>Design & Creative</h6>
                            <p class="mb-0 text-black-50">123 Vacancy</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}