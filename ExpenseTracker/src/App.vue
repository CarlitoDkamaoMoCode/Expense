<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
  /* Global styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f9f9f9;
  }

  /* Header styles */
  header {
    background-color: #4caf50;
    color: white;
    padding: 20px;
    text-align: center;
  }

  .logo {
    display: block;
    margin: 0 auto;
    width: 125px;
    height: 125px;
  }

  /* Main content styles */
  main {
    padding: 20px;
  }

  /* Component wrapper styles */
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  /* HelloWorld component styles */
  .hello-world {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    text-align: center;
  }

  /* TheWelcome component styles */
  .welcome {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    text-align: center;
  }

  /* Responsive styles */
  @media (min-width: 1024px) {
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
    }

    .logo {
      margin-right: 20px;
    }

    .wrapper {
      justify-content: flex-start;
    }

    .hello-world,
    .welcome {
      width: calc(50% - 20px);
    }
  }
</style>
