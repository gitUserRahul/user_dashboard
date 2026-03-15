import type { paginationProps } from "@/types/posts";

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
}: paginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-6 py-6  [&>button]:text-white [&>button]:p-2 [&>button]:rounded-lg">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="bg-black"
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, i) => {
        const pageNum = i + 1;
        return (
          <button
            className={currentPage === pageNum ? "bg-gray-400" : "bg-black"}
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}
      <button
        disabled={currentPage === totalPages}
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
        className="bg-black"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
