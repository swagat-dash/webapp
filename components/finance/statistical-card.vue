<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="default" :elevation="hover ? 3 : 1">
        <v-toolbar flat dense color="primary" dark>
          <v-toolbar-title class=" text-caption">
            {{ item.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon v-text="item.icon" color="white"></v-icon>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                class="primary--text font-weight-normal text-body-1"
                >{{ formatPrice(item.value) }}
              </v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.outlined {
  color: blue !important;
  border-color: blue !important;
}
</style>
