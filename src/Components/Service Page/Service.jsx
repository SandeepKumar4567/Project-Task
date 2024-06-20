function Service() {
    return (
        <>
            <main className="serviceMain mt-5 col-12" id="services" >
                <section className="section1">
                    <h1 className="mt-3">Our Services</h1>
                    <p>Reinvent your industry with our industrial solutions</p>
                    <div className="listItems">
                        <span className="listItem1">
                            <span className="icon1">
                                <i className="fa-solid fa-gamepad" />
                            </span>
                            <span>
                                <p className="list1 mt-4">Game Development</p>
                            </span>
                        </span>
                        <span className="listItem2">
                            <span className="icon1">
                                <i className="fa-solid fa-head-side-virus" />
                            </span>
                            <span>
                                <p className="list1 mt-4">Generatives AI</p>
                            </span>
                        </span>
                        <span className="listItem3">
                            <span className="icon1">
                                <i className="fa-brands fa-unity" />
                            </span>
                            <span>
                                <p className="list1 mt-4">3D Modeling/Rendering</p>
                            </span>
                        </span>
                        <span className="listItem4">
                            <span className="icon1">
                                <i className="fa-solid fa-mask" />
                            </span>
                            <span>
                                <p className="list1 mt-4">2D/3D Animation</p>
                            </span>
                        </span>
                        <span className="listItem5">
                            <span className="icon1">
                                <i className="fa-solid fa-laptop-code" />
                            </span>
                            <span>
                                <p className="list1 mt-4">Motion Graphics</p>
                            </span>
                        </span>
                        <span className="listItem6">
                            <span className="icon1">
                                <i className="fa-solid fa-photo-film" />
                            </span>
                            <span>
                                <p className="list1 mt-4">VFX</p>
                            </span>
                        </span>
                        <span className="listItem7">
                            <span className="icon1">
                                <i className="fa-solid fa-vr-cardboard" />
                            </span>
                            <span>
                                <p className="list1 mt-4">AR/VR/MR/XR</p>
                            </span>
                        </span>
                        <span className="listItem8">
                            <span className="icon1">
                                <i className="fa-solid fa-tv" />
                            </span>
                            <span>
                                <p className="list1 mt-4">Virtual Production</p>
                            </span>
                        </span>
                        <span className="listItem9">
                            <span className="icon1">
                                <i className="fa-solid fa-desktop" />
                            </span>
                            <span>
                                <p className="list1 mt-4">CG</p>
                            </span>
                        </span>
                        <span className="listItem10">
                            <span className="icon1">
                                <i className="fa-solid fa-palette" />
                            </span>
                            <span>
                                <p className="list1 mt-4">UI/UX</p>
                            </span>
                        </span>
                        <span className="listItem11">
                            <span className="icon1">
                                <i className="fa-solid fa-user-group" />
                            </span>
                            <span>
                                <p className="list1 mt-4">Academic Alliances</p>
                            </span>
                        </span>
                        <span className="listItem12">
                            <span className="icon1">
                                <i className="fa-solid fa-video" />
                            </span>
                            <span>
                                <p className="list1 mt-4">Video Editing</p>
                            </span>
                        </span>
                    </div>
                </section>
                <section className="section2 d-flex flex-column text-center mt-5">
                    <h1 className="mt-4">Our Working Process</h1>
                    <p className="mt-4">
                        A well-structured workflow with great design execution
                    </p>
                    <div className="cardlist row mt-5" style={{ width: "100%" }}>
                        <div className="cardlist1 card col-lg-4" style={{ width: "13rem" }}>
                            <img
                                className="card-img-top mt-4"
                                src="./image/one-on-one-meeting.webp"
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Discusion</h5>
                                <p className="card-text text-black">
                                    Under the client's business,goals and challenges for building
                                    relationship.
                                </p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                        <div className="cardlist1 card col-lg-4" style={{ width: "13rem" }}>
                            <img
                                className="card-img-top mt-4"
                                src="./image/group-disscusion.webp"
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Ideate</h5>
                                <p className="card-text text-black">
                                    Gather ideas and create the first concept for the future product.
                                </p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                        <div className="cardlist1 card col-lg-4" style={{ width: "13rem" }}>
                            <img
                                className="card-img-top mt-4"
                                src="./image/execution.avif"
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">Execution</h5>
                                <p className="card-text text-black">
                                    Provide the first draft of a project,accept minor and major
                                    revisions.
                                </p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section3 mt-5">
                    <div className="ourproject">
                        <h1 className="mt-4">Our Projects</h1>
                        <p className="mt-4">Have a sneak peak at the Arts we Crafted</p>
                    </div>
                    <section className="section-3-1">
                        <div className="projects mt-5">
                            <img src="./image/project1.jpg" alt="" height="150px" width="250px" />
                            <h5 className="mt-3">Shadow Fight 2</h5>
                            <p>Mobile RPG game</p>
                            <button className="learn">Learn More</button>
                        </div>
                        <div className="projects mt-5">
                            <img src="./image/project2.jpeg" alt="" height="150px" width="250px" />
                            <h5 className="mt-3">Mini Militia</h5>
                            <p>Mobile online game</p>
                            <button className="learn">Learn More</button>
                        </div>
                        <div className="projects mt-5">
                            <img src="./image/project3.jpg" alt="" height="150px" width="250px" />
                            <h5 className="mt-3">Roblox</h5>
                            <p>Mobile online game</p>
                            <button className="learn">Learn More</button>
                        </div>
                    </section>
                </section>
            </main>

        </>
    );
}

export default Service;