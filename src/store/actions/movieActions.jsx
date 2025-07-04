import {loadMovie } from '../reducers/movieSlice';
import axios from '../../utils/axios';

export const loadMovieAsync = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const watchprovider = await axios.get(`/movie/${id}/watch/providers`);

        const theultimatedata = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t)=>t.english_name),
            videos: videos.data.results.find( m => m.type === "Trailer"),
            watchprovider: watchprovider.data.results.IN
        };

        

        // Dispatch the action to load the movie data
        dispatch(loadMovie(theultimatedata));

        // console.log(theultimatedata);

    } catch (error) {
        console.log("Error", error);
    }
};
