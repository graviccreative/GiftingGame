import type { GiftCardData } from '../types/gift';
import './GiftCard.css';

interface GiftCardProps {
  face: 'front' | 'back';
  data?: GiftCardData;
}

export default function GiftCard({ face, data }: GiftCardProps) {
  return (
    <div className="gift-card">
      {face === 'back' ? (
        <div className="card-back">
          <div className="card-back-pattern" />
          <div className="card-back-flourish tl" />
          <div className="card-back-flourish tr" />
          <div className="card-back-flourish bl" />
          <div className="card-back-flourish br" />
          <div className="card-back-corner tl" />
          <div className="card-back-corner tr" />
          <div className="card-back-corner bl" />
          <div className="card-back-corner br" />
          <div className="card-back-inner">
            <div className="card-back-diamond" />
            <div className="card-back-text">?</div>
            <div className="card-back-diamond" />
            <div className="card-back-subtitle">La Sultana</div>
          </div>
        </div>
      ) : (
        <div className="card-front">
          {data?.image && (
            <img
              src={data.image}
              alt={data.title}
              className="card-front-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
          <div className="card-front-placeholder" />
          <div className="card-front-title">
            <h2>{data?.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
