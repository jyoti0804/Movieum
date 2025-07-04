import { loadTv } from '../reducers/tvSlice';
// import { removeTv } from '../reducers/tvSlice';
import axios from '../../utils/axios';

export const loadTVShowAsync = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const watchprovider = await axios.get(`/tv/${id}/watch/providers`);

        const theultimatedata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t) => t.english_name),
            videos: videos.data.results.find(m => m.type === "Trailer"),
            watchprovider: watchprovider.data.results.IN
        };

        // Dispatch the action to load the TV show data
        dispatch(loadTv(theultimatedata));

        // console.log(theultimatedata);

    } catch (error) {
        console.log("Error", error);
    }
};
