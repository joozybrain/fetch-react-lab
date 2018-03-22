import React, { Component } from "react";
import Profile from "./Profile";
import "./Profile.css";
class ProfilesPage extends Component {
  constructor() {
    super();
    this.state = {
      profiles: []
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=50")
      .then(data => {
        return data.json();
      })
      .then(data => data.results)
      .then(data => this.setState({ profiles: data }));
  }

  render() {
    //console.log(this.state.profiles)
    return (
      <div class="grid">
        {this.state.profiles.map((profile, i) => {
          return (
            <div
              key={i}
              class="module"
              style={{ background: randomColorChange() }}
              alt={randomColorChange()}
            >
              <Profile profileData={profile} />
            </div>
          );
        })}
      </div>
    );
  }
}

function randomColorChange() {
  return "#" + (Math.floor(Math.random() * 16777216) & 0xffffff).toString(16);
}

export default ProfilesPage;
