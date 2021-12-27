import { mapGetters } from "vuex";

export default {
    name: 'main-page-container',
    
    props: {
        movieDetails: {
            type: Object,
            default: {}
        },
    },

    data() {
        return{
        }
    },

    created() {
        // console.log(this.movieDetails)
    },

    computed: {
        ...mapGetters(['get_genres']),
        imgAddress: function() {
            return 'https://image.tmdb.org/t/p/original' + this.movieDetails.poster_path
        },
        movieGenre: function() {
            return this.movieDetails.genre_ids.map( genreNumber => {
                for (let index = 0; index < this.get_genres.length; index++) {
                    if( this.get_genres[index].id === genreNumber ){
                        return this.get_genres[index].name + " ";
                    }
                }
            }).toString()
        }

        // 
    },
    
    methods: {
        openMovieDetail(){
            this.$router.push({ name: 'movie-detail', query:{ movieId: this.movieDetails.id } })
        }
    }
}