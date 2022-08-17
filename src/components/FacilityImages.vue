<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-for="image in images" cols="4" :key="image.url">
        <v-img :src="image.url" class="my-3" contain height="200" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { storage } from '@/plugins/storage'

export default {
  name: 'FacilityImages',

  data: () => ({
    images: [],
  }),
  mounted() {
    var storageRef = storage.ref()
    storageRef
      .listAll()
      .then(
        function (res) {
          console.log('result', res)
          for (var item of res.items) {
            item.getDownloadURL().then(
              function (url) {
                console.log('url', url)
                var image = { url: url }
                this.images.push(image)
              }.bind(this),
            )
          }
        }.bind(this),
      )
      .catch(function (e) {
        console.error(e)
      })
  },
}
</script>
