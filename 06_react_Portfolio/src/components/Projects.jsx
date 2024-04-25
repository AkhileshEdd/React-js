function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <h1 className="">My Projects</h1>
          <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary bg-image-1">
            <div class="col-md-6 p-lg-5 mx-auto my-5">
              <h1 class="display-3 fw-bold">Designed for engineers</h1>
              <h3 class="fw-normal text-muted mb-3">
                Build anything you want with Aperture
              </h3>
              <div class="d-flex gap-3 justify-content-center lead fw-normal">
                <a class="icon-link link-body-emphasis" href="#">
                  Learn more
                </a>
                <a class="icon-link link-body-emphasis" href="#">
                  Buy
                </a>
              </div>
            </div>
            <div className="product-device shadow-sm overflow-hidden d-none d-md-block">
            </div>
            <div className="product-device overflow-hidden product-device-2 shadow-sm d-none d-md-block">
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
