import React from 'react';

const pageSkeleton: React.FC = () => {
    return (
        <main className="container max-w-screen-desktop mx-auto px-5 2xl:px-0 animate-pulse">
            <div className="flex md:flex-row flex-col justify-between">
                {/* CategoryFilters Skeleton */}
                <div className="w-full md:w-1/4 mb-5 md:mb-0">
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="h-6 bg-gray-200 rounded w-full"></div>
                        ))}
                    </div>
                </div>

                {/* Product Grid Skeleton */}
                <div className="w-full grid md:pl-5 pt-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center ">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="product-card w-[250px]">
                            <div className="relative">
                                <div className="product-card__image aspect-square bg-gray-200 rounded"></div>
                                <div className="absolute bottom-5 left-0 h-12 w-12 bg-gray-200 rounded-full"></div>
                            </div>
                            <div className="product-card__info mt-2">
                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default pageSkeleton;