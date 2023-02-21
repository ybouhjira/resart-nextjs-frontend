import { ReactElement } from "react";

interface Props {
  title: string;
  className?: string;
  children: ReactElement;
}

export default function Section(props: Props) {
  return (
    <section
      className={`text-center p-5 py-10 md:p-10 pb-20 ${props.className}`}
    >
      <h2 className="text-2xl mb-10 font-bold">{props.title}</h2>
      {props.children}
    </section>
  );
}
