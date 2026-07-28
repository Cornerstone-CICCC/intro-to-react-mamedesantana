type ProfileHeaderProps = {
  name: string;
};

function ProfileHeader({ name }: ProfileHeaderProps) {
  return <h1>{name}'s Profile</h1>;
}

export default ProfileHeader;