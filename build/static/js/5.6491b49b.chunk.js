(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{38:function(e,t,a){"use strict";var i=a(18),c=a(39),n=a.n(c),s=a(1);t.a=function(){return Object(s.jsxs)("span",{className:n.a.options,children:[Object(s.jsx)("h6",{children:"WE LOVE TREND"}),Object(s.jsxs)("div",{className:n.a.seprator,children:[Object(s.jsx)(i.a,{className:n.a.line}),Object(s.jsx)("p",{className:n.a.underline})]})]})}},39:function(e,t,a){e.exports={options:"Options_options__2TqIb",seprator:"Options_seprator__1Dk2y",line:"Options_line__3qh-g",underline:"Options_underline__2iIyT"}},40:function(e,t,a){"use strict";var i=a(41),c=a.n(i),n=a(2),s=a(1);t.a=function(e){return Object(s.jsx)(n.Fragment,{children:Object(s.jsxs)("div",{className:c.a.choices,children:[Object(s.jsx)("button",{className:c.a["choice-button"],children:"Best Products"}),Object(s.jsx)("button",{className:c.a["choice-button"],children:"Lowest Price"}),Object(s.jsx)("button",{className:c.a["choice-button"],children:"Highest Price"})]})})}},41:function(e,t,a){e.exports={choices:"Choices_choices__pJOZU","choice-button":"Choices_choice-button__23nHk"}},42:function(e,t,a){e.exports={"carts-holder":"ClothesItem_carts-holder__27-w_","img-holder":"ClothesItem_img-holder__2vBh0",title:"ClothesItem_title__3CRfN",price:"ClothesItem_price__3gJ39",addbutton:"ClothesItem_addbutton__3JMGs"}},43:function(e,t,a){e.exports={input:"Input_input__2TbPt",label:"Input_label__3VJ_2"}},44:function(e,t,a){e.exports={addbutton:"Form_addbutton__19bC2"}},45:function(e,t,a){e.exports={carts:"AvailableClothes_carts__3Jqb1"}},46:function(e,t,a){"use strict";var i=a(2),c=a.n(i),n=a(10),s=a(42),r=a.n(s),o=a(4),m=a(9),d=a(43),l=a.n(d),p=a(1),u=c.a.forwardRef((function(e,t){return Object(p.jsxs)("div",{className:l.a.input,children:[Object(p.jsx)("label",{className:l.a.label,htmlFor:e.input.id,children:e.label}),Object(p.jsx)("input",Object(m.a)({ref:t},e.input))]})})),b=a(44),j=a.n(b),h=function(e){var t=Object(i.useState)(!0),a=Object(o.a)(t,2),c=a[0],n=a[1],s=Object(i.useRef)();return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=s.current.value,i=+a;0===a.trim().length||a<1||a>5?n(!1):e.onAddToCart(i)},children:[Object(p.jsx)(u,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(p.jsx)("button",{className:j.a.addbutton,children:"Add To Cart"}),!c&&Object(p.jsx)("p",{children:" Please enter a valid number (1-5)"})]})};t.a=function(e){var t=Object(i.useContext)(n.a),a=+e.price;return Object(p.jsxs)("li",{className:r.a["carts-holder"],children:[Object(p.jsx)("div",{className:r.a["img-holder"],children:Object(p.jsx)("img",{className:r.a["cart-img"],src:e.image,alt:"clothes"})}),Object(p.jsx)("p",{className:r.a.title,children:e.name}),Object(p.jsxs)("p",{className:r.a.price,children:[e.price,"$"]}),Object(p.jsx)(h,{onAddToCart:function(i){t.addItem({id:e.key,name:e.name,price:a,image:e.image,amount:i})}})]},e.id)}},47:function(e,t,a){e.exports={h4:"Pages_h4__f7ToB"}},53:function(e,t,a){"use strict";a.r(t);var i=a(2),c=a(46),n=a.p+"static/media/1-min.2f7ea2ed.png",s=a.p+"static/media/2-min.f5bb6a96.png",r=a.p+"static/media/3-min.d22f5a5d.png",o=a.p+"static/media/4-min.8fbb9cf2.png",m=a.p+"static/media/5-min.06ddb8ff.png",d=a.p+"static/media/6-min.a54f41a1.png",l=a.p+"static/media/7-min.b81bfb02.png",p=a.p+"static/media/8-min.fced321a.png",u=a.p+"static/media/9-min.ed54a580.png",b=a.p+"static/media/10-min.d78a8ded.png",j=a.p+"static/media/11-min.44536ecd.png",h=a.p+"static/media/12-min.92798137.png",_=a.p+"static/media/13-min.af8099a7.png",g=a(45),f=a.n(g),O=a(1),x=[{id:"s1",name:"Casual Fendy",price:"180",image:"".concat(n)},{id:"s2",name:"Nike Jordan",price:"800",image:"".concat(s)},{id:"s3",name:"Old Fashioned",price:"20",image:"".concat(r)},{id:"s4",name:"Versace Shoes",price:"71",image:"".concat(o)},{id:"s5",name:"Breezy",price:"138",image:"".concat(m)},{id:"s6",name:"J-West",price:"340",image:"".concat(d)},{id:"s7",name:"Canvas",price:"300",image:"".concat(l)},{id:"s8",name:"Summer Shoe",price:"126",image:"".concat(p)},{id:"s9",name:"Padded",price:"190",image:"".concat(u)},{id:"s10",name:"Savvy",price:"280",image:"".concat(b)},{id:"s11",name:"Closed Toe ",price:"110",image:"".concat(j)},{id:"s12",name:"Kampung",price:"299",image:"".concat(h)},{id:"s13",name:"Athletic",price:"125",image:"".concat(_)}],N=function(e){var t=x.map((function(e){return Object(O.jsx)(c.a,{name:e.name,price:e.price,image:e.image},e.id)}));return Object(O.jsx)("ul",{className:f.a.carts,children:t})},v=a(40),C=a(38),I=a(47),J=a.n(I);t.default=function(){return Object(O.jsxs)(i.Fragment,{children:[Object(O.jsx)(C.a,{}),Object(O.jsx)("h4",{className:J.a.h4,children:"Shoes"}),Object(O.jsx)(v.a,{}),Object(O.jsx)(N,{})]})}}}]);
//# sourceMappingURL=5.6491b49b.chunk.js.map