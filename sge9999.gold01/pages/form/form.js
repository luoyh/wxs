var app = getApp();

Page({
    data: {
        app: app,
        codeBtnDis: false,
        codeBtnTxt: '获取验证码',
        interval: 60,
        intid: 0,
        subBtnDis: true,
        mobile: '',
        code: ''
    },
    sendcode: function(e) {
        var that = this;
        console.log(that.data.mobile);
        //this.setData({mobile: Math.random()});
        if (that.data.mobile == '' || !/^1[3|4|5|7|8][0-9]{9}$/.test(that.data.mobile)) {
            wx.showToast({
                title: '手机号码错误',
                duration: 1300
            });
        } else {
            that.setData({
                codeBtnDis: true,
                codeBtnTxt: that.data.interval + ''
            });
            that.data.intid = setInterval(function() {
                if (that.data.interval <= 0) {
                    clearInterval(that.data.intid);
                    that.setData({
                        codeBtnDis: false,
                        codeBtnTxt: '获取验证码',
                        interval: 10
                    });
                } else {
                    that.setData({
                        codeBtnTxt: (-- that.data.interval) + ''
                    });
                }
            }, 1000);
        }
    },
    inputFn: function(e) {
        this.data[e.target.dataset.value] = e.detail.value;
    },
    ok: function(e) {
        if (this.data.mobile == '' || !/^1[3|4|5|7|8][0-9]{9}$/.test(that.data.mobile)) {
            wx.showToast({
                title: '手机号错误',
                duration: 1300
            });
        } else if (this.data.code == '') {
            wx.showToast({
                title: '验证码不能为空',
                duration: 1300
            });
        } else {
            
        }
    }
});