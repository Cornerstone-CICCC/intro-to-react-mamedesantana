import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";

type Gender = "male" | "female";

type ProfileProps = {
  name: string;
  email: string;
  gender: Gender;
};

function Profile({ name, email, gender }: ProfileProps) {
  return (
    <section className="profile-section">
      <ProfileHeader name={name} />

      <ProfileDetails
        name={name}
        email={email}
        gender={gender}
      />
    </section>
  );
}

export default Profile;