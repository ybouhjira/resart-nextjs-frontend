import SlideShow from "@/app/components/MainBanner/SlideShow";

export default function MainBanner() {
  return (
    <section className="pt-10">
      <article className="text-center">
        <h1 className="text-5xl font-semibold">Resart</h1>
        <p className="w-[500px] m-auto my-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          consectetur debitis deserunt ducimus enim, et exercitationem, id
          molestias nesciunt officiis quae sunt tempore vero? Debitis
          dignissimos facere obcaecati qui voluptatum.
        </p>
      </article>

      <SlideShow />
    </section>
  );
}
