import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const handleOrderClick = () => {
    const formSection = document.querySelector("#order-form");
    if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
    }
};
