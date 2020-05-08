// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"hello MINA",
    num:10000,
    isGirl:true,
    person:{
      name:"张三",
      age:18,
      sex:"male"
    },
    list:[
      {
        name:"张三",
        age:12,
        sex:"male",
        id:1
      },
      {
        name:"李四",
        age:18,
        sex:"male",
        id:2
      },
      {
        name:"王五",
        age:28,
        sex:"male",
        id:3
      }
    ],
    inputValue:0,
  },

  inputAction(value){
    console.log(value.detail.value);
    this.setData({
      inputValue : value.detail.value
    })
  },

  tapAction(e){
    console.log(e.currentTarget.dataset.tag);
    this.setData({
      inputValue : this.data.inputValue+(e.currentTarget.dataset.tag == 1 ? 1 : -1)
    })
  },
  swiperAction(e){
    console.log(e);
  },
  radioBindChange(e){
    console.log(e);
    
  },
  checkboxBindChange(e){
    console.log(e);
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})