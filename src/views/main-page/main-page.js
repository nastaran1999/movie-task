import { mapGetters } from "vuex";

export default {
  name: 'features-dashboard',

  data() {
    return {
        startDate: null,        
        endDate: null,     
        
        perPage: 20,
        currentPage: 1,
        rows: 10000
    }
  },

  watch: {
    currentPage: {
      handler: async function(value) {
        let params = null
        if( this.startDate != null && this.endDate != null){
            params = { page: value,
                'release_date.gte': this.startDate,
                'release_date.lte': this.endDate
            }
        }else{
            params = { page: value }
        }
        await this.$store.dispatch('fetch_movies', params)
      }
    }
  },

  methods: {
    filterByDate: async function() {
        if( this.startDate != null && this.endDate != null){
            this.currentPage = 1
            await this.$store.dispatch('fetch_movies', { page: this.currentPage,
                                                         'release_date.gte': this.startDate,
                                                         'release_date.lte': this.endDate
                                                        })
        }
    }
  },

  computed: {
    ...mapGetters(['get_movies']),
    showResultNum: function() {
        return ( this.currentPage * 20 - 19 ) + '-' + ( this.currentPage * 20 )
    }
  },

  validations: {
  },

  created() {
      (async () => {
        try {
            await this.$store.dispatch('fetch_movie_genres')
            await this.$store.dispatch('fetch_movies', { page: this.currentPage } )
        } catch (error) {
            console.log("movies created err?", error);
            throw error
        }
    })()
  },

  destroyed() {
  }

}