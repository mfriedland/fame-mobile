import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
// import axios from 'axios';

const GET_ARTISTS = 'GET_ARTISTS';
const NEW_ARTIST = 'NEW_ARTIST';
const UPDATE_ARTIST = 'UPDATE_ARTIST';
const REMOVE_ARTIST = 'REMOVE_ARTIST';

const getArtists = artists => ({
    type: GET_ARTISTS,
    artists,
});

const newCampus = artist => ({
    type: NEW_ARTIST,
    artist,
});

const updateArtist = artist => ({
    type: UPDATE_ARTIST,
    artist,
});

const removeCampus = artist => ({
    type: REMOVE_ARTIST,
    artist,
});

export const fetchArtist = () => dispatch => {
    return axios.get('/api/artists')
        .then(res => res.data)
        .then(artists => dispatch(getArtists(artists)))
        .catch(err => console.error('Could not fetch artists :(', err));
};

export const postArtist = artist => dispatch => {
    return axios.post('/api/artists', artist)
        .then(res => res.data)
        .then(_artist => dispatch(newArtist(_artist)));
    //catching in component
    //.catch(err => console.error('Could not post campus :(', err))
};

export const putArtist = artist => dispatch => {
    return axios.put(`/api/artists/${artist.id}`, artist)
        .then(res => res.data)
        .then(_artist => dispatch(updateArtist(_artist)))
        .catch(err => console.error('Could not put artist :(', err));
};

export const deleteArtist = artist => dispatch => {
    return axios.delete(`/api/artists/${artist.id}`, { id: artist.id })
        .then(deleted => {
            if (deleted.data) {
                dispatch(removeArtist(artist));
            } else {
                console.error(`the entered campus id (${artist.id}) could not be deleted`);
            }
        })
        .catch(err => console.error('Could not delete artist :(', err));
};


export default artistsReducer = (artists = [], action) => {

    switch (action.type) {

        case GET_ARTISTS:
            return action.artists;

        case NEW_ARTIST:
            return [...artists, action.artis];

        case UPDATE_ARTIST:
            return artists.map(artist => (
                artist.id === action.artist.id ? action.artist : artist
            ));

        case REMOVE_ARTIST:
            return artists.filter(artist => (
                artist.id !== action.artist.id
            ));

        default:
            return artists;
    }
};
