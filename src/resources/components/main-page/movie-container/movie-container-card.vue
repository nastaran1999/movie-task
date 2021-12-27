<template>
    <div class="movie-card-container" @click="openMovieDetail()">
        <img :src="imgAddress" />
        <div class="movie-info-wrapper">
            <span class="movie-title">{{ movieDetails.title }}</span>
            <div class="movie-info">
                <div class="movie-release-date">
                    <b-icon-calendar2-date class="date-icon"></b-icon-calendar2-date>
                    <span> {{ movieDetails.release_date }} </span>
                </div>
                <div class="movie-genre">
                    {{ movieGenre }}
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./movie-container-card.js"></script>
<style src="./movie-container-card.scss" lang="scss" scoped></style>