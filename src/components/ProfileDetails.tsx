import maleAvatar from "../assets/male-avatar.jpg";
import femaleAvatar from "../assets/female-avatar.jpg";

type Gender = "male" | "female";

type ProfileDetailsProps = {
  name: string;
  email: string;
  gender: Gender;
};

function ProfileDetails({
  name,
  email,
  gender,
}: ProfileDetailsProps) {
  const profileImage =
    gender === "male" ? maleAvatar : femaleAvatar;

  const imageDescription =
    gender === "male" ? "Male profile" : "Female profile";

  return (
    <div className="profile-details">
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>

      <img
        src={profileImage}
        alt={imageDescription}
        className="profile-image"
      />
    </div>
  );
}

export default ProfileDetails;