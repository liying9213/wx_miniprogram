// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    parmas:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"首页",
        isactive:true,
      },
      {
        id:1,
        name:"热门",
        isactive:false,
      },
      {
        id:2,
        name:"精选",
        isactive:false,
      },
      {
        id:3,
        name:"其他",
        isactive:false,
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTap(e){
    }
  }
})
