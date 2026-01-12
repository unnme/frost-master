import { GMap } from "@components/home/contactsSection/GMap";

export const ContactsSection = () => {
  return (
    <section id="contacts">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 border border-main-dark/5 bg-main-dark/5" />
        <div className="p-6">
          <GMap />
        </div>
      </div>
    </section>
  );
};
