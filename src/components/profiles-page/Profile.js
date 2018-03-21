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
      <tr>{props.profileData.name.first} 
      {props.profileData.name.last}</tr>
      <tr> {props.profileData.email}</tr>
      <tr>{props.profileData.location.state}</tr>
    </table>
  );
}

export default Profile;
