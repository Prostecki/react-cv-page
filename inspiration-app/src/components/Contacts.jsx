import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Contacts() {
  return (
    <section className="flex gap-5 mt-5 flex-col max-md:flex-col">
      <div className="flex gap-2 items-center">
        <BsTelephoneInboundFill size={20} />
        <a>+46 70 493-71-31</a>
      </div>
      <div className="flex gap-2 items-center">
        <IoIosMail size={20} />
        <a>mark.taratynov@yh.nackademin.se</a>
      </div>
      <div className="flex gap-2 items-center">
        <IoLocationSharp size={20} />
        <p>Stockholm, Sweden</p>
      </div>
    </section>
  );
}
