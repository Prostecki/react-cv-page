import profilePhoto from "../assets/profilePhoto.png";
export default function ProfilePhoto() {
  return (
    <div className="">
      <img
        src={profilePhoto}
        className="border border-gray-200 rounded-md object-cover max-md:w-[15rem] mb-5"
        alt="Profile Photo"
        width={500}
        height={500}
      />
    </div>
  );
}
