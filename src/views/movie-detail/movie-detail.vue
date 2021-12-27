<template>
  <div v-if="movie" dir="ltr" class="movie-detail-container">
    <div class="header-div">
        <b-button variant="primary" class="back-button" @click="backToMain()">
            <b-icon-arrow-left></b-icon-arrow-left>
            back
        </b-button>
        <div class="movie-summery">
            <span class="movie-title"> {{ movie.title }} </span>
            <span class="movie-tagline"> {{ movie.tagline }} </span>
        </div>
    </div>
    <div class="upper-div">
        <img :src="imgAddress" />
        <div class="upper-right-info">
            <div class="info-wrapper">
                <span class="info-title">Budget</span>
                <span class="info-value">${{ movie.budget }}</span>
            </div>
            <div class="info-wrapper">
                <span class="info-title">Revenue</span>
                <span class="info-value">${{ movie.revenue }}</span>
            </div>
            <div class="info-wrapper">
                <span class="info-title">Release Date</span>
                <span class="info-value">{{ movie.release_date }}</span>
            </div>
            <div class="info-wrapper">
                <span class="info-title">Runtime</span>
                <span class="info-value">{{ movie.runtime }}</span>
            </div>
            <div class="info-wrapper">
                <span class="info-title">Score</span>
                <span class="info-value">{{ movie.vote_average }} ( {{ movie.vote_count }} ) </span>
            </div>
            <div class="info-wrapper">
                <span class="info-title">Genres</span>
                <span class="info-value">{{  movieGenre }} </span>
            </div>
            <div class="info-wrapper">
                <span class="info-title">IMDB Link</span>
                <span class="info-value"><a :href="IMDBLink">Link</a></span>
            </div>
            <div class="info-wrapper">
                <span class="info-title">Homepage</span>
                <span class="info-value"><a :href="movie.homepage">Link</a></span>
            </div>
        </div>
    </div>
    <p> {{ movie.overview }} </p>
    <div v-if="credits" class="movie-credit">
        <span class="credit-header">Credit:</span>
        <span class="credit-data">{{ movieCredits }}</span>
    </div>
  </div>
</template>
<script src="./movie-detail.js"></script>
<style src="./movie-detail.scss" lang="scss" scoped></style>