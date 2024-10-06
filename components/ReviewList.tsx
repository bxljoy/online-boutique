import { StarIcon } from 'lucide-react';

interface Review {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}

interface ReviewListProps {
  reviews: Review[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4">
          <div className="flex items-center mb-2">
            <div className="flex mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-5 h-5 ${
                    star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-semibold">{review.author}</span>
            <span className="text-gray-500 ml-2">{review.date}</span>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}