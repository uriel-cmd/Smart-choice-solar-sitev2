import { GoogleReviewCard } from "@/components/google-review-card";
import { googleReviews } from "@/lib/site";

export function GoogleReviewsList({ limit }: { limit?: number }) {
  const reviews = limit ? googleReviews.slice(0, limit) : googleReviews;
  const loopedReviews = [...reviews, ...reviews];
  const duration = Math.max(30, reviews.length * 10);

  return (
    <div className="reviews-marquee h-[980px] md:h-[1100px]" style={{ ["--reviews-duration" as string]: `${duration}s` }}>
      <div className="reviews-marquee-track">
        {loopedReviews.map((review, index) => (
          <GoogleReviewCard key={`${review.name}-${review.timeAgo}-${index}`} {...review} />
        ))}
      </div>
    </div>
  );
}
