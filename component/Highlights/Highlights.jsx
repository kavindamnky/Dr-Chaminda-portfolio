import React from "react";

const HighlightsGallery = () => {
  const highlights = [
    {
      id: 1,
      title:
        "Honored to welcome H.E. Akio Isomata, Ambassador of Japan, to Lanka Hospitals. Celebrating friendship and future collaboration.",
      image:
        "https://cdn.discordapp.com/attachments/1114968798827659355/1413625147461603408/Screenshot_2025-09-06_021032.png?ex=68bc9c83&is=68bb4b03&hm=ad2e316893c2da67d06cea2213d10958cade93f4c9f5079fa7bb9bef1762ec69&",
    },
    {
      id: 2,
      title:
        "Mega event launching Trauma and home care project with the presence of health minister and minister tourism",
      image:
        "https://cdn.discordapp.com/attachments/1114968798827659355/1413625147818115245/Screenshot_2025-09-06_021042.png?ex=68bc9c83&is=68bb4b03&hm=21d7a2de3469116de5a39c1a82557f3f7e13068e43f84c160e250809ea03b417&",
    },
    {
      id: 3,
      title: "Lanka Hospital phlebotomy certificate awarding ceremony",
      image:
        "https://cdn.discordapp.com/attachments/1114968798827659355/1413625148157984940/Screenshot_2025-09-06_021052.png?ex=68bc9c83&is=68bb4b03&hm=cb5cfb362a2e814924580c8a2c7d98ce7c147c42c85e5d7baca285066390d7b6&",
    },
    {
      id: 4,
      title: "Asiri Hospital - Operations Team",
      image:
        "https://cdn.discordapp.com/attachments/1114968798827659355/1413625148723953765/Screenshot_2025-09-06_021059.png?ex=68bc9c83&is=68bb4b03&hm=ffa261abdf9652aaa0dbe7319ef11c4f07a243c6f192464be279692e9b761d56&",
    },
    {
      id: 5,
      title: "Lanka Hospital Nurses capping Awarding day",
      image:
        "https://cdn.discordapp.com/attachments/1114968798827659355/1413625149529391104/Screenshot_2025-09-06_021106.png?ex=68bc9c83&is=68bb4b03&hm=af5c5238927f03975a28038200d4d5690d05c5012bbca9bf4207f202a4d7c100&",
    },
    {
      id: 6,
      title: "ITN Cancer Program",
      image:
        "https://cdn.discordapp.com/attachments/1114968798827659355/1413625150049357894/Screenshot_2025-09-06_021112.png?ex=68bc9c83&is=68bb4b03&hm=89a89463778676b2783b156cbc809cd3e932fa9709a54eeff3e4b38336214007&",
    },
  ];

  return (
    <div id="highlights" className="min-h-screen bg-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-center text-[#00436D] mb-12">
            Highlights & <span className="text-gray-900">Special Moments</span>
          </h1>
        </div>

        {/* Gallery Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gray-300">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback placeholder */}
                <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-500">Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-800 text-sm leading-relaxed font-medium text-center">
                  {highlight.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighlightsGallery;
