"use client";

import Rating from "@mui/material/Rating";
import {Product} from '@/types/Product'
import React from "react";

interface RatingIndicatorProps {
    rating: Product['rating'];
}

export const RatingIndicator: React.FC<RatingIndicatorProps> = ({ rating }) => {
    return (
        <div className="product-card__rating">
            <Rating
                name="rating"
                readOnly
                size="small"
                value={Number(rating.rate.toFixed(1))}
                precision={0.1}
                className="product-card__rating"
            />
            <p>
                {rating.rate}/5 ({rating.count})
            </p>
        </div>
    );
};