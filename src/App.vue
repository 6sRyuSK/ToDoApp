<template>
  <div id="app">
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
export default {
  name: 'App',
  data () {
    return {
      toDoList: [
        {
          title: 'first TODO',
          description: 'first time',
          createdAt: new Date('2020-06-01 17:42'),
          deadLine: new Date('2020-06-11 17:42'),
          priority: 'high',
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
        },
        {
          title: '2nd TODO',
          description: '2nd time',
          createdAt: new Date('2020-06-02 17:42'),
          deadLine: new Date('2020-06-01 19:10:00'),
          priority: 'low',
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
      ]
    }
  },
  created () {
    console.log(this.toDoList[0].createdAt)
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
