interface Props {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  open: boolean;
}

export default function Modal({ children, title, open, onClose }: Props) {
  if (!open) {
    return null;
  }
  return (
    <div
      className="bg-[#000a] overflow-y-auto overflow-x-hidden fixed flex-center right-0 left-0 top-0 bottom-0 z-50 justify-center items-center md:inset-0 h-modal sm:h-full flex"
      id="add-product-modal"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative px-4 w-full max-w-2xl md:h-auto flex justify-center gap-[10px] grow flex-col py-2">
        <div className="relative bg-white rounded-2xl shadow-lg">
          <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="add-product-modal"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">{children}</div>
          <div className="p-6 rounded-b border-t border-gray-200">
            <button
              className="text-white font-medium text-sm px-5 py-2.5 text-center rounded-lg bg-gradient-to-br from-green-500 to-green-700 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
              type="submit"
            >
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
