import { Star } from 'lucide-react';
import React from 'react'

type RatingProps = {
    rating: number;
}

const Rating = ({rating} : RatingProps) => {
    return [1, 2, 3, 4, 5].map((index) => ( // Fixed the syntax for map function
        <Star
            key={index}
            color={index <= rating ? "#FFC107" : "#E4E5E9"} // Fixed the color code and accessed rating via props
            className='w-4 h-4'
        />
    ));
}

export default Rating;
