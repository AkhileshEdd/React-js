function Home() {
  return (
    <>
      <section className="Home" id="Home">
        <div className="container ">
          <div className="my_info text-center">
            <h1 className="">Web Developer</h1>
            <h3 className="mt-4">Hi. I am Akhilesh, an Aspiring <span className="p-2 rounded bg-warning text-dark">Web Developer.</span></h3>
          </div>
          <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
                A passionate web developer with a focus on MERN Stack.
                </h1>
                <p class="lead">
                I completed my Master's degree in Computer Application, equipping myself with a solid foundation in software development and problem-solving skills. With a keen interest in creating dynamic and user-centric web applications, I am currently seeking new opportunities to apply my knowledge and expertise in a professional environment. My goal is to contribute to innovative projects and continuously enhance my skills in the ever-evolving field of web development.
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg px-4"
                  >
                    Default
                  </button>
                </div>
              </div>
              <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg ">
                <img
                  class="rounded-lg-3"
                  src=""
                  alt=""
                  width="720"
                />
              </div>
            </div>
          </div>
          <div className="my_img">
            {/* <img src="https://preview.colorlib.com/theme/jackco/assets/img/hero/hero_right.png" alt="" /> */}
            {/* <button className="btn btn-primary">Know More</button> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
