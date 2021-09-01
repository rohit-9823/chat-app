import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer ">
    {users ? (
      <div>
        <h3>Online</h3>
        <hr></hr>
        <div className="activeContainer">
          <h3>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <img
                  className="pic"
                  alt="Online Icon"
                  src={
                    "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                  }
                />
                <img alt="Online Icon" src={onlineIcon} />

                {name}
              </div>
            ))}
          </h3>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
