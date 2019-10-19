// pages/home/home.js
let data = require('../../data/script-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeArr: {},
    autoplay: false,// 默认不自动切换
    circular: false// 默认不衔接滑动
  },

  /**
   * 设置轮播图自动切换
   */
  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  /**
   * 设置轮播图衔接滑动
   */
  changeAutoplay() {
    this.setData({
      circular: !this.data.circular
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      homeArr: data.script_data
    })
  },

  /**
   * 点击跳转到detail详情页
   * wx.navigateTo 页面隐藏（可回退）
   * wx.redirectTo 页面卸载（不可回退）
   */
  toDetail(event) {
    // 获取点击跳转的下标的
    let index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index
    })
  },

  /**
   * 点击轮播图跳转到detail详情页
   */
  carouselToDetail(event) {
    let index = event.target.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index
    })
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
