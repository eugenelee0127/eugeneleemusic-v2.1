import { FaSpotify, FaAmazon, FaYoutube } from 'react-icons/fa';

export default function AlbumCard({ album }) {
  const { title, releaseDate, cover } = album;
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5">
      <div className="aspect-square bg-neutral-200 flex items-center justify-center relative">
        {cover ? (
          <img
            src={cover}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.remove();
            }}
          />
        ) : null}
        <div className="text-neutral-400 text-xs p-6 text-center leading-4 select-none">
          
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-neutral-600 mt-1">{releaseDate}</p>
        <div className="flex items-center gap-2 mt-3 text-sm">
          <span className="text-neutral-500">Listen on</span>
          <a
            href="https://open.spotify.com/artist/37tG8lF6Kh3cpf6tfvEHsA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-neutral-100"
            aria-label="Spotify"
          >
            <FaSpotify className="w-5 h-5" />
          </a>
          <a
            href="https://www.amazon.fr/-/en/Eugene-Lee/dp/B0DK2H79ZS"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-neutral-100"
            aria-label="Amazon Music"
          >
            <FaAmazon className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=OLAK5uy_lUG6lmj8KOKkDQjsvs8VwLl8vBetI8rT0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-neutral-100"
            aria-label="YouTube Music"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}