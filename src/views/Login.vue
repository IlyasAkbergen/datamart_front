<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="secondary"
            flat
          >
            <v-toolbar-title>Datamart</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="form.email"
                :error="$v.form.email.$error"
                label="Email"
                name="login"
                type="text"
                @blur="$v.form.email.$touch"
              />

              <v-text-field
                id="password"
                v-model="form.password"
                :error="$v.form.password.$error"
                label="Пароль"
                name="password"
                type="password"
                @blur="$v.form.password.$touch"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="secondary"
              @click="submit">Войти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        remember_me: true
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  beforeCreate () {
    if (this.$store.getters['auth/authorized']) {
      this.$router.push({ name: 'dashboard' })
    }
  },
  created () {
    this.setIsLoginPage(true)
  },
  beforeDestroy () {
    this.setIsLoginPage(false)
  },
  methods: {
    ...mapMutations('app', ['setIsLoginPage']),
    ...mapActions('notify', ['notify']),
    ...mapActions('auth', ['login', 'getUser']),
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.notify({
          text: 'Неверно заполнены поля',
          color: 'warning'
        })
        return false
      }

      this.login(this.form)
        .then((res) => {
          this.$router.push({ name: 'dashboard' })
          this.getUser()
          return res
        }).catch(error => this.notify({
          text: 'Возникла ошибка: ' + error,
          color: 'danger'
        }))
    }
  }
}
</script>

<style>
</style>
