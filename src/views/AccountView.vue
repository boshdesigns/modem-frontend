<template>
  <main class="modem-site-container">
    <h1 class="page__heading">Account</h1>
    <h2 class="page__subheading">Please enter your current password to validate any changes</h2>
    <form @submit.prevent="handleSubmit" class="account-page__form">
      <div>
        <label for="current-password" class="account-page__label">Current Password</label>
        <input id="current-password" class="account-page__input" type="password" v-model="currentPassword" required>
      </div>
      <div>
        <label for="full-name" class="account-page__label">Full Name</label>
        <input id="full-name" class="account-page__input" type="text" v-model="fullName" required>
      </div>
      <div>
        <label for="email" class="account-page__label">Email</label>
        <input id="email" class="account-page__input" type="email" v-model="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
      </div>
      <div>
        <label for="new-password" class="account-page__label">New Password</label>
        <input id="new-password" class="account-page__input" type="password" v-model="newPassword" required>
      </div>
      <div>
        <label for="confirm-password" class="account-page__label">Confirm Password</label>
        <input id="confirm-password" class="account-page__input" type="password" v-model="confirmPassword" required>
      </div>
    </form>
    <section class="page__button-group">
      <GenericButton text="Update Settings" type="submit" />
      <GenericButton text="Logout" />
    </section>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        currentPassword: '',
        fullName: '',
        email: '',
        newPassword: '',
        confirmPassword: ''
      }
    },
    methods: {
      handleSubmit() {
        // handle form submission logic
      }
    }
  }
</script>

<script setup>
  import GenericButton from '../components/generic/GenericButton.vue';
</script>