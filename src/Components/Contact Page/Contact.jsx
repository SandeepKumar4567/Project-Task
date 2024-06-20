function Contact() {
    return (
        <>
            <footer
                style={{ backgroundColor: "#282828", color: "white", fontSize: 13 }}
                id="contact"
                className="m-0 mt-5"
            >
                <div className="container py-3">
                    <div className="row py-5">
                        <div className="col-md-4 col-lg-3">
                            <h5 className="mb-3">Contact Us</h5>
                            <p className="mb-0">
                                INDUSTRIAL DESIGN &amp; ANIMATION
                                <br />
                                Karunaa Conclave,
                                <br />
                                No.1963, J Block, 3rd Street, 5th Main Road,
                                <br />
                                Anna Nagar West, Anna Nagar, Chennai,
                                <br />
                                Tamil Nadu - 600040, INDIA
                            </p>
                            <p className="mt-3">
                                E mail: <br />
                                info@idacreations.com
                            </p>
                        </div>
                        <div className="col-md-2">
                            <nav className="nav-footer">
                                <ul className="list-unstyled mb-0">
                                    <li className="socialmedialist">
                                        <h2>
                                            <a href="">
                                                <i className="fa-brands fa-facebook" />
                                            </a>
                                        </h2>
                                        <h2>
                                            <a href="">
                                                <i className="fa-brands fa-instagram" />
                                            </a>
                                        </h2>
                                        <h2>
                                            <a href="">
                                                <i className="fa-brands fa-x-twitter" />
                                            </a>
                                        </h2>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2">
                            <h5 className="mb-3">Locate us on Map</h5>
                            <nav className="nav-footer">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173061785!2d76.88483257251707!3d11.014126297388282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1718780760701!5m2!1sen!2sin"
                                            width={300}
                                            height={300}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-5">
                            <h5 className="mb-3" />
                            <nav className="nav-footer">
                                <ul className="lastlist list-unstyled mb-0">
                                    <li>
                                        <h1>
                                            <img src="./image/email.webp" alt="" height="55px" width="55px" />
                                        </h1>
                                        <p>Send Enquiry</p>
                                    </li>
                                    <li>
                                        <h1>
                                            <img src="./image/Instagram.webp" alt="" height="55px" width="55px" />
                                        </h1>
                                        <p>Insta Profile</p>
                                    </li>
                                    <li>
                                        <h1>
                                            <img
                                                src="./image/whats-removebg-preview.png"
                                                alt=""
                                                height="80px"
                                                width="80px"
                                            />
                                        </h1>
                                        <p>Insta Profile</p>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright pb-0">
                    <div className="container">
                        <div className="row ">
                            <div className="col text-center py-4">
                                <p>© Copyright 2024. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Contact;