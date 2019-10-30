<template>
<v-container fluid>
<!--    <v-text-field v-if="isNew" :rules="['required']"></v-text-field>-->
    <v-radio-group v-model="filterSet.gender" row>
        <v-radio label="Мужской" value="М"></v-radio>
        <v-radio label="Женский" value="Ж"></v-radio>
    </v-radio-group>
    <v-divider class="mt-3"/>
    <v-flex xs12>
<!--        <div class="text-xs-center body-2 text-uppercase sidebar-filter">Город</div>-->
        <v-select
                :items="regions"
                label="регион"
                item-text="name"
                item-value="id"
                v-model="filterSet.region_id"
                solo
        ></v-select>
    </v-flex>
    <v-flex xs12>
        <div class="text-xs-center body-2 text-uppercase">
            <div class=" sidebar-filter">
                Thank You for Sharing!
            </div>

            <div>
                <v-btn
                        color="indigo"
                        class="mr-2 v-btn-facebook"
                        fab
                        icon
                        small
                        round
                >
                    <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                        color="cyan"
                        class="v-btn-twitter"
                        fab
                        icon
                        small
                        round
                >
                    <v-icon>mdi-twitter</v-icon>
                </v-btn>
            </div>
            <div>
                <v-btn
                        color="secondary"
                        small
                        round
                >
                    Сохранить фильтр
                </v-btn>
            </div>
        </div>
    </v-flex>
</v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'FilterSet',
  props: {
    filterSet: {
      type: Object,
      default: null
    }
  },
  computed: {
    ...mapState('filter', ['regions']),
    isNew () {
      return this.filterSet.name !== 'default' && typeof this.filterSet.id === 'undefined'
    }
  },
  created () {
    this.getRegions()
  },
  methods: {
    ...mapActions('filter', ['getRegions'])
  }
}
</script>
