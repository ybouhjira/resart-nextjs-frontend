import Section from "@/app/components/Section/Section";

export default function AboutSection() {
  return (
    <Section title="About" className="bg-lightBackground">
      <video controls className="m-auto inline-block">
        <source src="/videos/home.mp4" type="video/mp4" />
      </video>
    </Section>
  );
}
