// pages/detail/detail.js
let data = require('../../data/script-data.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailArr: {},
    index: null,
    ellipsis: true,// 文字展开或收起，默认收起
    isCollected: false// 是否收藏，默认为否
  },

  /**
   * 收起/展开按钮点击事件
   */
  ellipsis: function () {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },

  /**
   * 收藏按钮点击事件
   */
  handleCollection() {
    let isCollected = !this.data.isCollected;
    // 更新状态
    this.setData({
      isCollected
    })

    // 收藏/取消收藏用户提示
    let title = isCollected ? '收藏成功' : '取消收藏';
    wx.showToast({
      title,
      icon: 'success'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:

      function (options) {
        // 获取参数值
        let index = options.index;
        // 更新data中detailArr的状态值
        this.setData({
          detailArr: data.script_data[index],
          index
        })
      }

  ,

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
  ,

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
  ,

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  }
  ,

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  }
  ,

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
  ,

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
  ,

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
