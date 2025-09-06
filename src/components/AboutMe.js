import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="about_container ">
      <div className="about_part">
        <h1 className="my_name">Michaela Krakówka</h1>
        <p className="paragraphs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
          blanditiis dolorem consectetur repudiandae, facere delectus adipisci,
          quas nihil labore iusto architecto voluptate sequi nulla earum at
          dolores laudantium expedita molestiae. Harum esse aut aliquam
          laudantium tempore tenetur quasi vel nemo? Fuga laudantium similique
          temporibus deleniti, quam autem provident a quibusdam eligendi
          veritatis officia molestiae exercitationem, expedita reiciendis,
          consequuntur iure! Rerum?
        </p>
      </div>
      <div className="photo_part">
        <img alt="Me in black and white" src="/photo.jpg"></img>
      </div>
    </div>
  );
};
