import { VIDEO_BASE_URL, VIDEO_API_KEY, VIDEO_PLAYLIST_ID } from "../app.const";

export function fetchVideosDataSuccess(videos) {
    return {
        type: "VIDEOS_FETCH_DATA_SUCCESS",
        videos
    }
}

const baseURL = new URL(VIDEO_BASE_URL);
const params = {
    part: "snippet,contentDetails",
    maxResults: 50,
    playlistId: VIDEO_PLAYLIST_ID,
    key: VIDEO_API_KEY,
};
Object.keys(params).forEach(key => baseURL.searchParams.append(key, params[key]));

export function fetchVideosData() {
    return async (dispatch) => {
         const data = await fetch(baseURL);
         const response = await data.json();
         dispatch(fetchVideosDataSuccess(response));
    }
}
