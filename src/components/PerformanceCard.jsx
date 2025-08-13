export default function PerformanceCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-soft border border-black/5">
      <div className="aspect-video bg-neutral-200">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${item.youtubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 text-sm text-neutral-700">{item.caption}</div>
    </div>
  )
}