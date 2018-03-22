import React from "react";

function Profile(props) {
  console.log(props);
  return (
    <table>
      <th>
        <img
          class="pic"
          src={props.profileData.picture.large}
          alt="profile_pic"
        />
      </th>
      <tr id="name">
        {props.profileData.name.first}<span>  </span>
        {props.profileData.name.last}
      </tr>
      <tr> {props.profileData.email}</tr>
      <tr>
        {props.profileData.location.street}
        {props.profileData.location.state}
      </tr>
    </table>
  );
}

export default Profile;

