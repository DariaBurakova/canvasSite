<script setup>
import { useContacts } from '@/stores/contacts.js'

const {phone, email} = useContacts();
</script>

<template>
  <div class="header-row">

    <!-- Logo
    ============================================= -->
    <div id="logo" class="ml-auto ml-lg-0 mr-lg-auto">
      <RouterLink to="/" class="standard-logo">Canvas Logo</RouterLink>
    </div><!-- #logo end -->

    <div class="header-misc d-none d-lg-flex">

      <ul class="header-extras">
        <li>
          <i class="i-plain icon-call m-0"></i>
          <div class="he-text">
            Call Us
            <span>{{ phone }}</span>
          </div>
        </li>
        <li>
          <i class="i-plain icon-line2-envelope m-0"></i>
          <div class="he-text">
            Email Us
            <span>{{ email }}</span>
          </div>
        </li>
      </ul>

    </div>

  </div>
</template>

<style scoped>

</style>