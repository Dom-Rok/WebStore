import React from 'react'
import {Product} from '@/types/Product'
import Rating from '@mui/material/Rating';
import Image from 'next/image';
import ShoppingCartIcon from "@/public/add-to-cart-icon.svg";
import {RatingIndicator} from "@/components/RatingIndicator";
import Link from 'next/link';

export default function ProductCard(product:Product) {
    //custom elem for setting rating stars color
    // const StyledRating = styled(Rating)({
    //     '& .MuiRating-iconFilled': {
    //         color: '#ff6d75',
    //     },
    //
    // });


    return (
        <div className="product-card ">
            <Link className="cursor-pointer" href={`/products/${product.id}`}>
                <div className="relative">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="product-card__image  aspect-square"/>
                    <Image className="absolute bottom-5 left-0 shopping-cart bg-shadow hover:bg-secondary transition ease-in-out duration-500"
                           src={ShoppingCartIcon}
                           alt ="do košíka" width={48} height={48} />
                </div>
                <div className="product-card__info">
                    <h3 className="product-card__title">{product.title}</h3>
                    <RatingIndicator rating={product.rating} key={product.id} />
                    <p className="product-card__price">Od {product.price}</p>
                </div>
            </Link>
        </div>
    )
}
