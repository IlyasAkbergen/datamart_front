<template>
  <v-menu
    :close-on-content-click="false"
    bottom
    left
    min-width="300"
    max-width="300"
    nudge-left="12"
    offset-x
    transition="slide-y-transition"
  >
    <v-btn
      slot="activator"
      class="elevation-0"
      color="grey"
      dark
      fab
      fixed
      style="top: 96px;"
      top
    >
      <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-card>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase sidebar-filter">Фильтры</div>
<!--  TODO -->
<!--              <v-select-->
<!--                        :items="filter_sets"-->
<!--                        label="Комбинации фильтров"-->
<!--                        item-text="name"-->
<!--                        :item-value="function(item) {-->
<!--                          return item-->
<!--                        }"-->
<!--                        v-model="selected_filter_set"-->
<!--                        @input="setFilterSet(selected_filter_set)"-->
<!--                        solo-->
<!--              ></v-select>-->

            <div class="text-center text-uppercase sidebar-filter">
              <label>Период</label>
              <datepicker :bootstrap-styling="true"
                          v-model="filter_set.from"
                          format="yyyy-MM-dd"></datepicker>
              <datepicker v-model="filter_set.to" format="yyyy-MM-dd"></datepicker>
            </div>

            <div>
            </div>
            <v-divider class="mt-3"/>
          </v-flex>

          <filter-set :filter-set="filter_set"></filter-set>

          <v-flex xs12>
            <div class="text-xs-center body-2 text-uppercase">
              <v-btn
                      color="secondary"
                      small
                      round
                      :disabled="reportsloading"
                      @click="commitFilters()"
              >
                Применить
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script>
// Utilities
import {
  mapMutations,
  mapState,
  mapActions
} from 'vuex'

import FilterSet from './FilterSet.vue'

export default {
  components: {
    FilterSet
  },
  data: () => ({
    from_menu: false,
    to_menu: false
    // selected_filter_set: 'default',
  }),

  computed: {
    ...mapState('app', ['image', 'color']),
    ...mapState('filter', [
      'filter_sets',
      'filter_set'
    ]),
    ...mapState('report', ['reportsloading'])
    // color () {
    //   return this.$store.state.app.color
    // }
  },
  methods: {
    ...mapActions('report', ['getGeneralReport']),
    ...mapActions('filter', ['getRegions']),
    ...mapMutations('app', ['setImage']),
    ...mapMutations('filter', ['setFilterSet']),
    // setColor (color) {
    //   this.$store.state.app.color = color
    // },
    commitFilters () {
      this.getGeneralReport(this.filter_set)
    }
  }
}
</script>

<style lang="scss">
  .v-avatar,
  .v-responsive {
    cursor: pointer;
  }
</style>
