import React from "react";
import "./AppScreens.css";

const AppScreens = () => {
  return (
    <section id="screens" className="app-screens">
      <h3>App Screens</h3>
      <div className="screenshots">
        <img src="image4.png" alt="Screen 1" className="image" />
        <div>
          <h1>Easy and Perfect Solution</h1>
          <p>
            Aliquam Aliquet Purus A Est Consequat Lobortis. Etiam Vehicula
            Suscipit Purus, Eget Ullamcorper Augue Blandit Vitae. Ut Eu Euismod
            Felis. Etiam At Varius Quam. Vivamus Lacinia Pulvinar Turpis In
            Suscipit. Aenean Mattis Enim Ut Pretium Gravida. Sed Fermentum A
            Lacus Bibendum Convallis. Consequat Purus Aliquet A Est Aliquam
            Lobortis. Etiam Vehicula Suscipit Purus, Eget Ullamcorper Augue
            Blandit Vitae...
          </p>
        </div>
      </div>
      <div className="screenshots">
        <div>
          <h1>How Does This App Work</h1>
          <div className="card">
            <img src="image5.png" alt="photo" className="image5" />
            <div>
              <h1>Make a Profile</h1>
              <p>Easy steps to set up your profile and get started.</p>
            </div>
          </div>
          <div className="card">
            <img src="image5.png" alt="photo" className="image5" />
            <div>
              <h1>Make a Profile</h1>
              <p>Easy steps to set up your profile and get started.</p>
            </div>
          </div>
          <div className="card">
            <img src="image5.png" alt="photo" className="image5" />
            <div>
              <h1>Make a Profile</h1>
              <p>Easy steps to set up your profile and get started.</p>
            </div>
          </div>
        </div>
        <img src="image4.png" alt="Screen 1" />
      </div>

      <div className="screenshots">
        <img src="image4.png" alt="Screen 1" />
        <div>
          <h1>Designed and Worked by Latest Patterns</h1>
          <div>
            <p className="para">Aliquam varius ligula nec leo tempus porta.</p>
          </div>

          <p className="para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>

          <div>
            <p className="para">Aliquam varius ligula nec leo tempus porta.</p>
          </div>

          <div>
            <p className="para">Aliquam varius ligula nec leo tempus porta.</p>
          </div>
        </div>
        <button>Read More</button>
      </div>
    </section>
  );
};

export default AppScreens;
