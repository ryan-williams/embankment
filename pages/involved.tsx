import { Page } from "../src/pages"

export default function Body() {
    return (
        <Page
            path="involved"
            headerChildren={
                <section className="section parallax-container bg-black" data-parallax-img="images/INVOLVED-BANNER2.jpg">
                <div className="parallax-content context-dark">
                    <div className="container">
                    <div className="row align-items-sm-center justify-content-sm-center section-cover section-98 section-sm-110 text-lg-left context-dark">
                        <div className="col-sm-12">
                        <div className="offset-top-4 offset-xl-top-0">
                            <h1 className="text-capitalize"><span className="big">GET INVOLVED</span></h1>
                        </div>
                        <div>
                            <h2 className="font-default font-italic text-regular">Join the community effort to realize our vision for the Harsimus Branch.</h2>
                        </div>
                        <div className="group group-xl offset-top-30"><a className="btn btn-primary btn-lg btn-anis-effect" href="#involved-section-member">Become a Member!</a>
                            <a className="btn btn-default btn-lg btn-anis-effect" data-caption-animate="fadeInUp" data-caption-delay="1200" href="#involved-section-donate"><span className="btn-text">Donate</span></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            }
        >
            {/* Become a Membership Options */}
            <section id="involved-section-member" className="section novi-background section-98 section-sm-110">
                <div className="container">
                <div>
                    <h1> Become a Member!</h1>
                </div>
                <div className="divider bg-mantis"></div>
                <div>
                    <p>Members are the bedrock of the Coalition. Please join us today. </p>
                </div>
                <div>
                    <p></p>
                    <p>Select a membership level below or if you prefer to mail your membership paperwork <a href="images/membership2019.pdf" target="_blank"><span className="font-weight-bold">Click Here</span></a>.</p>
                </div>
                <div className="row">

                    {/* Membership Options  */}
                    <div className="col-xl-12 offset-top-34">
                    <div className="isotope" data-isotope-layout="fitRows" data-isotope-group="gallery">
                        <div className="row grid-group-sm" data-lightgallery="group">

                            {/* STUDENT / SENIOR  */}
                            <div className="col-12 col-md-6 isotope-item" data-filter="Gallery 1">
                                {/* Product Image */}
                                <div className="product-image">
                                    <img className="img-fluid product-image-area" src="images/bees2.jpg" alt="Image of a bee pollinating a flower" />
                                </div>
                                <div className="product-block-hover">
                                    {/* Product Add To cart */}
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="TD673N8N5Q4HA" />
                                        <input type="image" src="http://www.embankment.org/embankment/images/selectmembership.jpg" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                        <img alt="PayPal tracking pixel" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                            </div>

                            {/* INDIVIDUAL  */}
                            <div className="col-12 col-md-6 isotope-item" data-filter="Gallery 1">
                                {/* Product Image */}
                                <div className="product-image">
                                    <img className="img-fluid product-image-area" src="images/individual2.jpg" alt="Dragonfly and flowers" />
                                </div>
                                <div className="product-block-hover">
                                    {/* Product Add To cart */}
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="RYLN4DQ2N5HAS" />
                                        <input type="image" src="http://www.embankment.org/embankment/images/selectmembership.jpg" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                        <img alt="PayPal tracking pixel" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                            </div>

                            {/* FAMILY  */}
                            <div className="col-12 col-md-6 isotope-item" data-filter="Gallery 1">
                                {/* Product Image */}
                                <div className="product-image">
                                    <img className="img-fluid product-image-area" src="images/family2.jpg" alt="Some butterflies" />
                                </div>
                                <div className="product-block-hover">
                                    {/* Product Add To cart */}
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="7492YV58QXSZW" />
                                        <input type="image" src="http://www.embankment.org/embankment/images/selectmembership.jpg" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                        <img alt="PayPal tracking pixel" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                            </div>

                            {/* FRIEND  */}
                            <div className="col-12 col-md-6 isotope-item" data-filter="Gallery 1">
                                {/* Product Image */}
                                <div className="product-image">
                                    <img className="img-fluid product-image-area" src="images/friend2.jpg" alt="A bird" />
                                </div>
                                <div className="product-block-hover">
                                    {/* Product Add To cart */}
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="GSJLC7A9PVUF4" />
                                        <input type="image" src="http://www.embankment.org/embankment/images/selectmembership.jpg" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                        <img alt="PayPal tracking pixel" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                            </div>

                            {/* BENEFACTOR  */}
                            <div className="col-12 col-md-6 isotope-item" data-filter="Gallery 1">
                                {/* Product Image */}
                                <div className="product-image">
                                <img className="img-fluid product-image-area" src="images/benefactor2.jpg" alt="An owl" />
                                </div>
                                <div className="product-block-hover">
                                    {/* Product Add To cart */}
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="YZ5XMHDA75V2L" />
                                        <input type="image" src="http://www.embankment.org/embankment/images/selectmembership.jpg" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                        <img alt="PayPal tracking pixel" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                            </div>

                            {/* LIFE  */}
                            <div className="col-12 col-md-6 isotope-item" data-filter="Gallery 1">
                                {/* Product Image */}
                                <div className="product-image">
                                <img className="img-fluid product-image-area" src="images/life2.jpg" alt="Some flowers" />
                                </div>
                                <div className="product-block-hover">
                                    {/* Product Add To cart */}
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick" />
                                        <input type="hidden" name="hosted_button_id" value="HW6BR6ER4RXTA" />
                                        <input type="image" src="http://embankment.org/embankment/images/selectmembership.jpg" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                        <img alt="PayPal tracking pixel" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Support  */}
            <section id="involved-section-volunteer" className="section parallax-container" data-parallax-img="images/INVOLVED_VOLUNTEER.jpg">
                <div className="parallax-content section-98 section-sm-124 bg-overlay-white">
                <div className="container">
                    <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <h1>Volunteer</h1>
                        <hr className="divider bg-mantis" />
                        <ul className="list-inline list-inline-dashed p">
                        <li className="list-inline-item">

                            <p>The Embankment Preservation Coalition operates with an all-volunteer board and volunteers from the community.</p>

                            <p>Volunteers staff our outreach table at local fairs and festivals; organize events; distribute information to the neighborhoods; consult on historic preservation and the environment; lend their professional expertise
                            for architectural renderings, web site design, art, and photography; and help us forge alliances with supportive local and regional organizations.</p>

                            <p>We can put people with all sorts of background and skills to work, for as little as an hour or for a long-term commitment. Volunteer! <span className="font-weight-bold bold"> Volunteer!</span> </p>

                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Section Get In Touch */}
            <section className="section novi-background section-98 section-sm-110">
                <div className="container">
                <h2 className="font-weight-bold">Sign Up Here</h2>
                <hr className="divider bg-mantis" />
                <div className="offset-md-top-66">
                    <div className="row justify-content-sm-center">
                    <div className="col-sm-10 col-lg-8">
                        {/* RD Mailform */}
                        <form className="rd-mailform text-left" data-form-output="form-output-global" data-form-type="contact" method="post" action="api/email-signup">
                        <div className="row justify-content-sm-center">
                            <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label" htmlFor="git-3-mailform-first-name">First name</label>
                                <input className="form-control bg-default" id="git-3-mailform-first-name" type="text" name="firstname" data-constraints="@Required" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group">
                                <label className="form-label" htmlFor="git-3-mailform-last-name">Last name</label>
                                <input className="form-control bg-default" id="git-3-mailform-last-name" type="text" name="lastname" data-constraints="@Required" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group offset-md-top-30">
                                <label className="form-label" htmlFor="git-3-mailform-phone">Phone</label>
                                <input className="form-control bg-default" id="git-3-mailform-phone" type="text" name="phone" data-constraints="@Required" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group offset-md-top-30">
                                <label className="form-label" htmlFor="git-3-mailform-email">E-mail</label>
                                <input className="form-control bg-default" id="git-3-mailform-email" type="text" name="email" data-constraints="@Required @Email" />
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group offset-md-top-30">
                                <label className="form-label" htmlFor="git-3-mailform-message">Background</label>
                                <textarea className="form-control bg-default" id="git-3-mailform-message" name="message" data-constraints="@Required"></textarea>
                            </div>
                            </div>
                        </div>
                        <div className="offset-top-24 text-center">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Section Donate  */}
            <section id="involved-section-donate" className="section novi-background section-50 section-top-124 section-bottom-110">
                <div className="container">
                <div className="row justify-content-sm-center offset-top-10">
                    <div className="col-sm-10">
                    {/* Bootstrap jumbotron */}
                    <div className="jumbotron shadow-drop-lg context-dark text-left">
                        <h2><span className="big">Donate Today</span></h2>
                        <p>Your generous contribution is vital to Embankment Coalition operations. <span className="font-weight-bold bold">Please donate!</span> </p>
                        <p>The Embankment Preservation Coalition is a nonprofit, tax-exempt charitable organization under Section 501(c)(3) of the Internal Revenue Code.</p>
                        <p>Your contribution is 100% tax-deductible to the fullest extent of the law.</p>
                        <br />
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                            <input type="hidden" name="cmd" value="_s-xclick" />
                            <input type="hidden" name="hosted_button_id" value="Q63S34XYKEG9N" />
                            <input type="image" src="http://embankment.org/embankment/images/secure.jpg" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Our Sponsors */}
            <section id="involved-section-partners" className="section novi-background breadcrumb-classic">
                <div className="container section-34 section-sm-50">
                    <div className="row align-items-xl-center">
                        <div className="col-xl-5 d-none d-xl-block text-xl-left">
                        <h2><span className="big">Our Partners</span></h2>
                        </div>
                        <div className="col-xl-2 d-none d-md-block"><span className="icon icon-white mdi mdi-drag-horizontal"></span></div>
                        <div className="offset-top-0 offset-md-top-10 col-xl-5 offset-xl-top-0 small text-xl-right">
                        <ul className="list-inline list-inline-dashed p">
                            <li className="list-inline-item"><a href="#involved-section-sponsors">Sponsors</a></li> / <li className="list-inline-item"><a href="#involved-section-endorsements">Supporters</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <svg className="svg-triangle-bottom" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: "rgb(110,192,161)", stopOpacity: 1, }}></stop>
                        <stop offset="100%" style={{ stopColor: "rgb(111,193,156)", stopOpacity: 1, }}></stop>
                    </linearGradient>
                </defs>
                <polyline points="0,0 60,0 29,29" fill="url(#grad1)"></polyline>
                </svg>
            </section>

            <section id="involved-section-sponsors" className="section novi-background section-98 section-sm-110">
                <div className="container">
                    <p>Local, regional, and national organizations and businesses support the Embankment Preservation Coalition in numerous ways. </p>
                    <h2 className="font-weight-bold">Sponsors</h2>
                    <hr className="divider bg-mantis" />
                    <p>Sponsors are businesses and organizations that provide financial support to the Embankment Coalition. Please support those that make our work possible!</p>

                    <p>To become a sponsor of the Harsimus Branch and Embankment, please <a href="mailto:embankmentJC@gmail.com" target="_blank"><span className="font-weight-bold">Click Here (embankmentJC@gmail.com)</span></a>.</p>

                    <h3 className="font-weight-bold">Gold Level</h3>
                    <hr className="divider bg-mantis" />

                    <div className="row justify-content-sm-center align-items-xl-center offset-top-66">
                        <div className="col-md-10 col-lg-9 col-xl-12">
                        <div className="row">
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://www.communitycompostco.com/" target="_blank"><img className="" src="images/sponsors/community%20compost%20company.jpg" width="150" height="70" alt="Community Compost Company" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://twoboots.com/locations/jersey-city" target="_blank"><img className="" src="images/sponsors/two%20boots.png" width="150" height="70" alt="Two Boots Pizza" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://jcitytimes.com/" target="_blank"><img className="" src="images/sponsors/jersey%20city%20times.jpg" width="150" height="70" alt="Jersey City Times" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://stephengucciardo.kw.com/" target="_blank"><img className="" src="images/sponsors/KW_LOGO.png" width="150" height="70" alt="Keller Williams Realty" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://www.skinnersloft.com/" target="_blank"><img className="" src="images/sponsors/SKINNER2_LOGO.png" width="150" height="150" alt="Skinner's Loft" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://keyfoodstores.keyfood.com/store/keyFood/en/store/1666?distance=0.00%20mile&query=574%20Jersey%20Ave%20Jersey%20City,%20NJ%2007302%20United%20States&radius=5&services=&all=" target="_blank"><img className="" src="images/sponsors/KEYFOOD_LOGO.png" width="150" height="70" alt="Key Foods" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://bouquetsbaskets.net/" target="_blank"><img className="" src="images/sponsors/BOUQUETS_LOGO.png" width="150" height="70" alt="Bouquets & Baskets" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="http://www.madameclaudejc.com/" target="_blank"><img className="" src="images/sponsors/MADAME_LOGO.png" width="150" height="70" alt="Madame Claude" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href="https://www.madameclaudewine.com/" target="_blank"><img className="" src="images/sponsors/MADAMEWINE_LOGO.png" width="150" height="70" alt="Madame Claude Wine" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                            <a href=" http://www.wgcrealty.com/team/9b459cb0-7fb9-4260-860a-9e2a3cc2c08a/21704/18" target="_blank"><img className="" src="images/sponsors/WARREN_LOGO.jpg" width="200" height="110" alt="Warren G Curtin Realty" /></a>
                            </div>

                        </div>
                        </div>
                    </div>

                    <h3 className="font-weight-bold">Silver Level</h3>
                    <hr className="divider bg-mantis" />

                    <div className="row justify-content-sm-center align-items-xl-center offset-top-66">

                        <div className="col-md-10 col-lg-9 col-xl-12">
                        <div className="row">
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                                <a href="https://locations.postnet.com/nj/jersey-city/344-grove-st" target="_blank"><img className="" src="images/sponsors/POST_LOGO.png" width="150" height="75" alt="PostNet" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                                <a href="https://www.deleniojc.com/" target="_blank"><img className="" src="images/sponsors/DELENIO_LOGO.png" width="150" height="75" alt="Delenio" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                                <a href="https://www.mycarminespizza.com/" target="_blank"><img className="" src="images/sponsors/CARMINE_LOGO.png" width="150" height="65" alt="Carmine's Pizza" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                                <a href="https://goo.gl/maps/W6dWQvseMSkuXo3HA" target="_blank"><img className="" src="images/sponsors/NEWPORT_LOGO.png" width="150" height="50" alt="Newport Pharmacy" /></a>
                            </div>
                            <div className="col-md-4 col-xl-2 offset-top-41 offset-xl-top-0">
                                <a href="https://goo.gl/maps/wR2UT9jEn2NC2Ffp6" target="_blank"><img className="" src="images/sponsors/MASTROLIA_LOGO.jpg" width="150" height="75" alt="Mastrolia Pharmacy" /></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="involved-section-endorsements" className="section novi-background section-98 section-sm-110">
                <div className="container">
                <h2 className="font-weight-bold">Supporters</h2>
                <hr className="divider bg-mantis" />

                <p>If your organization would like to endorse the Coalition's goals, please <a href="mailto:embankmentJC@gmail.com" target="_blank"><span className="font-weight-bold">Click Here (embankmentJC@gmail.com)</span></a> . </p>


                <div className="row justify-content-sm-center align-items-xl-center offset-top-6">
                    <div className="col-md-10 col-lg-9 col-xl-12">
                    <div className="container">

                        <h3>Neighborhood Associations</h3>

                        <p>Downtown Coalition of Neighborhood Associations<br />
                            <a href="http://hpnajc.org" target="_blank">Hamilton Park Neighborhood Association</a><br />
                            <a href="http://harsimuscove.org" target="_blank">Harsimus Cove Association</a><br />
                            <a href="http://heightshope.webs.com/" target="_blank">Heights Hope Neighborhood Association</a><br />
                            <a href="http://paulushook.org" target="_blank">Historic Paulus Hook Association</a><br />
                            <a href="https://www.facebook.com/MadisonAveBlockAssc" target="_blank">Madison Avenue Block Association</a><br />
                            <a href="http://padnajc.org" target="_blank">Powerhouse Arts District Neighborhood Association</a><br />
                            <a href="http://riverviewneighborhood.org/" target="_blank">Riverview Neighborhood Association</a><br />
                            <a href="http://sgtanthonypark.com/" target="_blank">Sgt. Anthony Park Neighborhood Association</a><br />
                            <a href="" target="_blank">Sherman Place Block Association</a><br />
                            <a href="https://vvpajc.org/" target="_blank">Van Vorst Park Association</a><br />
                            <a href="http://www.jcvillage.org/" target="_blank">Village Neighborhood Association</a>
                        </p>

                        <h3><span>Citywide Organizations</span></h3>

                        <p>
                            <a href="https://www.bergenarches.com/" target="_blank">Bergen Arches Preservation Alliance</a><br/>
                            <a href="https://www.jonespark.org/" target="_blank">Enos Jones Park Association</a><br/>
                            <a href="http://groups.yahoo.com/group/JerseyCityFamilyInitiative/" target="_blank">Jersey City Family Initiative</a><br />
                            <a href="http://jclandmarks.org" target="_blank">Jersey City Landmarks Conservancy</a><br /><a href="http://jcparks.org/" target="_blank">Jersey City Parks Coalition</a><br />
                            <a href="http://www.jcreservoir.org" target="_blank">Jersey City Reservoir Preservation Alliance</a><br /> Jersey City Trees Committee<br />
                            <a href="https://www.jsqca.com/" target="_blank">Journal Square Community Association</a><br/>
                            <a href="http://www.pershingfield.org/" target="_blank">Pershing Field Garden Friends</a><br />
                            <a href="http://www.proartsjerseycity.org/" target="_blank">Pro Arts</a><br />
                            <a href="http://sustainablejc.org" target="_blank">Sustainable JC</a>
                        </p>


                        <h3>Regional and National Organizations</h3>

                        <p>
                            <a href="http://conservationresources.org" target="_blank">Conservation Resources, Inc.</a><br/>
                            <a href="http://www.greenway.org" target="_blank">East Coast Greenway Alliance</a><br />

                            <a href="https://https://www.facebook.com/HudsonCountySierraClub/" target="_blank">Hudson County Sierra Club </a><br/>

                            <a href="http://www.thehighline.org" target="_blank">Friends of the High Line</a>
                            <br />
                            <a href="http://www.folsp.org/" target="_blank">Friends of Liberty State Park</a><br />
                            <a href="http://www.hudsonriverwaterfront.org" target="_blank">Hudson River Waterfront Walkway Conservancy</a><br />

                            <a href="http://www.waterfrontalliance.org/" target="_blank">Metropolitan Waterfront Alliance</a><br />
                            <a href="http://www.preservationnation.org" target="_blank">National Trust for Historic Preservation</a><br />
                            <a href="http://www.njconservation.org" target="_blank">New Jersey Conservation Foundation</a><br />
                            <a href="http://nynjbaykeeper.org/" target="_blank">NY/NJ Baykeeper</a><br />
                            <a href="http://www.preservationnj.org/site/ExpEng/" target="_blank">Preservation NJ</a><br />
                            <a href="http://www.railstotrails.org" target="_blank">Rails to Trails Conservancy</a><br />
                            <a href="http://newjersey.sierraclub.org" target="_blank">Sierra Club of New Jersey</a><br />
                            <a href="http://skywaypark.org/" target="_blank">Skyway Park Conservancy</a><br />
                            <a href="http://www.tpl.org" target="_blank">Trust for Public Land</a>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Explore Section */}
            <section className="section parallax-container" data-parallax-img="images/HOME-SLIDER2.jpg">
                <div className="parallax-content section-98 section-sm-124 bg-overlay-white">
                <div className="container">
                    <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <h1><a href="vision.html">Explore Our Vision</a></h1>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </Page>
    )
}