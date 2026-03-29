import { useRouter } from "next/router";

export default function PaginationControls({ currentPage, totalPages }) {
  const router = useRouter();

  const page = Number(currentPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;

    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
  };

  return (
    <div className="flex gap-4 mt-8 w-full justify-center">
      <button
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
        className="px-4 py-2 bg-white border rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="py-2">
        Page {page} of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
        className="px-4 py-2 bg-white border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}