import Contact from "../Contact Page/Contact";
import About from "../About Page/About";
import Service from "../Service Page/Service";

function Home() {
    function toggleNavbar() {
        var navbar = document.getElementById("myNavbar");
        if (navbar.className === "navbar") {
            navbar.className += " responsive";
        } else {
            navbar.className = "navbar";
        }
    }
    return (
        <>
            <header className="col-12" >
                <span className="logo1">
                    <img src="./image/logo1-edited.png" alt="" />
                </span>
                <div className="navbar" id="myNavbar">
                    <a className="home mt-2 col-sm-1 col-md-1" href="#home">
                        Home
                    </a>
                    <a className="services mt-2 col-sm-1 col-md-1" href="#about">
                        About
                    </a>
                    <a className="about mt-2 col-sm-1 col-md-1" href="#services">
                        Services
                    </a>
                    <a className="contact mt-2 col-sm-1 col-md-1" href="#contact">
                        Contact
                    </a>
                    <a href="javascript:void(0);" className="icon" onClick={toggleNavbar}>
                        ☰
                    </a>
                    <div className="socialMedia mt-5 d-none col-12">
                        <a href="">
                            <i className="fa-brands fa-instagram" />
                        </a>
                        <a href="">
                            <i className="fa-brands fa-x-twitter" />
                        </a>
                        <a href="">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="">
                            <i className="fa-brands fa-linkedin" />
                        </a>
                    </div>
                </div>
            </header>
            <main id="home">
                <section className="backgroundsection">
                    <span className="background">
                        <p>
                            Bringing <br /> Ideas To Our <br /> Reality
                        </p>
                        <img src="./image/Home Background.png" alt="" className="img-fluid" />
                    </span>
                </section>
            </main>
            <About />
            <Service />
            <Contact />
        </>

    );
}

export default Home;