const DBU = require('DBUtility');

cc.Class({
    extends: cc.Component,

    properties: {
        content: {
            default: null,
            type: cc.Node,
            displayName: '内容'
        },
    },
    sendFeedBack(){
        let data={
            appKey:cc.publicParameter.appKey,
            token:cc.publicParameter.token,
            feedbackContent:this.content.getComponent(cc.EditBox).string
        }
        DBU.setSign(data);
        DBU.sendPostRequest('/hmmj-restful/player/feedback/addFeedback',data,res=>{
            cc.publicMethod.hint(res.message);
        },err=>{
            cc.publicMethod.hint(err.message);
        },cc.publicParameter.infoUrl);
    }
});
