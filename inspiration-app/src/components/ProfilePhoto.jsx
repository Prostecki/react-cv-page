import profilePhoto from "../assets/profilePhoto.png";
export default function ProfilePhoto() {
  return (
    <div className="">
      <img
        src={profilePhoto}
        className="w-full h-auto border border-gray-200 rounded-md object-cover"
        alt="Profile Photo"
      />
    </div>
  );
}
