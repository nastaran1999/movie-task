<template>
  <div dir="ltr" class="main-container">
    <div class="search-box-wrapper">
      <h5> search by release date: </h5>
      <b-form-datepicker class="mb-2 date-picker" v-model="startDate" label-no-date-selected="select start date"></b-form-datepicker>
      <b-form-datepicker class="mb-2 date-picker" v-model="endDate" label-no-date-selected="select end date"></b-form-datepicker>
      <b-button variant="primary" class="search-button" @click="filterByDate()">search</b-button>
    </div>
    <div class="movies-wrapper">
      <movie-container-card
        v-for="(movie, index) in get_movies"
        :key="index"
        :movieDetails="get_movies[index]" 
      >
      </movie-container-card>
    </div>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      align="center"
      class="pagination"
    ></b-pagination>
    <div class="show-result">
      <span> showing results {{ showResultNum }} </span>
    </div>
  </div>
</template>
<script src="./main-page.js"></script>
<style src="./main-page.scss" lang="scss" scoped></style>