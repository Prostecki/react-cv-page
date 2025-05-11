export default function ProfilePhoto() {
  return (
    <div className="">
      <img
        src="images/profilePhoto.png"
        className="border border-gray-200 rounded-md object-cover max-md:w-[15rem] mb-5"
        alt="Profile Photo"
        width="416"
        height="525"
        loading="lazy"
      />
    </div>
  );
}
