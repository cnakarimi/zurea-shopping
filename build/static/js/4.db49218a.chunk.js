(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{38:function(e,t,a){"use strict";var n=a(18),i=a(39),c=a.n(i),s=a(1);t.a=function(){return Object(s.jsxs)("span",{className:c.a.options,children:[Object(s.jsx)("h6",{children:"WE LOVE TREND"}),Object(s.jsxs)("div",{className:c.a.seprator,children:[Object(s.jsx)(n.a,{className:c.a.line}),Object(s.jsx)("p",{className:c.a.underline})]})]})}},39:function(e,t,a){e.exports={options:"Options_options__2TqIb",seprator:"Options_seprator__1Dk2y",line:"Options_line__3qh-g",underline:"Options_underline__2iIyT"}},40:function(e,t,a){"use strict";var n=a(41),i=a.n(n),c=a(2),s=a(1);t.a=function(e){return Object(s.jsx)(c.Fragment,{children:Object(s.jsxs)("div",{className:i.a.choices,children:[Object(s.jsx)("button",{className:i.a["choice-button"],children:"Best Products"}),Object(s.jsx)("button",{className:i.a["choice-button"],children:"Lowest Price"}),Object(s.jsx)("button",{className:i.a["choice-button"],children:"Highest Price"})]})})}},41:function(e,t,a){e.exports={choices:"Choices_choices__pJOZU","choice-button":"Choices_choice-button__23nHk"}},42:function(e,t,a){e.exports={"carts-holder":"ClothesItem_carts-holder__27-w_","img-holder":"ClothesItem_img-holder__2vBh0",title:"ClothesItem_title__3CRfN",price:"ClothesItem_price__3gJ39",addbutton:"ClothesItem_addbutton__3JMGs"}},43:function(e,t,a){e.exports={input:"Input_input__2TbPt",label:"Input_label__3VJ_2"}},44:function(e,t,a){e.exports={addbutton:"Form_addbutton__19bC2"}},45:function(e,t,a){e.exports={carts:"AvailableClothes_carts__3Jqb1"}},46:function(e,t,a){"use strict";var n=a(2),i=a.n(n),c=a(10),s=a(42),r=a.n(s),o=a(4),m=a(9),d=a(43),l=a.n(d),p=a(1),b=i.a.forwardRef((function(e,t){return Object(p.jsxs)("div",{className:l.a.input,children:[Object(p.jsx)("label",{className:l.a.label,htmlFor:e.input.id,children:e.label}),Object(p.jsx)("input",Object(m.a)({ref:t},e.input))]})})),u=a(44),j=a.n(u),h=function(e){var t=Object(n.useState)(!0),a=Object(o.a)(t,2),i=a[0],c=a[1],s=Object(n.useRef)();return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=s.current.value,n=+a;0===a.trim().length||a<1||a>5?c(!1):e.onAddToCart(n)},children:[Object(p.jsx)(b,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(p.jsx)("button",{className:j.a.addbutton,children:"Add To Cart"}),!i&&Object(p.jsx)("p",{children:" Please enter a valid number (1-5)"})]})};t.a=function(e){var t=Object(n.useContext)(c.a),a=+e.price;return Object(p.jsxs)("li",{className:r.a["carts-holder"],children:[Object(p.jsx)("div",{className:r.a["img-holder"],children:Object(p.jsx)("img",{className:r.a["cart-img"],src:e.image,alt:"clothes"})}),Object(p.jsx)("p",{className:r.a.title,children:e.name}),Object(p.jsxs)("p",{className:r.a.price,children:[e.price,"$"]}),Object(p.jsx)(h,{onAddToCart:function(n){t.addItem({id:e.key,name:e.name,price:a,image:e.image,amount:n})}})]},e.id)}},47:function(e,t,a){e.exports={h4:"Pages_h4__f7ToB"}},54:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(46),c=a.p+"static/media/1-min.ed444bc1.png",s=a.p+"static/media/2-min.fbd13a00.png",r=a.p+"static/media/3-min.b4a94c25.png",o=a.p+"static/media/4-min.bc3d91cf.png",m=a.p+"static/media/5-min.fbd8044b.png",d=a.p+"static/media/6-min.7cb068e0.png",l=a.p+"static/media/7-min.003b9d20.png",p=a.p+"static/media/8-min.8565ffba.png",b=a.p+"static/media/9-min.87b87310.png",u=a.p+"static/media/10-min.f49b9bc2.png",j=a.p+"static/media/11-min.51653b7f.png",h=a.p+"static/media/12-min.05b32b3d.png",_=a.p+"static/media/13-min.9a20cb2d.png",g=a(45),O=a.n(g),f=a(1),x=[{id:"w1",name:"Red Channel",price:"149",image:"".concat(c)},{id:"w2",name:"Blue Wink",price:"96",image:"".concat(s)},{id:"w3",name:"Channel O4",price:"333",image:"".concat(r)},{id:"w4",name:"Davin Ro",price:"56",image:"".concat(o)},{id:"w5",name:"Clara Mink",price:"197",image:"".concat(m)},{id:"w6",name:"Eagle",price:"337",image:"".concat(d)},{id:"w7",name:"Python",price:"173",image:"".concat(l)},{id:"w8",name:"Pink Panther",price:"80",image:"".concat(p)},{id:"w9",name:"Antoan",price:"264",image:"".concat(b)},{id:"w10",name:"Adama",price:"201",image:"".concat(u)},{id:"w11",name:"Channel Br8 ",price:"569",image:"".concat(j)},{id:"w12",name:"Channel Q27",price:"780",image:"".concat(h)},{id:"w13",name:"Mindy",price:"112",image:"".concat(_)}],N=function(e){var t=x.map((function(e){return Object(f.jsx)(i.a,{name:e.name,price:e.price,image:e.image},e.id)}));return Object(f.jsx)("ul",{className:O.a.carts,children:t})},C=a(40),v=a(38),w=a(47),I=a.n(w);t.default=function(){return Object(f.jsxs)(n.Fragment,{children:[Object(f.jsx)(v.a,{}),Object(f.jsx)("h4",{className:I.a.h4,children:"Bags"}),Object(f.jsx)(C.a,{}),Object(f.jsx)(N,{})]})}}}]);
//# sourceMappingURL=4.db49218a.chunk.js.map