var app = new Vue({
  el:'#app',
  data:{
    newItem:"",
    todos:[]
  },
  methods:{
    addItem:function(event){
      //alert();
      if(this.newItem == '')return; //タスク未入力の場合は追加しない
      var todo = {
        item: this.newItem
      };
      this.todos.push(todo);
      this.newItem = '' //タスク追加後に入力欄を空にする
    }
  }
})
