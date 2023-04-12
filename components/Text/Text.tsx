import cx from "classnames";
import variation from "@/types/Variation";
import {PropsWithChildren} from "react";

interface PriceProps {
    children: number
    className?: string
    variant?: "ref" | "main"
}

const Text = {
    H({ children }: PropsWithChildren) {
        return (
            <h2 className="text-3xl font-bold mb-5 font-[400] leading-[26px] tracking-0 text-left">
                {children}
            </h2>
        );
    },
    P({ children }: PropsWithChildren) {
        return <p>{children}</p>;
    },
    Price({children, className, variant = "main"}: PriceProps) {
        const variantClasses = {
            ref: 'line-through',
            main: 'text-dark font-bold',
        }[variant];

        return <span className={cx('whitespace-nowrap', variantClasses, className)}>{children} DH</span>
    }
}

export default Text