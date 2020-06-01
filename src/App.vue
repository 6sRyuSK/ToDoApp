<template>
  <div id="app">
    <create-to-do-form />
    <h1>HELLO</h1>
    <ul class="to-do-list">
      <li class="to-do-item" v-for="item in toDoList" :key="item.createdAt.getTime()">
        <h1>
          {{ item.title }}
        </h1>
        <h2>{{ item.description }}</h2>
        <h3>{{ item.priority }}</h3>
        <h3>{{ item.createdAt }}</h3>
        <h3>残り日数{{ item.getFormattedTime(nowDate) }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import createToDoForm from '@/components/createToDoForm'

export default {
  name: 'App',
  components: {
    createToDoForm
  },
  computed: {
    toDoList () {
      return this.$store.state.toDoList.list
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
