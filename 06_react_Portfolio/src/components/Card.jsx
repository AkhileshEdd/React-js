function Card({skill, para, img}) {
  return (
    <>
      <div class="card mx-3" style={{width: 400}}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{skill}</h5>
          <p class="card-text">
            {para}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
