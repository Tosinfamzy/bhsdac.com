import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import useYouTubeVideos from "../hooks/useYouTubeVideos";
import PageHero from "../components/shared/PageHero";
import WhiteContainer from "../components/WhiteContainer";
import BlackContainer from "../components/BlackContainer";
import SectionHeader from "../components/shared/SectionHeader";
import CTAButton from "../components/shared/CTAButton";
import VideoEmbed from "../components/shared/VideoEmbed";
import AudioEmbed from "../components/shared/AudioEmbed";
import { FiPlay, FiRadio, FiHeadphones, FiYoutube } from "react-icons/fi";

const MediaPage = () => {
  usePageMeta();
  const { data: videos = [], isLoading: loading } = useYouTubeVideos({ maxResults: 9 });
  const [activeTab, setActiveTab] = useState("video");

  return (
    <div>
      <PageHero
        title="Media"
        subtitle="Watch. Listen. Be Inspired."
      />

      {/* Tab navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-[96px] sm:top-[112px] z-10">
        <div className="max-w-7xl mx-auto px-4 flex gap-1">
          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm border-b-2 transition-colors ${
              activeTab === "video"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <FiPlay className="w-4 h-4" />
            Video Broadcast
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`flex items-center gap-2 px-6 py-4 font-semibold text-sm border-b-2 transition-colors ${
              activeTab === "audio"
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            <FiRadio className="w-4 h-4" />
            Audio Broadcast
          </button>
        </div>
      </div>

      {/* Video Broadcast */}
      {activeTab === "video" && (
        <>
          <WhiteContainer>
            <SectionHeader
              title="Video Broadcast"
              subtitle="Watch our services live and on-demand on YouTube"
            />

            {/* Latest video */}
            {videos.length > 0 && (
              <div className="flex justify-center mb-10">
                <VideoEmbed
                  videoId={videos[0].id.videoId}
                  title={videos[0].snippet.title}
                />
              </div>
            )}

            {loading && (
              <div className="flex justify-center py-10">
                <p className="text-gray-500">Loading videos...</p>
              </div>
            )}

            {/* Past services grid */}
            {videos.length > 1 && (
              <>
                <h3 className="font-bold text-lg text-primary mb-4">
                  Recent Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.slice(1).map((video) => (
                    <a
                      key={video.id.videoId}
                      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-card overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
                    >
                      <div className="relative">
                        <img
                          src={video.snippet.thumbnails.high?.url || video.snippet.thumbnails.default.url}
                          alt={video.snippet.title}
                          className="w-full aspect-video object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <FiPlay className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-sm text-primary line-clamp-2">
                          {video.snippet.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(video.snippet.publishedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </>
            )}

            <div className="text-center mt-8">
              <CTAButton href="https://www.youtube.com/@BHSDAC">
                <span className="flex items-center gap-2">
                  <FiYoutube className="w-4 h-4" />
                  Subscribe on YouTube
                </span>
              </CTAButton>
            </div>
          </WhiteContainer>
        </>
      )}

      {/* Audio Broadcast */}
      {activeTab === "audio" && (
        <>
          <WhiteContainer>
            <SectionHeader
              title="Audio Broadcast"
              subtitle="Listen to BHBS live and our podcast on your favourite platform"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Mixlr */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiRadio className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-primary">BHBS on Mixlr</h3>
                <p className="text-gray-600 text-sm mt-2 mb-6">
                  Listen to Blessed Hope Broadcasting Service live on Mixlr
                </p>
                <AudioEmbed
                  type="mixlr"
                  embedUrl="https://mixlr.com/bhsdac/embed"
                  title="BHBS Live on Mixlr"
                />
                <div className="mt-4">
                  <CTAButton href="https://bhsdac.mixlr.com">
                    <span className="flex items-center gap-2">
                      <FiRadio className="w-4 h-4" />
                      Listen Live on Mixlr
                    </span>
                  </CTAButton>
                </div>
              </div>

              {/* Spotify */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiHeadphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-primary">Podcast on Spotify</h3>
                <p className="text-gray-600 text-sm mt-2 mb-6">
                  Catch up on sermons and teachings on Spotify
                </p>
                <AudioEmbed
                  type="spotify"
                  embedUrl="https://open.spotify.com/embed/show/7abiokbS6YzDq76TJgJdkd"
                  title="Blessed Hope SDA Church UK Podcast"
                />
                <div className="mt-4">
                  <CTAButton href="https://open.spotify.com/show/7abiokbS6YzDq76TJgJdkd">
                    <span className="flex items-center gap-2">
                      <FiHeadphones className="w-4 h-4" />
                      Follow on Spotify
                    </span>
                  </CTAButton>
                </div>
              </div>
            </div>
          </WhiteContainer>
        </>
      )}
    </div>
  );
};

export default MediaPage;
