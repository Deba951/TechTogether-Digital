import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <Link href="index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 className="m-0 ic">JobKamao</h1>
            </Link>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link href="index.html" className="nav-item nav-link active">Home</Link>
                    <Link href="about.html" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link href="job-list.html" className="dropdown-item">Job List</Link>
                            <Link href="job-detail.html" className="dropdown-item">Job Detail</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link href="category.html" className="dropdown-item">Job Category</Link>
                            <Link href="testimonial.html" className="dropdown-item">Testimonial</Link>
                            <Link href="404.html" className="dropdown-item">404</Link>
                        </div>
                    </div>
                    <Link href="contact.html" className="nav-item nav-link">Contact</Link>
                </div>
                <Link href="" className="btn btc  rounded-0 py-4 px-lg-5 d-none d-lg-block">Post Link Job<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </nav>
    )
}