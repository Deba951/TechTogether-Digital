export default function About() {

    const path1 = require('../assets/aboutff.jpg')
    const path2 = require('../assets/about-2-new.jpeg')
    const path3 = require('../assets/about-3-new.jpg')
    const path4 = require('../assets/about-5-new.jpg')

    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="row g-0 about-bg rounded overflow-hidden">
                            <div class="col-6 text-start">
                                <img class="img-fluid w-100" src={path1} />
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid" src={path2} style={{width: '85%', marginTop: '15%'}} />
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid" src={path3} style={{width: '85%'}} />
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid w-100" src={path4} />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="mb-4">About our Vision</h1>
                        <p class="mb-4">Our mission is to make workspaces more gender inclusive by addressing gender biases. We strive to ensure that there are no barriers to success or advancement for employees of any gender, and create a culture of respect and inclusivity. By promoting gender inclusivity in the workplace, organizations can attract and retain a diverse talent pool, improve productivity and innovation, and foster a positive and supportive work environment for all employees.</p>
                        <p><i class="fa fa-check ic me-3"></i>Connect people of marginalized gender with employers</p>
                        <p><i class="fa fa-check ic me-3"></i>Make workspaces more inclusive</p>
                        <p><i class="fa fa-check ic me-3"></i>Provide a safe space for everyone</p>
                        <button class="btn bstyle py-3 px-5 mt-3" href="">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}