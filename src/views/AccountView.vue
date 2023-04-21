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
      <button type="submit">Update Settings</button>
      <button>Logout</button>
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

<style scoped>
  .page__heading {
    font-size: 25px;
    text-align: center;
    margin: 30px 0;
    text-transform: uppercase;
  }
  .page__subheading {
    margin-bottom: 20px;
  }

  .page__description {
    margin-bottom: 40px;
  }

  .page__button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .page__button-group button {
    background-color: #da6937;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    min-width: 200px;
    margin-bottom: 20px;
  }

  .account-page__label {
    margin-bottom: 5px;
    display: block;
    font-size: 18px;
    margin-left: 10px;

  }
  .account-page__input {
    width: 100%;
    border: 1px #bebdbd solid;
    margin-bottom: 20px;
    border-radius: 20px;
    min-height: 50px;
  }

  @media only screen and (min-width: 768px) {
    .page__heading {
      font-size: 45px;
      margin: 60px 0 30px;
    }

    .page__subheading {
      margin-bottom: 40px;
      margin-left: 10px;
    }

    .account-page__input {
      margin-bottom: 40px;
    }

    .page__button-group {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
