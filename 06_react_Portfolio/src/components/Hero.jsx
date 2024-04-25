function Hero() {
  return (
    <>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images.pexels.com/photos/1100008/pexels-photo-1100008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to my portfolio! 
            </h1>
            <p class="lead">
              Driven by a desire to stay updated with the latest technologies
              and industry trends, I constantly strive to expand my knowledge
              and explore new possibilities in web development. With a strong
              foundation in computer science principles and a knack for
              problem-solving, I approach each project with dedication and
              attention to detail, ensuring optimal performance and user
              satisfaction.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Custom button
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4 me-sm-3 fw-bold"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
