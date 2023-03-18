import cx from "classnames";
import variation from "@/types/Variation";

interface PriceProps {
    children: number
    className?: string
    variant?: "ref" | "main"
}

const Text = {
    Price({children, className, variant = "main"}: PriceProps) {
        const variantClasses = {
            ref: 'line-through',
            main: 'ml-2 text-dark text-[18px] font-bold',
        }[variant];

        return <span className={cx(className, variantClasses)}>{children} DH</span>
    }
}

export default Text