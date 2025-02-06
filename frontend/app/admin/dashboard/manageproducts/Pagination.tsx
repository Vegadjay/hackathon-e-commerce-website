import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ pageCount, currentPage, setCurrentPage }:{
	pageCount: number;
	currentPage: number;
	setCurrentPage: (page: number) => void;
}) => {
	const visiblePages = 5; // Number of pages to display at a time
	let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
	let endPage = Math.min(pageCount, startPage + visiblePages - 1);

	if (endPage - startPage < visiblePages - 1) {
		startPage = Math.max(1, endPage - visiblePages + 1);
	}

	return (
		pageCount > 1 && (
			<div className="flex justify-center mt-8">
				<nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
					{/* Previous Button */}
					<button
						onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
						disabled={currentPage === 1}
						className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
					>
						<span className="sr-only">Previous</span>
						<ChevronLeft className="h-5 w-5" aria-hidden="true" />
					</button>

					{/* First Page */}
					{startPage > 1 && (
						<>
							<button
								onClick={() => setCurrentPage(1)}
								className="px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
							>
								1
							</button>
							{startPage > 2 && <span className="px-3 py-2">...</span>}
						</>
					)}

					{/* Visible Page Numbers */}
					{[...Array(endPage - startPage + 1)].map((_, index) => {
						const pageNumber = startPage + index;
						return (
							<button
								key={pageNumber}
								onClick={() => setCurrentPage(pageNumber)}
								className={`px-4 py-2 border text-sm font-medium ${currentPage === pageNumber
										? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
										: 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
									}`}
							>
								{pageNumber}
							</button>
						);
					})}

					{/* Last Page */}
					{endPage < pageCount && (
						<>
							{endPage < pageCount - 1 && <span className="px-3 py-2">...</span>}
							<button
								onClick={() => setCurrentPage(pageCount)}
								className="px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
							>
								{pageCount}
							</button>
						</>
					)}

					{/* Next Button */}
					<button
						onClick={() => setCurrentPage(Math.min(currentPage + 1, pageCount))}
						disabled={currentPage === pageCount}
						className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
					>
						<span className="sr-only">Next</span>
						<ChevronRight className="h-5 w-5" aria-hidden="true" />
					</button>
				</nav>
			</div>
		)
	);
};

export default Pagination;
