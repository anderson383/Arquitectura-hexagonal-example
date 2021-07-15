<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-img
          :src="'https://image.tmdb.org/t/p/w500' + peliculaData.poster_path"
        ></v-img>
      </v-col>
      <v-col cols="12" md="8">
      <v-card>
        <v-card-title>
          {{peliculaData.title}}
        </v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="peliculaData.vote_average"
              color="amber"
              dense
              half-increments
              readonly
              size="19"
            ></v-rating>
            <div class="grey--text ms-4">
              {{ peliculaData.vote_average }} ({{peliculaData.vote_count}})
            </div>
          </v-row>
        </v-card-text>
        <v-card-text>
          {{peliculaData.overview}}
        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script src="./pelicula-retr.ui.ts" ></script>
