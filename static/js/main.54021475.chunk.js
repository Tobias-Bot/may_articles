(this.webpackJsonparticle=this.webpackJsonparticle||[]).push([[0],{19:function(e,t,s){},28:function(e,t,s){},36:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var r=s(0),a=s(1),c=s.n(a),i=s(29),l=s.n(i),n=(s(36),s(8)),o=s(9),d=s(2),b=s(11),u=s(10),j=s(12),h=s(3),m=(s(19),s(15)),x=(s(37),function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).state={articles:[]},r.submitProgress=0,r.setCurrArticle=r.setCurrArticle.bind(Object(d.a)(r)),r.deleteArticle=r.deleteArticle.bind(Object(d.a)(r)),r.submitArticle=r.submitArticle.bind(Object(d.a)(r)),r}return Object(o.a)(s,[{key:"componentDidMount",value:function(){}},{key:"setCurrArticle",value:function(){var e=this.props.article;this.props.onCurrArticle(e)}},{key:"deleteArticle",value:function(){var e=this.props.article.id;this.props.onArticleDelete(e)}},{key:"submitArticle",value:function(){var e=this.props.article.id;this.props.onArticleSubmit(e)}},{key:"render",value:function(){var e=this.props.article;return Object(r.jsxs)("div",{className:"articleView",style:{backgroundColor:e.color},children:[Object(r.jsxs)("div",{className:"articleViewHeader",children:[Object(r.jsx)("button",{className:"postBtn",style:{borderColor:e.color},onClick:this.deleteArticle,children:Object(r.jsx)("i",{className:"fas fa-trash-alt"})}),Object(r.jsx)(j.b,{to:"/write",children:Object(r.jsx)("button",{className:"postBtn",style:{borderColor:e.color},onClick:this.setCurrArticle,children:"\u043e\u0442\u043a\u0440\u044b\u0442\u044c"})})]}),Object(r.jsx)("div",{className:"articleViewTitle",children:e.title.length?e.title:"\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430"}),Object(r.jsx)("div",{className:"articleViewFooter",children:e.progress<this.submitProgress?Object(r.jsx)("div",{className:"progress",style:{backgroundColor:"rgba(0, 0, 0, 0.3)",height:"15px"},children:Object(r.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.progress+"%",backgroundColor:e.color}})}):Object(r.jsx)("button",{className:"submitPostBtn",style:{borderColor:e.color},onClick:this.submitArticle,"data-toggle":"modal","data-target":"#submitModal",children:"\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})})]})}}]),s}(c.a.Component)),p=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).state={articles:[],username:"",userurl:""},r.ModalRef=c.a.createRef(),r.deleteArticleId=-1,r.submissionText="\n      \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0432\u0430\u0448\u0443 \u0437\u0430\u043f\u0438\u0441\u044c \u043f\u0435\u0440\u0435\u0434 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0435\u0439.\n      \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0435\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e.\n      <br />\n      <br />\n      \u0412\u0430\u0448\u0430 \u0437\u0430\u043f\u0438\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 \u0441\u0442\u0435\u043d\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u041c\u0430\u0439\n      \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0434\u043d\u0438 \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439.\n    ",r.userText="\n      \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f \u0438\u043b\u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u0440\u0430\n      \u0441\u0442\u0430\u0442\u044c\u0438. \u041f\u043e \u0436\u0435\u043b\u0430\u043d\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0441\u0432\u043e\u044e \u043b\u0438\u0447\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438\u043b\u0438\n      \u0433\u0440\u0443\u043f\u043f\u0443-\u0431\u043b\u043e\u0433 \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435. \u0415\u0441\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b, \u0432\u0430\u0448\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c\u0441\u044f\n      \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e.\n    ",r.infoText="\n      <h4>\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u043a \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044e \u0441\u0442\u0430\u0442\u0435\u0439</h4>\n      1. \u0422\u0435\u043c\u0430\u0442\u0438\u043a\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u0438\u043b\u044c\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u043f\u043e\u0441\u0442\u043e\u0432 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435 \u041c\u0430\u0439.\n      \u0422\u0435\u043c\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435: \u0441\u0430\u043c\u043e\u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435,\n      \u0437\u0430\u0431\u043e\u0442\u0430 \u043e \u0441\u0435\u0431\u0435, \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f, \u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u043b\u0438 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435, \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0438\u044f \u0438 \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0435.\n      \u0417\u0430\u043f\u0438\u0441\u0438 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u044b \u043d\u0430 \u0441\u0442\u0435\u043d\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430.\n      <br />\n      <br />\n      2. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u043e\u0431\u044a\u0435\u043c \u0442\u0430\u043a\u0438\u0445 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0439 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\n      \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 (6 - 8 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 \u0432 \u043f\u043e\u0441\u0442\u0435, \u0441\u043c. \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430 \u0441\u0442\u0435\u043d\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430), \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c\n      \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043c\u044b\u0441\u043b\u0438, \u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u044c.\n      <br />\n      <br />\n      3. \u0420\u0430\u0437\u0434\u0435\u043b\u044f\u0439\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0430\u0431\u0437\u0430\u0446\u044b \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438\n      \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0447\u0430\u0441\u0442\u0438. \u0412 \u0442\u0430\u043a\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u043b\u044e\u0434\u044f\u043c \u043b\u0435\u0433\u0447\u0435 \u0432\u043e\u0441\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e,\n      \u0447\u0435\u043c \u0447\u0438\u0442\u0430\u0442\u044c \u0441\u043f\u043b\u043e\u0448\u043d\u043e\u0439 \u0442\u0435\u043a\u0441\u0442.\n      <br />\n      <br />\n      4. \u0412\u044b\u0434\u0435\u043b\u044f\u0439\u0442\u0435 \u0441\u043b\u043e\u0432\u0430 \u0438\u043b\u0438 \u0441\u043b\u043e\u0432\u043e\u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0438\u043b\u0435\u0439 \u0442\u0430\u043c, \u0433\u0434\u0435 \u044d\u0442\u043e\n      \u0443\u043c\u0435\u0441\u0442\u043d\u043e, \u0434\u043b\u044f \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0433\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430.\n      <br />\n      <br />\n      <h4>\u041e\u0431\u044a\u0435\u043c \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0439</h4>\n      \u041f\u043e\u043b\u043e\u0441\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043e\u0431\u044a\u0435\u043c \u0437\u0430\u043f\u0438\u0441\u0438. \u0414\u043b\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438\n      \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u044a\u0435\u043c \u043f\u043e\u0441\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u043b > 99%. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u043b\u043e\u0441\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430\n      \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0430, \u0438 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c. \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c\n      \u0441\u0442\u0430\u0442\u044c\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0442\u044c 120%.\n      <br />\n      <br />\n      <h4>\u0410\u0432\u0442\u043e\u0440\u0441\u0442\u0432\u043e</h4>\n      \u0418\u043c\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u0438 \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u0435\u0433\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u0445 \u043f\u043e\u0434 \u043f\u043e\u0441\u0442\u043e\u043c \u0430 \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\n      \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0432 \u043f\u043e\u0441\u0442\u0435 \u0438 \u043d\u0435 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0430\n      \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u0430\u0448\u0430 \u043b\u0438\u0447\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0438\u043b\u0438 \u0433\u0440\u0443\u043f\u043f\u0430-\u0431\u043b\u043e\u0433.\n      \u0415\u0441\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431 \u0430\u0432\u0442\u043e\u0440\u0435 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b, \u0437\u0430\u043f\u0438\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430 \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u043e.\n    ",r.getSavedArticles=r.getSavedArticles.bind(Object(d.a)(r)),r.getPosts=r.getPosts.bind(Object(d.a)(r)),r.setCurrArticle=r.setCurrArticle.bind(Object(d.a)(r)),r.setNewCurrArticle=r.setNewCurrArticle.bind(Object(d.a)(r)),r.deleteArticle=r.deleteArticle.bind(Object(d.a)(r)),r.updateArticles=r.updateArticles.bind(Object(d.a)(r)),r.submitPost=r.submitPost.bind(Object(d.a)(r)),r.confirmSubmission=r.confirmSubmission.bind(Object(d.a)(r)),r.setUsername=r.setUsername.bind(Object(d.a)(r)),r.setUserUrl=r.setUserUrl.bind(Object(d.a)(r)),r}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.getSavedArticles({store:"may-articles",key:"articles"});var e=localStorage.getItem("may-username"),t=localStorage.getItem("may-userurl");e||(e=""),t||(t=""),this.setState({username:e,userurl:t})}},{key:"getSavedArticles",value:function(e){var t=this,s=indexedDB.open(e.store,1);s.onupgradeneeded=function(){var t=s.result;t.objectStoreNames.contains(e.store)||t.createObjectStore(e.store)},s.onerror=function(){console.error("Can't create DB",s.error)},s.onsuccess=function(){var r=s.result.transaction(e.store,"readonly"),a=r.objectStore(e.store).get(e.key);r.oncomplete=function(){a.result&&t.setState({articles:a.result},(function(){t.props.onArticlesLoad(a.result)}))}}}},{key:"setNewCurrArticle",value:function(e){this.props.onArticleCreate(e)}},{key:"getPosts",value:function(){var e=this;return this.state.articles.map((function(t,s){return Object(r.jsx)(x,{article:t,onCurrArticle:e.setNewCurrArticle,onArticleDelete:e.deleteArticle,onArticleSubmit:e.confirmSubmission},t.title+s)}))}},{key:"setCurrArticle",value:function(){var e=this.state.articles,t={id:e.length,title:"",text:"",progress:0,color:"white"};e.push(t),this.props.onArticlesLoad(e),this.props.onArticleCreate(t)}},{key:"deleteArticle",value:function(e){var t=this.state.articles;t.splice(e,1);for(var s=e;s<t.length;s++)t[s].id--;this.setState({articles:t}),this.props.onArticlesLoad(t),this.updateArticles({store:"may-articles",key:"articles",data:t})}},{key:"updateArticles",value:function(e){var t=indexedDB.open(e.store,1);t.onupgradeneeded=function(){var s=t.result;s.objectStoreNames.contains(e.store)||s.createObjectStore(e.store)},t.onerror=function(){console.error("Can't create DB",t.error)},t.onsuccess=function(){t.result.transaction(e.store,"readwrite").objectStore(e.store).put(e.data,e.key)}}},{key:"confirmSubmission",value:function(e){this.deleteArticleId=e}},{key:"submitPost",value:function(){var e=this.deleteArticleId,t=m.database().ref().child("articles").push().key,s=this.state.articles[e],r=localStorage.getItem("may-username"),a=localStorage.getItem("may-userurl"),c={title:s.title,text:s.text,color:s.color,username:r,userurl:a};m.database().ref("articles/article"+t).set(c),this.deleteArticle(e),this.deleteArticleId=-1}},{key:"setUsername",value:function(e){var t=e.target.value;localStorage.setItem("may-username",t),this.setState({username:t})}},{key:"setUserUrl",value:function(e){var t=e.target.value;localStorage.setItem("may-userurl",t),this.setState({userurl:t})}},{key:"render",value:function(){for(var e=this.getPosts(),t=[],s=[],a=0;a<e.length;a++)a%2===0?t.push(e[a]):s.push(e[a]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"modal fade",id:"userModal",tabIndex:"-1",role:"dialog","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-scrollable",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{children:"\u0410\u0432\u0442\u043e\u0440 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0439"}),Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(r.jsxs)("div",{className:"modal-body",style:{textAlign:"center"},children:[Object(r.jsx)("input",{className:"userInput",type:"text",value:this.state.username,placeholder:"\u0418\u043c\u044f \u0438\u043b\u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c",onChange:this.setUsername}),Object(r.jsx)("input",{className:"userInput",type:"text",value:this.state.userurl,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0430",onChange:this.setUserUrl}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"submissionText",dangerouslySetInnerHTML:{__html:this.userText}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"confirmSubmitBtn","data-dismiss":"modal",children:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})}),Object(r.jsx)("div",{className:"modal fade",id:"submitModal",tabIndex:"-1",role:"dialog","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-scrollable",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u0432 \u041c\u0430\u0439"}),Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(r.jsxs)("div",{className:"modal-body",style:{textAlign:"center"},children:[Object(r.jsx)("div",{style:{fontSize:"40px",color:"rgba(0, 0, 0, 0.7)"},children:Object(r.jsx)("i",{className:"fas fa-paper-plane"})}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"submissionText",dangerouslySetInnerHTML:{__html:this.submissionText}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"confirmSubmitBtn","data-dismiss":"modal",onClick:this.submitPost,children:"\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})]})})}),Object(r.jsx)("div",{className:"modal fade",id:"infoModal",tabIndex:"-1",role:"dialog","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog modal-dialog-scrollable",children:Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{children:"\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(r.jsx)("div",{className:"modal-body",children:Object(r.jsx)("div",{className:"submissionText",dangerouslySetInnerHTML:{__html:this.infoText}})})]})})}),Object(r.jsxs)("div",{className:"HeaderMain",children:[Object(r.jsx)("button",{className:"headerMainBtn",style:{float:"left"},"data-toggle":"modal","data-target":"#userModal",children:Object(r.jsx)("i",{className:"fas fa-user"})}),Object(r.jsx)("button",{className:"headerMainBtn",style:{float:"left"},"data-toggle":"modal","data-target":"#infoModal",children:Object(r.jsx)("i",{className:"fas fa-info"})}),Object(r.jsx)(j.b,{to:"/write",children:Object(r.jsxs)("button",{className:"headerMainBtn",onClick:this.setCurrArticle,children:[Object(r.jsx)("i",{className:"fas fa-edit"}),"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u044e"]})})]}),Object(r.jsx)("div",{className:"BodyMain",children:Object(r.jsxs)("div",{className:"wrapper",children:[e.length?Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("div",{className:"col",children:t}),Object(r.jsx)("div",{className:"col",children:s})]}):Object(r.jsx)("div",{className:"textPage",children:"\u043d\u0435\u0442 \u043d\u0435\u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439"}),Object(r.jsx)("br",{}),Object(r.jsx)("div",{className:"supportCardView",style:{background:"url(https://64.media.tumblr.com/fb6257322a3e73e7aa7247ba2b678163/tumblr_pp3mmshJhz1xvjko7o1_1280.gifv) center/100% no-repeat"},children:Object(r.jsxs)("div",{className:"supportCardBlackout",children:[Object(r.jsx)("div",{className:"supportCardTitle",children:"\u0415\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b?"}),Object(r.jsx)("div",{className:"supportCardText",children:"\u041d\u0430\u043f\u0438\u0448\u0438 \u043d\u0430\u043c \u0432 \u043b\u0441, \u0435\u0441\u043b\u0438 \u0443 \u0442\u0435\u0431\u044f \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0438\u043b\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e\u0441\u0442\u043e\u0432. \u041c\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043c \u0442\u0435\u0431\u0435 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f."}),Object(r.jsx)("button",{className:"supportCardBtn",children:Object(r.jsx)("a",{style:{textDecoration:"none",color:"#d2d5ff"},href:"https://vk.com/im?sel=-160404048",children:"\u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"})})]})})]})})]})}}]),s}(c.a.Component),O=(s(28),function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).state={},r.TextRef=c.a.createRef(),r.TitleRef=c.a.createRef(),r.DeleteStyles=r.DeleteStyles.bind(Object(d.a)(r)),r.setProgress=r.setProgress.bind(Object(d.a)(r)),r.updateArticle=r.updateArticle.bind(Object(d.a)(r)),r}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.currArticle;e.title&&(this.TitleRef.current.value=e.title),e.text&&(this.TextRef.current.innerHTML=e.text)}},{key:"DeleteStyles",value:function(e){e.preventDefault();var t=(e.originalEvent||e).clipboardData.getData("text/plain");document.execCommand("insertText",!1,t)}},{key:"setProgress",value:function(){var e=this.TextRef.current.innerText.length;this.props.onProgress(e),this.updateArticle()}},{key:"updateArticle",value:function(){var e=this.TitleRef.current.value,t=this.TextRef.current.innerHTML,s=this.props.currArticle.progress,r=this.props.currArticle.color,a=this.props.currArticle.id,c=this.props.articles;a||(a=0),c[a]={id:a,title:e,text:t,progress:s,color:r};var i={store:"may-articles",key:"articles",data:c};this.props.onArticleSave(i)}},{key:"render",value:function(){var e=this.props.currArticle;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"ArticlePage",style:{backgroundColor:e.color},children:[Object(r.jsx)("textarea",{type:"text",className:"ArticlePageTitle",rows:"2",ref:this.TitleRef,placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u0430\u0442\u044c\u0438",onChange:this.updateArticle}),Object(r.jsx)("div",{className:"ArticlePageText",contentEditable:"true",placeholder:"\u0422\u0435\u043a\u0441\u0442",ref:this.TextRef,onPaste:this.DeleteStyles,onInput:this.setProgress})]})})}}]),s}(c.a.Component)),v=["#FFA69E","#74F2CE","#7EE8FA","#E899DC","#FFAC81","#F7B42C","#ABE9CD","#F8CEEC","#B0F3F1","#DAD2F3","#F3E6E8","#D5FEFD","#DCF8EF","#7DDFF8","#B9D1EB","#A1BAFE","#E1D4E6","#FFA69E","#00BFB2","#FF4081","#A29BFE","#7ED6DF","#48DBFB","#FF6B6B"],f=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).state={article:r.props.currArticle},r.maxLetters=3550,r.setProgress=r.setProgress.bind(Object(d.a)(r)),r.StyleText=r.StyleText.bind(Object(d.a)(r)),r.getColorBlocks=r.getColorBlocks.bind(Object(d.a)(r)),r.setArticleColor=r.setArticleColor.bind(Object(d.a)(r)),r}return Object(o.a)(s,[{key:"componentDidMount",value:function(){}},{key:"setProgress",value:function(e){var t=100*e/this.maxLetters,s=this.state.article;s.progress=t,this.setState({article:s})}},{key:"StyleText",value:function(e){"heading"===e?document.execCommand("formatBlock",!1,"h3"):document.execCommand(e,!1,null)}},{key:"getColorBlocks",value:function(){var e=this;return v.map((function(t,s){return Object(r.jsx)("div",{className:"colorBlock",style:{backgroundColor:t},onClick:e.setArticleColor.bind(e,t)},s)}))}},{key:"setArticleColor",value:function(e){var t=this.props.articles,s=this.state.article.id;t[s].color=e,this.setState({article:t[s]});var r={store:"may-articles",key:"articles",data:t};this.updateArticle(r)}},{key:"updateArticle",value:function(e){var t=indexedDB.open(e.store,1);t.onupgradeneeded=function(){var s=t.result;s.objectStoreNames.contains(e.store)||s.createObjectStore(e.store)},t.onerror=function(){console.error("Can't create DB",t.error)},t.onsuccess=function(){t.result.transaction(e.store,"readwrite").objectStore(e.store).put(e.data,e.key)}}},{key:"render",value:function(){var e=this.getColorBlocks();return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"modal fade",id:"colorsModal",tabIndex:"-1",role:"dialog","aria-hidden":"true",children:Object(r.jsx)("div",{className:"modal-dialog",children:Object(r.jsxs)("div",{className:"modal-content",style:{backgroundColor:"rgba(37, 37, 51)",color:"#d2d5ff"},children:[Object(r.jsxs)("div",{className:"modal-header",children:[Object(r.jsx)("h5",{className:"modal-title",children:"\u0426\u0432\u0435\u0442 \u0441\u0442\u0430\u0442\u044c\u0438"}),Object(r.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(r.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(r.jsx)("div",{className:"modal-body",style:{textAlign:"center"},children:e})]})})}),Object(r.jsxs)("div",{className:"Header",children:[Object(r.jsx)(j.b,{to:"/",children:Object(r.jsx)("button",{className:"HeaderBtn",style:{float:"left"},children:Object(r.jsx)("i",{className:"fas fa-home"})})}),Object(r.jsx)("button",{className:"HeaderBtn",onClick:this.StyleText.bind(this,"bold"),children:Object(r.jsx)("i",{className:"fas fa-bold"})}),Object(r.jsx)("button",{className:"HeaderBtn",onClick:this.StyleText.bind(this,"italic"),children:Object(r.jsx)("i",{className:"fas fa-italic"})}),Object(r.jsx)("button",{className:"HeaderBtn",onClick:this.StyleText.bind(this,"underline"),children:Object(r.jsx)("i",{className:"fas fa-underline"})}),Object(r.jsx)("button",{className:"HeaderBtn",onClick:this.StyleText.bind(this,"insertUnorderedList"),children:Object(r.jsx)("i",{className:"fas fa-list-ul"})}),Object(r.jsx)("button",{className:"HeaderBtn",onClick:this.StyleText.bind(this,"insertOrderedList"),children:Object(r.jsx)("i",{className:"fas fa-list-ol"})}),Object(r.jsx)("button",{className:"HeaderBtn","data-toggle":"modal","data-target":"#colorsModal",children:Object(r.jsx)("i",{className:"fas fa-palette"})})]}),Object(r.jsx)("div",{className:"progress progressBar",children:Object(r.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar",style:{width:this.state.article.progress+"%",backgroundColor:"#ffdef0"}})}),Object(r.jsxs)("div",{className:"Body",children:[Object(r.jsx)("div",{className:"wrapper",children:Object(r.jsx)(O,{currArticle:this.state.article,articles:this.props.articles,onProgress:this.setProgress,onArticleSave:this.updateArticle})})," "]}),Object(r.jsxs)("div",{className:"Footer",children:["\u043e\u0431\u044a\u0435\u043c \u0441\u0442\u0430\u0442\u044c\u0438: ",Math.round(this.state.article.progress)+"%"]})]})}}]),s}(c.a.Component),g=function(e){Object(b.a)(s,e);var t=Object(u.a)(s);function s(e){var r;return Object(n.a)(this,s),(r=t.call(this,e)).state={articles:[],currentArticle:{}},r.setArticles=r.setArticles.bind(Object(d.a)(r)),r.setCurrArticle=r.setCurrArticle.bind(Object(d.a)(r)),r}return Object(o.a)(s,[{key:"setArticles",value:function(e){this.setState({articles:e})}},{key:"setCurrArticle",value:function(e){this.setState({currentArticle:e})}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(j.a,{children:Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{exact:!0,path:"/",children:Object(r.jsx)(p,{onArticlesLoad:this.setArticles,onArticleCreate:this.setCurrArticle})}),Object(r.jsx)(h.a,{path:"/write",children:Object(r.jsx)(f,{articles:this.state.articles,currArticle:this.state.currentArticle})})]})})})}}]),s}(c.a.Component),y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),r(e),a(e),c(e),i(e)}))};m.initializeApp({apiKey:"AIzaSyDM4JCxS6_vYEoba-TjFTqVLVYp_Oc0agY",authDomain:"may-articles.firebaseapp.com",databaseURL:"https://may-articles-default-rtdb.europe-west1.firebasedatabase.app",projectId:"may-articles",storageBucket:"may-articles.appspot.com",messagingSenderId:"678415622728",appId:"1:678415622728:web:8403375d12e292c4202e7d"}),l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),y()}},[[44,1,2]]]);
//# sourceMappingURL=main.54021475.chunk.js.map