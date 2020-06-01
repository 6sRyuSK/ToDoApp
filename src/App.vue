<template>
  <div id="app">
    <create-to-do-form :pushToDo="receiveToDo" />
    <h1>HELLO</h1>
    <ul class="to-do-list">
      <li class="to-do-item" v-for="item in toDoList" :key="item.createdAt.getTime()">
        <h1>
          {{ item.title }}
        </h1>
        <h2>{{ item.description }}</h2>
        <h3>{{ item.priority }}</h3>
        <h3>{{ item.createdAt }}</h3>
        <h3>残り日数{{ item.getFormattedTime() }}</h3>
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
  data () {
    return {
      toDoList: []
    }
  },
  methods: {
    receiveToDo (title, description, priority, deadLine) {
      const createdAt = new Date(new Date().getTimezoneOffset({ timeZone: 'Asia/Tokyo' }))
      console.log(createdAt)
      if (!deadLine) deadLine = new Date(new Date().setDate(createdAt.getDate() + 10))
      console.log(deadLine)
      const toDo = {
        title,
        description,
        createdAt,
        deadLine,
        priority,
        getLastDay () {
          const lastDay = this.deadLine.getTime() - (new Date().getTime() + 9 * 60 * 60 * 1000)
          return new Date(lastDay)
        },
        getFormattedTime () {
          const time = this.getLastDay().toLocaleTimeString()
          const date = this.getLastDay().getDate()
          const month = this.getLastDay().getMonth()
          return `${month} / ${date} / ${time}`
        }
      }
      this.toDoList.push(toDo)
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
