import SlideShow from "@/app/components/Hero/SlideShow/SlideShow";

export default function Hero() {
    return <div>
        <article className="text-center">
            <h1 className="text-2xl font-bold">Resart</h1>
            <p className="w-[500px] m-auto my-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                consectetur debitis deserunt ducimus enim, et exercitationem, id
                molestias nesciunt officiis quae sunt tempore vero? Debitis
                dignissimos facere obcaecati qui voluptatum.
            </p>
        </article>

        <SlideShow />
    </div>
}
