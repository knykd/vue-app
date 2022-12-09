Vue.createApp({
  data: function(){
    return {
      todoTitle: '',
      todoDescription: '',
      todoCategory: [],
      selectedCategory: [],
      hideDoneTodo: false,
      searchWord: '',
      order: 'desc',
    }
  },
}).mount('#app')