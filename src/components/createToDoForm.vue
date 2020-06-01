<template>
  <div>
    <input type="text" v-model="title">
    <input type="text" v-model="description">
    <input type="text" v-model="priority">
    <input type="button" value="create" @click="createToDo">
  </div>
</template>

<script>
export default {
  name: 'createToDoFrom',
  data () {
    return {
      title: '',
      description: '',
      priority: ''
    }
  },
  methods: {
    createToDo () {
      const payload = {
        title: this.title,
        description: this.description,
        priority: this.priority
      }
      this.$store.dispatch('setToDo', payload)
    }
  }
}
</script>

<style>

</style>
