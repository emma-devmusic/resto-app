import { useCallback } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    const handlePrev = useCallback(() => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    }, [currentPage, onPageChange]);

    const handleNext = useCallback(() => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    }, [currentPage, totalPages, onPageChange]);

    const handlePageClick = useCallback(
        (page: number) => {
            if (page !== currentPage) onPageChange(page);
        },
        [currentPage, onPageChange]
    );

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li key={i}>
                    <button
                        onClick={() => handlePageClick(i)}
                        className={`block size-8 rounded-sm border ${i === currentPage
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-gray-100 bg-white text-gray-900"
                            } text-center leading-8`}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return pages;
    };

    return (
        <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
            <ol className="flex justify-start gap-1 text-xs font-medium">
                {/* Botón Anterior */}
                <li>
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`inline-flex size-8 items-center justify-center rounded-sm border ${currentPage === 1
                                ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "border-gray-100 bg-white text-gray-900"
                            } rtl:rotate-180`}
                        aria-label="Página anterior"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </li>

                {/* Números de página */}
                {renderPageNumbers()}

                {/* Botón Siguiente */}
                <li>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`inline-flex size-8 items-center justify-center rounded-sm border ${currentPage === totalPages
                                ? "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "border-gray-100 bg-white text-gray-900"
                            } rtl:rotate-180`}
                        aria-label="Página siguiente"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </li>
            </ol>
        </div>
    );
};
