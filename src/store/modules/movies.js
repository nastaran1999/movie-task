import axios from "axios"

const state = {
    movies: [],
    movie: null,
    genres: [],
}

const getters = {
    get_movies(state) {
        return state.movies
    },

    get_movie(state) {
        return state.project
    },

    get_genres(state) {
        return state.genres
    }
}

const mutations = {
    set_movies(state, newVal) {
        return state.movies = newVal
    },

    set_movie(state, newVal) {
        return state.movie = newVal
    },

    set_genres(state, newVal) {
        return state.genres = newVal
    }
}

const actions = {
    fetch_movies({ commit }, params) {
        return new Promise((resolve, reject) => {
            axios({ url: `discover/movie`, method: 'GET', params: params })
                .then(response => {
                    commit('set_movies', response.data.results)
                    resolve(response.data.results)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    fetch_movie({ commit }, id) {
        return new Promise((resolve, reject) => {
            axios({ url: `movie/${id}`, method: 'GET' })
                .then(response => {
                    commit('set_movie', response.data)
                    resolve(response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    fetch_movie_credit({ commit }, id) {
        console.log(commit)
        return new Promise((resolve, reject) => {
            axios({ url: `movie/${id}/credits`, method: 'GET' })
                .then(response => {
                    resolve(response.data.cast)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    fetch_movie_genres({ commit }) {
        return new Promise((resolve, reject) => {
            axios({ url: `genre/movie/list`, method: 'GET' })
                .then(response => {
                    commit('set_genres', response.data.genres)
                    resolve(response.data.cast)
                    
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}