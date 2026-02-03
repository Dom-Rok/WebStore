// ProductPageSkeleton.tsx
import React from 'react';

const ProductPageSkeleton: React.FC = () => {
    return (
        <div className="container mx-auto animate-pulse">
            {/* Breadcrumb */}
            <div className="text-gray-400">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            </div>

            {/* Main content */}
            <div className="container bg-white mx-auto flex p-5 justify-center">
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
                    {/* Image section */}
                    <div className="flex-shrink-0 md:w-[40%] w-full flex justify-center">
                        <div className="bg-gray-200 w-[300px] h-[300px] max-h-[400px] rounded"></div>
                    </div>

                    {/* Product details */}
                    <div className="md:w-[60%] w-full">
                        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                        <div className="h-10 bg-gray-200 rounded w-1/3 mt-6 ml-auto"></div>
                    </div>
                </div>
            </div>

            {/* Suggested Items */}
            <div className="container mx-auto mt-8">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-gray-200 h-64 rounded"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPageSkeleton;