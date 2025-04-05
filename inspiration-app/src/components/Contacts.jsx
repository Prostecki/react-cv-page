import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function Contacts() {
  return (
    <section className="flex gap-5 mt-5 flex-col md:flex-row">
      <div className="flex gap-2 items-center">
        <BsTelephoneInboundFill size={20} />
        <p>+46 70 493-71-31</p>
      </div>
      <div className="flex gap-2 items-center">
        <IoIosMail size={20} />
        <p>mark.taratynov@yh.nackademin.se</p>
      </div>
      <div className="flex gap-2 items-center">
        <IoLocationSharp size={20} />
        <p>Stockholm, Sweden</p>
      </div>
    </section>
  );
}
