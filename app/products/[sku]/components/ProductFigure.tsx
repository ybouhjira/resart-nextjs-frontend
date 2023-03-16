import ProductImage from "@/components/ProductImage/ProductImage";

interface Props {
  alt: string;
  src: string;
}

export default function ProductFigure({ src, alt }: Props) {
  return (
    <figure className="lg:w-full rounded-px overflow-hidden">
      <ProductImage
        src={src}
        alt={alt}
        width={675}
        height={675}
        className="h-full w-auto block object-cover"
      />
    </figure>
  );
}
