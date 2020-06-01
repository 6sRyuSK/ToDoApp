export const toDoList = {
  state: {
    list: [
      {
        title: 'first TODO!!!!!!!',
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
  },
  mutations: {
    setToDo (state, payload) {
      state.list.push(payload)
    }
  },
  actions: {
    setToDo ({ commit }, payload) {
      const { title, description, priority, deadLine } = payload

      const createdAt = new Date(new Date().getTimezoneOffset({ timeZone: 'Asia/Tokyo' }))
      const toDo = {
        title,
        description,
        createdAt,
        deadLine: deadLine || new Date(new Date().setDate(createdAt.getDate() + 10)),
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
      commit('setToDo', toDo)
    }
  }
}
