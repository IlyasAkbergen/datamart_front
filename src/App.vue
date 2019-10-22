<template>
  <v-app>
    <core-filter v-if="!isLoginPage"/>

    <core-toolbar v-if="!isLoginPage"/>

    <core-drawer v-if="!isLoginPage"/>

    <core-view />

    <v-snackbar
      :color="color"
      :bottom="bottom"
      :top="top"
      :left="left"
      :right="right"
      v-model="showSnackbar"
      dark
    >
      <v-icon
        color="white"
        class="mr-3"
      >
        mdi-bell-plus
      </v-icon>
      <div>{{ message }}</div>
      <v-icon
        size="16"
        @click="showSnackbar = false"
      >
        mdi-close-circle
      </v-icon>
    </v-snackbar>
  </v-app>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapGetters('auth', ['getToken']),
    ...mapState('app', ['isLoginPage']),
    ...mapState('notify', [
      'message',
      'color',
      'top',
      'bottom',
      'left',
      'right',
      'snackbar'
    ]),
    showSnackbar: {
      get () { return this.snackbar },
      set (value) { this.$store.commit('notify/SET_SNACKBAR', value) }
    }
  },
  beforeCreate () {
    if (!this.$store.getters['auth/authorized']) {
      this.$router.push({ name: 'login' })
    }
  },
  created () {
    this.$router.beforeEach((to, from, next) => {
      if (to.matched.some(m => m.meta.requiresAuth)) {
        if (!this.$store.getters['auth/authorized']) {
          next({ name: 'login' })
        } else {
          next()
        }
      } else {
        next()
      }
    })
    this.$axios.interceptors.request.use(
      config => {
        config.headers.Authorization = this.getToken
        return config
      },
      error => Promise.reject(error)
    )
    this.$axios.interceptors.response.use(response => {
      if (typeof response.headers.newauthorization !== 'undefined') {
        this.$store.commit('auth/setToken', response.headers.newauthorization)
      }
      return response
    }, err => {
      if (err.response.status === 401) {
        this.$store.commit('auth/delToken')
        this.$router.push({ name: 'login' })
      }
      return new Promise((resolve, reject) => {
        throw err
      })
    })
  }
}
</script>
<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
