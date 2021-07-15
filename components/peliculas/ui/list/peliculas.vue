<template>
  <div>
    <v-row class="px-4">
      <div class="cols col-3" v-for="(item, index) in listadoPeliculas" :key="index">
        <v-card class="mx-auto my-6">
          <v-img height="250" :src="'https://image.tmdb.org/t/p/w500' + item.backdrop_path"></v-img>
          <v-card-title>{{item.title}}</v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="item.vote_average"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">
                {{ item.vote_average }} ({{item.vote_count}})
              </div>
            </v-row>
            <div class="my-4 text-subtitle-1">
              {{item.original_language}} - {{item.release_date}}
            </div>
            <div>{{item.overview.slice(0, 200)}}</div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text :to="'/peliculas/' + item.id">
              Ver pelicula
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-model="paginateData.page"
        :length="paginateData.total_pages"
        :total-visible="10"
        @input="paginatePage"
      ></v-pagination>
    </div>
  </div>
</template>
<script src="./peliculas.ui.ts" ></script>
<style src="./peliculas.css" ></style>
