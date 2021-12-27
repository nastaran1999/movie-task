export default {
  name: 'movie-detail',

  data() {
    return {
        movie: null,
        credits: null
    }
  },

  methods: {
    backToMain: function() {
        this.$router.push({ name: 'main-page' })
    }
  },

  computed: {
    imgAddress: function() {
        return 'https://image.tmdb.org/t/p/original' + this.movie.poster_path
    },

    movieGenre: function() {
        return this.movie.genres.map( genre => {
            return genre.name
        } ).toString()
    },

    IMDBLink: function() {
        return 'https://www.imdb.com/title/' + this.movie.imdb_id
    },

    movieCredits: function() {
        return this.credits.sort(function (a, b) {
            return a.popularity - b.popularity;
        }).map( cast => { return cast.name } ).slice(0, 10).toString();
    }
  },

  validations: {
  },

  async created() {
    try {
        this.movie = await this.$store.dispatch('fetch_movie', this.$route.query.movieId)
        this.credits = await this.$store.dispatch('fetch_movie_credit', this.$route.query.movieId)
    } catch (error) {
        console.log("movies created err?", error);
        throw error
    }
  },

  destroyed() {
  }

}