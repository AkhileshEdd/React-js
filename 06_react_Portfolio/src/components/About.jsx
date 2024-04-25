import Card from "./Card";
import Hero from "./Hero";

function About() {
  const para_js =
    "Proficient in JavaScript, I leverage its versatility and power to build dynamic and interactive web applications, from frontend to backend development.";
  const para_react =
    "With expertise in React.js, I design and develop modern user interfaces that are both visually appealing and highly functional, delivering exceptional user experiences.";
  const para_node =
    "Experienced in Node.js, I utilize its event-driven architecture and extensive library ecosystem to build scalable and efficient server-side applications, APIs, and microservices.";
  const jsImg =
    "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg";
  const reactImg =
    "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png";
  const nodeImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimB_HagxLHc_GrVFvYSIcbor94choLdU397QwmOMhzA&s";
  return (
    <>
      <section className="about" id="about">
        <div className="container bg-light">
          <h1 className="p-3 mb-2 shadow-lg bg-success-subtle text-success-emphasis rounded text-center">
            About Me
          </h1>
          <div className="detail">
            <Hero />

            {/* <img src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> */}
          </div>
          <h2 className="text-center shadow-lg rounded p-3 mb-4 bg-dark-subtle text-light-emphasis">
            Skills
          </h2>
          <div className="d-flex flex-row">
            <Card skill="JavaScript" para={para_js} img={jsImg} />
            <Card skill="React Js" para={para_react} img={reactImg} />
            <Card skill="Node Js" para={para_node} img={nodeImg} />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
