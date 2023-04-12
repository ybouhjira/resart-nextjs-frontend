import IconProps from "@/components/Icons/IconProps";

export default function CartIcon({ className, color }: IconProps) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.0424 23.5979C13.0424 24.9245 12.0385 26 10.8001 26C9.56176 26 8.55787 24.9245 8.55787 23.5979C8.55787 22.2713 9.56177 21.1958 10.8002 21.1958C12.0385 21.1958 13.0424 22.2713 13.0424 23.5979ZM19.8793 21.1958C18.6409 21.1958 17.637 22.2713 17.637 23.5979C17.637 24.9245 18.6409 26 19.8793 26C21.1177 26 22.1216 24.9245 22.1216 23.5979C22.1216 22.2713 21.1177 21.1958 19.8793 21.1958ZM26.8395 9.91945L24.0805 18.7045C24.0805 18.7045 23.8521 20.0082 22.6884 20.0082C21.5247 20.0082 10.145 20.0082 8.75625 20.0082C7.36754 20.0082 7.30918 18.3741 7.30918 18.3741C7.30918 18.3741 5.82879 6.60835 5.75543 5.89754C5.68207 5.18673 4.83352 4.65989 4.83352 4.65989L1.18251 2.83289C-0.816375 1.71311 0.0922041 -0.417512 1.18251 0.0718375C5.81211 2.4114 7.9627 3.56333 8.10108 4.48487C8.24112 5.40819 8.48451 7.63168 8.48451 7.63168V7.64597C8.51286 7.63704 8.53286 7.63168 8.53286 7.63168C8.53286 7.63168 22.7301 7.63168 25.5975 7.63168C27.6581 7.63168 26.8395 9.92304 26.8395 9.91945ZM22.8485 14.8111L22.8201 14.8129H9.31308L9.59148 17.1775H22.1916L22.8485 14.8111ZM24.1638 10.0427H8.75458L9.05134 12.5698C12.0071 12.5698 20.6629 12.5698 23.467 12.5698L24.1638 10.0427Z"
        fill={color || "#001B4F"}
      />
    </svg>
  );
}