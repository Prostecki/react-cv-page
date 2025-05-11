export default function Contacts() {
  return (
    <section className="flex gap-5 mt-5 flex-col max-md:flex-col">
      <div className="flex gap-2 items-center">
        <img src="/src/assets/phone.png" alt="phone" width={24} height={24} />
        <a>+46 70 493-71-31</a>
      </div>
      <div className="flex gap-2 items-center">
        <img src="/src/assets/email.png" alt="mail" width={24} height={24} />
        <a>mark.taratynov@yh.nackademin.se</a>
      </div>
      <div className="flex gap-2 items-center">
        <img src="/src/assets/location.png" alt="location" width={24} height={24} />
        <p>Stockholm, Sweden</p>
      </div>
    </section>
  );
}
