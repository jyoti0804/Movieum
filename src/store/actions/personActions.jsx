import { loadPerson } from '../reducers/personSlice';
import axios from '../../utils/axios';

export const loadPersonAsync = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);

        const theUltimateData = {
            detail: detail.data,
            externalid: externalid.data,
            movieCredits: movieCredits.data.cast,
            tvCredits: tvCredits.data.cast,
            combinedCredits: combinedCredits.data
        };

        // Dispatch the action to load the person data
        dispatch(loadPerson(theUltimateData));

        // console.log(theUltimateData);

    } catch (error) {
        console.log("Error", error);
    }
};
