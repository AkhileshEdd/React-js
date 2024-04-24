import Card from "./Card";
import Hero from "./Hero";

function About() {
    const para = "Some quick example text to build on the card title and make up the bulk of the card's content."
    const jsImg = "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
    const reactImg = "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    const nodeImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimB_HagxLHc_GrVFvYSIcbor94choLdU397QwmOMhzA&s"
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h1>About Me</h1>
          <div className="detail">
            <Hero />
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              debitis assumenda placeat itaque? Quibusdam, maiores culpa amet ab
              modi animi qui voluptatem nihil, sint facere minima? Veritatis
              tempore quidem, repellendus quisquam ut eligendi similique iste
              tenetur excepturi, quas et quo.
            </h4>
            {/* <img src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
          </div>
          <div className="d-flex flex-row">
          <Card skill="JavaScript" para={para} img={jsImg}/>
          <Card skill="React Js" para={para} img={reactImg}/>
          <Card skill="Node Js" para={para} img={nodeImg}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
