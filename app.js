Vue.createApp({
  data: function(){
    return {
      todoTitle: '',
      todoDescription: '',
      todoCategory: [],
      hideDoneTodo: false,
      searchWord: '',
    }
  },
}).mount('#app')