/**
 * Javascript Dev Helper
 * @author 李恒名
 */
(function ($,context) {

    /**
     * 将表单序列化为JSON对象
     * @param 表单的id
     * @return JSON对象
     */
    function formToJSON(id) {
        var object = {};
        var fieldArray = $('#' + id).serializeArray();
        for (var i = 0; i < fieldArray.length; i++) {
            var field = fieldArray[i];
            if (field.name in object) {
                object[field.name] += ',' + field.value;
            } else {
                object[field.name] = field.value;
            }
        }
        return object;
    }

    /**
     * 获得HTTP GET Request URL 参数
     * @param name 参数名称
     * @returns 值
     */
    function getURLParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var result = window.location.search.substr(1).match(reg);
        if (result != null){
            return decodeURI(result[2]);
        } else{
            return null;
        }
    }

    /**
     * 点击回车按钮时触发回调函数
     * @param callback 回调函数
     */
    function  onClickEnter(callback) {
        window.document.onkeydown = function (e) {
            var ev = document.all ? window.event : e;
            ev.keyCode == 13 && callback();
        }
    }
    context.Helper = {
        info:function () {
            console.log('This Javascript Dev Helper V1.0.0');
            console.log('                  ——last add code at 2016-09-30 in Beijing');
        },
        formToJSON: formToJSON,
        getURLParam:getURLParam,
        onClickEnter:onClickEnter
    };
})(jQuery,window);

