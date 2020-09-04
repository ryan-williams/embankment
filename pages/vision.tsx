import { Page } from "../src/pages"

export default function Body() {
    return (
        <Page
            path="vision"
            headerChildren={
                <section className="section parallax-container bg-black" data-parallax-img="images/VISION-BANNER.jpg">
                    <div className="parallax-content context-dark">
                        <div className="container">
                            <div className="row align-items-sm-center justify-content-sm-center section-cover section-98 section-sm-110 text-lg-left context-dark">
                            <div className="col-sm-12">
                                <div className="offset-top-4 offset-xl-top-0">
                                    <h1 className="text-capitalize"><span className="big">Our Vision</span></h1>
                                </div>
                                <div>
                                    <h2 className="font-default font-italic text-regular">"When we see land as a community to which we belong, we may begin to use it with love and respect." - Aldo Leopold</h2>
                                </div>
                                <div className="group group-xl offset-top-30">
                                    <a className="btn btn-primary btn-lg btn-anis-effect" href="#vision-section-concept">Concept</a>
                                    <a className="btn btn-default btn-lg btn-anis-effect" data-caption-animate="fadeInUp" data-caption-delay="1200" href="involved.html#involved-section-member"><span className="btn-text">Become a Member!</span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        >
            {/* BIG PICTURE SECTION */}
            <section id="vision-section-bigpicture" className="section-98 section-sm-110 bg-white-lilac">
                <div className="container">
                <h1>Our Philosophy</h1>
                <hr className="divider divider-lg bg-mantis" />
                <div className="row justify-content-sm-center">
                    <div className="col-md-9 col-xl-8">
                    <p>Conservationist Aldo Leopold coined the term “land ethic” to describe the valuing of soil, water, plants, and animals – “the land” – as members of a community of living organisms, with humans, the thinking members, fostering the community’s evolving relationships.</p>

                    <p>When the land atop Jersey City’s Harsimus Embankment opens to people for the first time in more than a century, Leopold’s land ethic is a way to look at the Harsimus Branch and connecting corridors. The public, whose preservation efforts have been sustained now for two decades, are its stewards. </p>

                    <p>With study, consideration of many ideas, and thoughtful decisions, Jersey City can restore degraded soil, support organisms that have found niches in a hardscape, re-introduce native species extinguished by industrial uses, sequester carbon, control stormwater, and provide transportation and recreation options easy on fellow life forms. Following Leopold’s belief that direct experience is necessary for people to develop a land ethic, we can reconnect our children with nature.</p>

                    <p>These thoughts underlie our philosophy for the entire Harsimus Branch and associated rail structures and land.</p>
                    </div>
                </div>
                </div>
            </section>

            {/* OUR VISION  */}
            <section id="vision-section-vision" className="section parallax-container" data-parallax-img="images/HOME-STEP2.jpg">
                <div className="parallax-content section-98 section-sm-124 bg-overlay-white">
                <div className="container">
                    <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <h1>Living with the Land</h1>
                        <hr className="divider bg-mantis" />
                        <p className="offset-md-top-66">Care for the environment is this century’s greatest challenge – and Jersey City’s greatest opportunity. Thoughtful treatment of the Harsimus Branch can set a precedent for cities around the world, demonstrating that a healthy ecology and infrastructure are compatible, not competitors. </p>

                        <p>The meadows and forest that took root decades ago on the historic Embankment rail structure, in the midst of downtown Jersey City, is unique to our city. We know of no other city in the world that has a self-seeded forest running through its downtown. This upland forest is thriving, its habitat part of a wildlife corridor from the Hudson River to the Hackensack.</p>

                        <p>The Embankment Coalition vision for the Harsimus Branch and its Embankment preserves much of this forest and opens it to Jersey City residents for sensitive reuse. While part of the corridor is reserved for possible future light rail, residents can enjoy, on foot and by bike, a naturally occurring wilderness in their own backyards.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Concept Master Plan */}
            <section id="vision-section-concept" className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <h1>Design Concept</h1>
                <hr className="divider bg-mantis" />
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/HOME-STEP4.jpg">
                        <figure><img width="570" height="321" src="images/HOME-STEP4.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Light Touch</h3>
                    <p>A “light touch” should inform design strategy for the Harsimus Branch from start to finish. Design choices, guided by Secretary of the Interior standards, should preserve the integrity of the historic Embankment structure. A light touch will also contain injury to current habitat and development and maintenance costs.</p>
                    <div className="offset-top-20">
                        <p>All elements proposed for the Harsimus Branch should be consistent with a design language that speaks to the identity of the Branch’s various segments. Design must consider potential future light rail use and not preclude that addition.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Continuous Corridor */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-MASTERPLAN.jpg">
                        <figure><img width="570" height="321" src="images/VISION-MASTERPLAN.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Continuous Corridor</h3>
                    <p>The Harsimus Branch is a rail right-of-way  (ROW) from Marin Boulevard in Downtown Jersey City to Waldo Avenue in the Hilltop area.  Loosely parallel to it is the old Erie Railroad ROW through the Bergen Arches.  A third ROW, the River Line trestle over Newark Avenue, could be used to join the two in a continuous corridor. The Coalition vision relies on the preservation of this – now green – infrastructure for future economic and environmental resilience for Jersey City.
                    </p>
                    <div className="offset-top-20">
                        <p>Together, these segments create a continuous corridor for the East Coast Greenway to run off-road through our densely built-out city. The Greenway will run from Marin Boulevard to Brunswick Street over the Embankment, continue across Newark Avenue and along Mary Benson Park on existing stanchions, and turn north on the River Line Connector, to bring pedestrians and bicyclists to the Bergen Arches. Additional trails will connect to this spine. </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Design Concept */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-LIGHT-TOUCH.jpg">
                        <figure><img width="570" height="321" src="images/VISION-LIGHT-TOUCH.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Stepping Stone Landscapes</h3>
                    <p>Ill-considered land use policies and practices, exacerbated by climate change, are fragmenting natural habitats around the world, resulting in species extinction and an exponential decrease in biodiversity. Stepping stone landscapes, or patches of habitat close enough together to lessen the impact of fragmentation, can connect larger habitat areas in a region, allowing species to move between them for food and refuge. </p>
                    <div className="offset-top-20">
                        <p>Former rail rights-of-way provide excellent opportunities for  wildlife corridors. The challenge for the Harsimus Branch is that it will serve multiple purposes, including some development, recreation, and habitat.  The Coalition believes that landscaping of development on the easternmost Embankment block should be integrated with passive recreation on the next block, forest on the next three blocks, and passive recreation on the last elevated segment.  Pocket landscapes, or stepping stones, would mitigate active uses. Creatures as large as red tail hawks and as small as the monarch butterfly, which relies on habitat along its migratory route from Canada to Mexico, will benefit, as will their stewards. </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Design Concept */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-FADE.jpg">
                        <figure><img width="570" height="321" src="images/VISION-FADE.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Fade to Forest</h3>
                    <p>The Coalition vision for Harsimus Embankment design is to slowly draw pedestrians and bicyclists in from city streets through narrow passages of green that widen into lush green meadows and then build up into woods where urban sights and sounds drop away. The forest will  transport its visitors to a world removed from typical city stressors.</p>
                    <div className="offset-top-20">
                        <p>Meadows at each end of the forest will be "active" landscapes that serve as community gathering spaces and incorporate areas for recreation and children's play. The forest is a "passive landscape" where wanderers can explore a path through woods, pause at spots of interest, and contemplate light, birdsong, and the movement of rustling trees - respite from busy urban life.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Block 1 */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-LANDBRIDGE.jpg">
                        <figure><img width="570" height="321" src="images/VISION-LANDBRIDGE.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Blocks 1+7: Land Bridges</h3>
                    <p>The Coalition envisions broad welcoming access to the eastern Embankment block. A grand staircase set back from the corner of Marin Boulevard and 6th Street would bring the public up into a 30-foot-wide public right-of-way. An ADA-compliant elevator would provide alternative access.</p>
                    <div className="offset-top-20">
                        <p>The ROW would combine permeable hardscape and landscape areas that could act as habitat stepping stones.  This "land bridge" would introduce visitors to the lusher meadows they will encounter when they cross a bridge into the public park on Block 2, Manila Avenue to Erie Street. </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Block 2 */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-MEADOW.jpg">
                        <figure><img width="570" height="321" src="images/VISION-MEADOW.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Blocks 2+6: Meadows</h3>
                    <p>The Coalition envisions Blocks 2 and 6 as “active landscapes” for community recreation. Because preliminary soil testing indicated some contaminants, we anticipate that Block 2 will be remediated and capped with residential soil. Our goal is to see a new landscape compatible with a conserved landscape on other blocks. On the eastern side of Block 2, for example, we see meadows that “fade” into a forest at the west end of the Block.</p>
                    <div className="offset-top-20">
                        <p>This constructed landscape and any amenities like playgrounds should be in the spirit of national park design, “harmonious with park resources, compatible with natural processes, aesthetically pleasing, functional, energy- and water-efficient, cost-effective, universally designed, and as welcoming as possible to all segments of the population.”</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Blocks 3 THRU 5 */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-FOREST.jpg">
                        <figure><img width="570" height="321" src="images/VISION-FOREST.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Blocks 3,4+5: Forest</h3>
                    <p>As envisioned by the Coalition, Harsimus Embankment Blocks 3, 4, and 5 are largely "passive landscapes" that conserve the forest. A trail located on the north side of the blocks will branch into narrower paths that venture into the woods. </p>
                    <div className="offset-top-20">
                        <p>These meandering paths will contain places of interest (“moments”) along them. The intention is to provide a diversity of experiences - educational, inspiring, or peaceful - for those who amble along them. Soil remediation mapping will guide the routing design.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* JERSEY CITY GREENSPACES */}
            <section id="vision-section-crossroads" className="section parallax-container bg-black" data-parallax-img="images/VISION-JERSEYCITY.jpg">
                <div className="parallax-content section-98 section-sm-110 context-light">
                <div className="container">
                    <div>
                    <h2><span className="big">A Green Network</span></h2>
                    </div>
                    <hr className="divider divider-lg bg-mantis" />
                    <div className="row justify-content-sm-center offset-top-24">
                    <div className="col-sm-10 col-xl-8">
                        <p>Jersey City and Hudson County Master Plans call for the development of an off-road route for the East Coast Greenway Maine-to-Florida trail.  Developing the Harsimus Branch will significantly advance that route through Hudson County, linking historic sites, parks, and other open spaces.  The Greenway will serve as a spine for a trail system.</p>
                    </div>
                    <div className="col-sm-12">
                        <div className="offset-top-50 offset-xl-top-66">
                        {/* owl carousel */}
                        <div className="owl-carousel owl-carousel-default owl-carousel-class-light veil-owl-nav" data-loop="false" data-items="1" data-sm-items="2" data-dots="true" data-mouse-drag="false" data-lg-items="4" data-nav="false">
                            <a href="https://njbwc.org/current-projects/essex-hudson-greenway/" target="_blank"><button className="btn btn-primary" type="button">Essex-Hudson Greenway</button></a>
                            <a href="https://www.bergenarches.com" target="_blank"><button className="btn btn-primary" type="button">Bergen Arches</button></a>
                            <a href="https://www.jcreservoir.com/" target="_blank"><button className="btn btn-primary" type="button">Resevoir #3</button></a>
                            <a href="http://jonespark.org/" target="_blank"><button className="btn btn-primary" type="button">Enos Jones Park</button></a>
                            <a href="http://www.jcvillage.org/101-2/mary-benson-park/" target="_blank"><button className="btn btn-primary" type="button">Mary Benson Park</button></a>
                            <a href="https://www.google.com/maps/place/Gateway+Park/@40.7182864,-74.05672,18z/data=!4m12!1m6!3m5!1s0x0:0x75118676d1527f46!2sGateway+Field!8m2!3d40.7181949!4d-74.0567307!3m4!1s0x0:0x766e6d41dedc6b94!8m2!3d40.7192591!4d-74.056447" target="_blank"><button className="btn btn-primary" type="button">Gateway Park</button></a>
                            <a href="https://www.folsp.org" target="_blank"><button className="btn btn-primary" type="button">Liberty State Park</button></a>
                            <a href="http://www.hudsonriverwaterfront.org/" target="_blank"><button className="btn btn-primary" type="button">Hudson River Waterfront</button></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* East Coast Greenway */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-JC-EASTCOAST.jpg">
                        <figure><img width="570" height="321" src="images/VISION-JC-EASTCOAST.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>East Coast Greenway Route in Jersey City</h3>
                    <p>The East Coast Greenway (ECG) connects 15 states and 450 cities and towns from Maine to Florida via 3,000 miles of people-powered trails. It is the country's longest biking and walking route. Hudson County, the most densely populated county along the way, has an interim ECG route but its use is not recommended, for safety reasons.</p>
                    <div className="offset-top-20">
                        <p>From the west, the largely off-road ECG route will enter Jersey City from Secaucus, use the Bergen Arches/Erie Cut through the Palisades, turn south on the River Line Connector, and continue east through Downtown on the Harsimus Branch and its Embankment on Sixth Street to the Hudson River Waterfront Walkway. The main route continues to Exchange Place and then to Battery Park in Manhattan by ferry.  An alternate ECG route uses the Hudson River Waterfront Walkway to the George Washington Bridge and upper Manhattan.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Jersey City Trails */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-JCTRAILS.jpg">
                        <figure><img width="570" height="321" src="images/VISION-JCTRAILS.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Crossroads</h3>
                    <p>The East Coast Greenway will serve when built as a "spine" for a grand network of Hudson County trails - existing, planned, and proposed.</p>
                    <div className="offset-top-20">
                        <p>This network is referred to as Crossroads, a local initiative with the goal of connecting existing industrial rights of way as new walking and biking corridors.  This trail system will allow Jersey City residents and visitors to walk or bike safely around the entire city from every neighborhood along public greenways.  Longer trips will be possible through New Jersey or even to Maine and Florida without the necessity for planes, trains, or automobiles.</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* LOCAL ACCESS */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-8 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group"><a className="thumbnail-classic" data-lightgallery="item" href="images/VISION-ACCESS.jpg">
                        <figure><img width="570" height="321" src="images/VISION-ACCESS.jpg" alt="" />
                        </figure></a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-4 text-md-left offset-top-34 offset-lg-top-0">
                    <h3>Harsimus Branch and Embankment Public Access</h3>
                    <p>The Coalition is currently in a conceptual design phase for the Harsimus Branch, and many options for public access points will be proposed for public consideration.</p>
                    <div className="offset-top-20">
                        <p>The goal is to provide, at a minimum, an ADA access point to this public greenway at each neighborhood it borders. There will be a more grand ramp entrance for bikes at each end of the Harsimus Branch and Embankment to continue the East Coast Greeway route to the Hudson River Waterfront Walkway and Bergen Arches. </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Creating Our Sustainable Future with the Harsimus Branch  */}
            <section id="vision-section-art" className="section parallax-container bg-black" data-parallax-img="images/VISION-JERSEYCITY.jpg">
                <div className="parallax-content section-98 section-sm-110 context-light">
                <div className="container">
                    <div>
                    <h2><span className="big">Creating Our Sustainable Future with the Harsimus Branch</span></h2>
                    </div>
                    <hr className="divider divider-lg bg-mantis" />
                    <div className="row justify-content-sm-center offset-top-24">
                    <div className="col-sm-10 col-xl-8">
                        <p>
                        Artists have long been integral to the Jersey City community. Our Embankment vision embraces their creativity and weaves their vision and voices into the project, helping each of us to see and learn in new ways.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Kerry Kolenut: A Journey Through History  */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-6 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group">
                        <a data-lightgallery="item" href="images/kerrykolenut_embankment_12.jpg">
                            <figure className="figure">
                            <img className="figure-img img-fluid" src="images/kerrykolenut_embankment_12.jpg" alt="Photograph of plant labeled with chalk growing on Embankment stones, by Kerry Kolenut" />
                            <figcaption className="figure-caption">
                                Photograph by Kerry Kolenut
                            </figcaption>
                            </figure>
                        </a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-6 text-md-left offset-top-34 offset-lg-top-0">
                    <h3> Kerry Kolenut: A Journey Through History </h3>
                    <div className="container">
                        <div className="row offset-top-20">
                        <div className="col-md-8 col-lg-6" style={{ textAlign: "center" }}>
                            <ul className="list-unstyled" style={{ listStyleType: "disc", textAlign: "left", display: "inline-block" }}>
                            <li>geologic history</li>
                            <li>people &amp; places</li>
                            <li>prehistoric record</li>
                            <li>immigrants &amp; churches</li>
                            <li>railroads &amp; industry</li>
                            <li>architectural styles</li>
                            <li>historic sites &amp; districts</li>
                            <li>politics &amp; economics</li>
                            </ul>
                        </div>
                        <div className="col-md-8 col-lg-6 text-center">
                            <div data-lightgallery="group">
                            <a data-lightgallery="item" href="images/SciAm_1888_trestles_24171.jpg">
                                <figure className="figure">
                                <img className="figure-img img-fluid" src="images/SciAm_1888_trestles_24171.jpg" alt="Scientific American, Jan 21, 1988" style={{ border: "0.5em solid #615c5d" }}/>
                                <figcaption className="figure-caption">Scientific American, Jan 21, 1988</figcaption>
                                </figure>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="row offset-top-20">
                        Kerry Kolenut is a New Jersey based artist. Drawing inspiration from where she grew up, her work is photo based and focuses on themes relating to identities, structures, and memories within different types of communities. The Embankment is a structure that reflects its history. The visible layers of its life, the green growing along it, and the engagement of the community around it is what makes it inspirational and such an important part of the neighborhood.
                        </div>
                        <h4><a href="https://www.kerrykolenut.com/">Read more about Kerry Kolenut.</a></h4>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Eileen Ferara: A Green Network  */}
            <section className="section novi-background section-50 section-sm-top-5">
                <div className="container">
                <div className="row justify-content-md-center offset-top-20">
                    {/* Simple quote Slider */}
                    <div className="col-md-8 col-lg-6 inset-lg-right-80">
                    <header className="post-media">
                        <div data-lightgallery="group">
                        <a data-lightgallery="item" href="images/Eileen_Ferara_EC2.jpg">
                            <figure className="figure">
                            <img className="figure-img img-fluid" src="images/Eileen_Ferara_EC2.jpg" alt="Artwork by Eileen Ferara (photo by Ed Fausty); drawing by Sean Gallagher" />
                            <figcaption className="figure-caption">Artwork by Eileen Ferara (photo by Ed Fausty)</figcaption>
                            </figure>
                        </a>
                        </div>
                    </header>
                    </div>
                    <div className="col-md-8 col-lg-6 text-md-left offset-top-34 offset-lg-top-0">
                    <h3> Eileen Ferara: A Green Network </h3>
                    <div className="container">
                        <div className="row offset-top-20">
                        <div className="col-md-8 col-lg-6" style={{ textAlign: "center" }}>
                            <ul className="list-unstyled" style={{ listStyleType: "disc", textAlign: "left", display: "inline-block" }}>
                            <li>people-powered transport</li>
                            <li>forest &amp; meadow</li>
                            <li>species niches</li>
                            <li>heat &amp; carbon sink</li>
                            <li>stormwater control</li>
                            <li>health &amp; well-being</li>
                            </ul>
                        </div>
                        <div className="col-md-8 col-lg-6 text-center">
                            <div data-lightgallery="group">
                            <a data-lightgallery="item" href="images/IMG_2466.jpg">
                                <figure className="figure">
                                <img className="figure-img img-fluid" src="images/IMG_2466.jpg" alt="Drawing by Sean Gallagher"  style={{ border: "0.5em solid #86bf67" }}/>
                                <figcaption className="figure-caption">Drawing by Sean Gallagher</figcaption>
                                </figure>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="row offset-top-20">
                        Eileen Ferara is a multidisciplinary artist whose work explores our relationship to the environment. Spending time observing urban wildlife, she creates images which combine her research with memories of place. Ferara’s work is a contemplation of interrelated ecosystems and the role that humans play in shaping the world. The transformation of the Embankment into a wild green space in Jersey City is a source of inspiration for her work.
                        </div>
                        <h4><a href="https://www.eileenferara.com/">Read more about Eileen Ferara</a></h4>
                        <p>…or <a href="https://instagram.com/eileenferarastudio">visit her Instagram: <b>@eileenferarastudio</b></a></p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Donate / Volunteer / Sponsor buttons  */}
            <section>
                <div className="container">
                <div className="row justify-content-center">
                    {/* owl carousel */}
                    <div className="col-lg-6 col-md-6 owl-carousel owl-carousel-default owl-carousel-class-light veil-owl-nav" data-loop="false" data-items="3" data-sm-items="3" data-dots="false" data-mouse-drag="false" data-lg-items="3" data-nav="false">
                    <a href="involved.html#involved-section-donate">
                        <button className="btn btn-primary" type="button">Donate</button>
                    </a>
                    <a href="involved.html#involved-section-volunteer">
                        <button className="btn btn-primary" type="button">Volunteer</button>
                    </a>
                    <a href="involved.html#involved-section-sponsors">
                        <button className="btn btn-primary" type="button">Sponsor</button>
                    </a>
                    </div>
                </div>
                </div>
            </section>

            {/* Explore Section */}
            <section className="section parallax-container" data-parallax-img="images/VISION-HISTORY.jpg">
                <div className="parallax-content section-98 section-sm-124 bg-overlay-white">
                <div className="container">
                    <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <h1><a href="about.html">Explore Our History</a></h1>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </Page>
    )
}