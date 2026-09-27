import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { YOUTUBE_CHANNEL_ID } from "../data/constants";

const fetchVideos = async (maxResults) => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const { data } = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        part: "snippet",
        channelId: YOUTUBE_CHANNEL_ID,
        type: "video",
        order: "date",
        maxResults,
        key: apiKey,
      },
    }
  );
  return data.items || [];
};

const useYouTubeVideos = ({ maxResults = 1 } = {}) => {
  return useQuery({
    queryKey: ["youtube-videos", maxResults],
    queryFn: () => fetchVideos(maxResults),
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 1,
  });
};

export default useYouTubeVideos;
