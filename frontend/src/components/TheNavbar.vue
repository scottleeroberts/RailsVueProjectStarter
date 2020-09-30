<template lang="pug">
nav.navbar.is-fixed-top(role="navigation" aria-label="main navigation")
  .container
    .navbar-brand
      RouterLink.navbar-item(to="/") Home
      a.navbar-burger.burger(role="button" aria-label="menu" aria-expanded="false" data-target="mainNavbar" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}")
        span(aria-hidden="true")
        span(aria-hidden="true")
        span(aria-hidden="true")

    #mainNavbar.navbar-menu(:class="{'is-active': isOpen}")
      .navbar-start
        RouterLink.is-tab.navbar-item(to="/about")
          span About
      .navbar-end
        .navbar-item.has-dropdown.is-hoverable
          a.navbar-link {{email}}
          .navbar-dropdown
            a.navbar-item Change Password
            hr.navbar-divider
            a.navbar-item(@click.prevent="logout") Sign Out
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheNavbar',
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    ...mapGetters('auth', [
      'email',
    ]),
  },
  watch: {
    '$route'() {
      this.close()
    },
  },
  methods: {
    close() {
      this.isOpen = false
    },
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>
