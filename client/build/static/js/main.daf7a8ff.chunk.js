(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(e,t,a){e.exports=a.p+"static/media/logo.364f3eb3.svg"},67:function(e,t,a){e.exports=a(78)},72:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=(a(72),a(38)),l=a(34),u=a.n(l),s=a(23),m=a(42),v=a(14),h=a(15),p=a(20),w=a(18),d=a(125),f=a(111),g=a(115),b=a(116),E=a(41),R=a(48),O=a.n(R),j=function(e){Object(p.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{position:"static",style:{backgroundColor:"#8ea1e1"}},r.a.createElement(g.a,null,r.a.createElement(b.a,{edge:"start",href:"#"},r.a.createElement("img",{src:O.a,alt:"Product",height:50,width:50})),r.a.createElement(E.a,{variant:"h4"},"ReviewReviewer")))}}]),a}(n.Component),y=a(117),C=a(118),S=a(119),k=a(120),x=function(e){var t=e.review,a=String(t.product_title).substring(0,5);return r.a.createElement(y.a,{style:{height:"auto",width:"auto",maxWidth:"600px",position:"relative"}},r.a.createElement(C.a,{title:t.product_title,subheader:t.review_headline}),r.a.createElement(S.a,{image:"https://loremflickr.com/320/240/".concat(a),style:{height:"35vh",width:"auto"}}),r.a.createElement(k.a,{dangerouslySetInnerHTML:{__html:t.review_body}}),r.a.createElement(k.a,null,r.a.createElement(k.a,null,r.a.createElement("span",{style:{fontSize:10,fontStyle:"oblique"}},"Date the above review was left:"),r.a.createElement("br",null),t.review_date)))},M=a(127),I=a(128),_=a(126),T=a(124),P=a(55),A=a(121),D=a(122),N=a(123),W=Object(A.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center"},placeholder:{height:40}}}));function F(e){var t=W(),a=r.a.useState("idle"),n=Object(P.a)(a,2),i=n[0],o=(n[1],r.a.useRef());r.a.useEffect((function(){return function(){clearTimeout(o.current)}}),[]);return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.placeholder},"success"===i?r.a.createElement(E.a,null,"Success!"):r.a.createElement(D.a,{in:"progress"===i,style:{transitionDelay:"progress"===i?"800ms":"0ms"},unmountOnExit:!0},r.a.createElement(N.a,null))))}var J=function(e){Object(p.a)(a,e);var t=Object(w.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{name:"metaReviewForm"},r.a.createElement(I.a,null,r.a.createElement(_.a,{name:"metaReviewAuthor",id:"reviewer-name",label:"Name",variant:"outlined",required:!0,onChange:function(t){return e.props.onMetaInputChange(t)},value:this.props.metaReview.metaReviewAuthor}),r.a.createElement(M.a,{name:"metaRating",onChange:function(t){return e.props.onMetaInputChange(t)},value:this.props.metaReview.metaRating}),r.a.createElement(_.a,{name:"metaReviewText",id:"meta-review-description",label:"Review",multiline:!0,rows:4,variant:"outlined",onChange:function(t){return e.props.onMetaInputChange(t)},value:this.props.metaReview.metaReviewText}),r.a.createElement(T.a,{onClick:function(t){return e.props.onSubmitPressed(t)},fullWidth:!0,style:{backgroundColor:"#43b581"}},"Submit Review")))}}]),a}(n.Component),q=function(e){Object(p.a)(a,e);var t=Object(w.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.metaReview,a=e.onMetaInputChange,n=e.onSubmitPressed;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{style:{position:"relative"}},r.a.createElement(C.a,{title:"Review this review!"}),r.a.createElement(k.a,null,r.a.createElement(J,{metaReview:t,onMetaInputChange:a,onSubmitPressed:n}),r.a.createElement(F,null))))}}]),a}(n.Component),B=(a(77),function(e){Object(p.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={review:{},metaReview:{}},e.getRandomOriginalReview=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/".concat(a));case 2:return n=t.sent,t.next=5,n.json();case 5:if(r=t.sent,200===n.status){t.next=8;break}throw Error(r.message);case 8:console.log("state: ",e.state),e.setState((function(e){Object(s.a)({},e.review);var t=Object(s.a)({},e.metaReview);return{review:r,metaReview:t}}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.postMetaReview=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,r,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(s.a)(Object(s.a)({},a),{},{product_id:e.state.review.product_id}),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({saveData:n})},t.next=4,fetch("/savemetareview",r);case 4:return i=t.sent,t.next=7,i.json();case 7:t.sent;case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleMetaInputChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState((function(e){return{metaReview:Object(s.a)(Object(s.a)({},e.metaReview),{},Object(c.a)({},n,r))}}))},e.handleSubmitReview=function(t){e.postMetaReview(e.state.metaReview),e.setState((function(e){var t=Object(s.a)({},e.metaReview);return t.metaReviewAuthor="",t.metaRating=0,t.metaReviewText="",{metaReview:t}}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getRandomOriginalReview("getrandomv2")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",null,r.a.createElement(d.a,{container:!0,spacing:5,direction:"column",alignItems:"center",justify:"center",style:{backgroundColor:"#23272a",minHeight:"100vh",margin:0,width:"100%"}},r.a.createElement(d.a,{item:!0},r.a.createElement(x,{review:this.state.review})),r.a.createElement(d.a,{item:!0},r.a.createElement(q,{metaReview:this.state.metaReview,onMetaInputChange:this.handleMetaInputChange,onSubmitPressed:this.handleSubmitReview})))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.daf7a8ff.chunk.js.map