<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>Image app</h2>
      </div>
    </v-app-bar>

    <v-main>
      <FacilityImages />
    </v-main>
  </v-app>
</template>

<script>
import FacilityImages from './components/FacilityImages'

export default {
  name: 'App',

  components: {
    FacilityImages,
  },

  data: () => ({
    //
  }),
}
</script>
