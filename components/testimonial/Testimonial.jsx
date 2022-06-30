import React from 'react'
import styles from '../../styles/Testimonial.module.css'

const Testimonial = () => {
  return (
    <div className="container-lg my-3">
	<div className="row">
		<div className="col-sm-12">			
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
				<h3 className='text-center'>What others say about us</h3>
                <hr className='bg-secondary m-auto my-3' style={{width: "50px", height: "2px"}} />
				{/* Carousel indicators */}
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   
				{/* Wrapper for carousel items */}
				<div className="carousel-inner mt-5">
					<div className="carousel-item active">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p>The challenge we face is that we are big enough to need a network with specific functionality, but not necessarily requiring a full-time IT staff person. Elonatech Nigeria Ltd. provided the perfect solution; they have the technical expertise and mindshare we needed coupled with flexibility in the level of support. They are really responsive, prioritizing important issues that arise and dealing with them quickly and effectively. I also appreciate their detailed follow-up and preventive maintenance; more than once this has helped us avoid a major problem with our network. A lot of companies these days make claims about customer service and looking out for the best interest of their clients, but Elonatech can be trusted to do what they say—and for a competitive price.</p>
								</div>
								<div className="media">
									<img src="/images/testimonialsImg/Mary-Ephraim-Egbas.jpeg" className="mr-3" alt="Mary Ephraim Egbas" />
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Mary Ephraim Egbas</b></div>
											<div className="details">CEO, Okhma Consult</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p>In the past, I've been 'held hostage' by techie people who talk over my head. I clicked with Elonatech Nigeria Ltd. from the start because they are so down to earth and more than willing to do a great job for their clients. Elonatech Nigeria Ltd. is a professional company with a real commitment to provide excellent technical expertise and incredibly good customer service. I haven't found this from many other providers.</p>
								</div>
								<div className="media">
									<img src="/images/testimonialsImg/Remeben-MD-1.png" className="mr-3" alt="Benjamin Miachi" />
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Benjamin Miachi</b></div>
											<div className="details">CEO/Chief Analyst, Remaben Scientific Services Ltd.</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
					<div className="carousel-item">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p>We really needed a company that could handle the computer issues we no longer had the time or experience to deal with. Elonatech Nigeria Ltd.is a perfect solution for us because we have the same IT Professional with us every week who is very familiar with our network, and we don’t have to worry about dealing with computer problems on our own anymore. The fact that Elonatech Nigeria Ltd uses Microsoft best practices is very important to us, too. We are confident that if someone else had to manage our network down the road, it would be easy to do because of the systems that are in place.</p>
								</div>
								<div className="media">
									<img src="/images/testimonialsImg/Chunyere-Nganwuchu.jpg" className="mr-3" alt="Chinyere Iziogu" />
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Chinyere Iziogu</b></div>
											<div className="details">Admin Manager, Shepherd Specialist Hospital</div>											
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p>
                                    I have worked with other web designers before but was never satisfied with the end result. From start to finish my interaction with the team at Elonatech was professional, stress-free and I had complete trust in their ability to deliver. Their difference is: They took the time to listen to what I wanted but also brought their own ideas, experience and creativity so that the end design was more rounded. They understood that I needed to see things in a visual context and have some flexibility to 'play' around with a few ideas. All of this was done face to face at their office making the process highly personal. </p>
								</div>
								<div className="media">
									<img src="/images/testimonialsImg/Abayomi-Kakanfo.jpg" className="mr-3" alt="Abayomi Kakanfo" />
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Abayomi Kakanfo</b></div>
											<div className="details">Business Dev. Manager, Hyperthread Ventures Limited</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
					<div className="carousel-item">
						<div className="row">
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Every organization relies on computers, laptops, and workstations to perform their duties, and when your equipment goes down, you lose productivity.
                                    “Elonatech Nigeria Ltd” allows us to focus on our core business, They evaluated our existing hardware, initiated a master plan to incrementally improve our systems”
                                    We never have to look over our shoulders any more, when it comes to our computer systems.</p>
								</div>
								<div className="media">
									<img src="/images/testimonialsImg/2021-06-03-4.png" className="mr-3" alt="Paul Michael" />
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Paul Michael</b></div>
											<div className="details">CEO, Felvic Unique Services</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="testimonial">
									<p>Safebrooks Nigeria Limited" relies on Elonatech for it's digital marketing and web development expertise, with a particular focus on the area of social media marketing and digital advertising. Elonatech provides the best advice and is superbly knowledgeable as well as being fully committed and responsive to our needs and supporting the ideas and initiatives we have presented.
                                        Oreva and all of the team at Elonatech have become invaluable partners for our company in creating brand awareness and being instrumental in generating new business ideas.</p>
								</div>
								<div className="media">
									<div className="media-left d-flex mr-3">
										<img src="/images/testimonialsImg/profile.png" alt="Gabriel Osondu" />										
									</div>
									<div className="media-body">
										<div className="overview">
											<div className="name"><b>Gabriel Osondu</b></div>
											<div className="details">COO/Water Specialist, Safebrooks Nig. Ltd.</div>
											<div className="star-rating">
												<ul className="list-inline">
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star"></i></li>
													<li className="list-inline-item"><i className="fa fa-star-o"></i></li>
												</ul>
											</div>
										</div>										
									</div>
								</div>
							</div>
						</div>			
					</div>
				</div>
				{/* Carousel controls */}
				<a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i className="fa fa-chevron-left"></i>
				</a>
				<a className="carousel-control-next" href="#myCarousel" data-slide="next">
					<i className="fa fa-chevron-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>
  )
}

export default Testimonial