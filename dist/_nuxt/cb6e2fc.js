(window.webpackJsonp=window.webpackJsonp||[]).push([[34,10],{377:function(t,o,e){var content=e(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("3b850491",content,!0,{sourceMap:!1})},389:function(t,o,e){"use strict";e(377)},390:function(t,o,e){var r=e(17)(!1);r.push([t.i,"@media(max-width:707px){.modal__product-card{width:unset!important;margin:0 auto}.modal__product{flex-direction:block}}.modal__product-actions__button{position:unset!important}.modal__product-actions{justify-content:center}.modal__product{max-width:1120px;width:100%;max-height:700px;background:#fff;position:absolute;left:50%;border-radius:5px;box-shadow:0 10px 25px rgba(0,0,0,.5);top:50%;display:flex;overflow-y:auto;flex-flow:wrap;transform:translate(-50%,-50%)}.modal__product-card{width:49%;margin-bottom:80px}.modal__product-card__image{max-width:300px;width:100%}.modal__product-card__title{color:#000!important;font-size:20px;width:90%;text-decoration:none;padding-bottom:5px;line-height:24px;text-align:left;margin:auto auto 15px;align-items:center}.modal__product-card__title p{margin:0!important}.modal__product-card__title:hover{text-decoration:underline}.modal__product-card__color{text-align:left;width:90%;margin:auto}.modal__product-card__color-title,.modal__product-card__color h4{font-size:15px;color:#000;text-transform:none;font-weight:300}.modal__product-card__color h4{margin:0}.modal__product-card__color h3{margin:0 0 20px;font-size:20px;font-weight:700;color:#000}.modal__product-card__colors{width:90%;display:flex;margin:auto;flex-flow:wrap}.modal__product-card__colors img{margin:5px;cursor:pointer}.modal__product-actions{width:90%;max-height:50px;height:50px;position:relative;display:flex;margin:auto auto 25px}.modal__product-actions__price{width:100%;text-align:center;font-family:Lato-Bold,sans-serif;font-size:25px;color:#000}.modal__product-actions__button{position:absolute;right:0;top:0}.modal__product-actions__button input{width:210px;height:44px;border-radius:100px;background:#f42f2f;border:none;color:#fff;font-size:18px;font-weight:700;line-height:1.5;box-shadow:0 1px 6px 0 rgba(213,51,51,.36),inset 0 -2px 0 0 rgba(159,36,36,.5)}.sale{width:100%;display:flex;justify-content:center;flex-flow:column}.sale,.sale h2{text-align:center}.sale h2{margin-top:25px;margin-bottom:85px;color:#000}.sale-page-info{max-width:700px;width:100%;display:flex;margin:15px auto auto;justify-content:space-between}.sale-page-info .price{font-family:Lato-Bold,sans-serif;font-size:25px;color:#000;margin:0}.sale-page-info .oldprice{line-height:15px;font-size:20px;color:#000;margin-right:10px}.sale-page-info__button{display:flex;align-items:flex-end}.sale-page-info__button span{font-size:15px;line-height:1.53;text-align:center;color:#de2828;background:none;border:none;box-shadow:none;text-decoration:underline;padding:0;display:inline-block;text-shadow:none;float:right;margin:0 16px 5px auto}.sale .PB_image{max-width:700px;margin:auto}.sale .PB_image img{width:100%}",""]),t.exports=r},423:function(t,o,e){"use strict";e.r(o);var r=e(112),n=(e(224),e(16),e(27),e(36),e(70),e(1).default.extend({data:function(){return{totalProcent:0,chosenColors:[],totalPrice:0,just:null}},props:{items:{type:Array,required:!0},procent:{type:Number,required:!0},saleId:{type:[Number,String]}},mounted:function(){var t=this;this.chosenColors=[],this.totalPrice=0,this.items.forEach((function(element){t.chosenColors.push(0)})),this.checkPrice()},methods:{sendtoCart:function(){var t=this;if(localStorage.cartItems){var o=JSON.parse(localStorage.getItem("cartItems")),e=[];this.items.forEach((function(element,r){var n=0;o.forEach((function(o,e){o.color===element.colors[t.chosenColors[r]].id&&(n=e+1)})),n?o[n-1].ammount++:e.push({id:element.id,ammount:1,color:element.colors[t.chosenColors[r]].id,colorName:element.colors[t.chosenColors[r]].name,procent:t.procent,saleId:t.saleId,price:element.price})})),e.length>0?localStorage.setItem("cartItems",JSON.stringify([].concat(Object(r.a)(o),e))):localStorage.setItem("cartItems",JSON.stringify(o))}else{var n=[];this.items.forEach((function(element,o){n.push({id:element.id,ammount:1,color:element.colors[t.chosenColors[o]].id,colorName:element.colors[t.chosenColors[o]].name,procent:t.procent,saleId:t.saleId,price:element.price})})),localStorage.setItem("cartItems",JSON.stringify(n))}this.$emit("closeModal"),this.$router.push("/cart")},checkPrice:function(){var t=this;this.totalPrice=0,this.items.forEach((function(element,o){if(element.colors[t.chosenColors[o]].price){var e=Number(element.colors[t.chosenColors[o]].price),r=e-e/100*t.procent;t.totalPrice+=Number(r)}else{var n=Number(element.price),l=n-n/100*t.procent;t.totalPrice+=Number(l)}}))},changeColor:function(t,o){this.chosenColors[t]=o,this.checkPrice(),this.$forceUpdate()}},computed:{result:function(){}}})),l=(e(389),e(9)),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[0!=t.chosenColors.length?e("form",{staticClass:"modal",on:{click:function(o){return o.target!==o.currentTarget?null:t.$emit("closeModal")},submit:function(o){return o.preventDefault(),t.sendtoCart()}}},[e("div",{staticClass:"modal__product",staticStyle:{"z-index":"99999"}},[t._l(t.items,(function(o,r){return e("div",{key:r,staticClass:"modal__product-card"},[o.images?e("img",{staticClass:"modal__product-card__image",attrs:{src:o.images.find((function(e){return e.color===o.colors[Number(t.chosenColors[r])].id})).images[0]}}):t._e(),t._v(" "),e("div",{staticClass:"modal__product-card__title",staticStyle:{display:"flex","flex-flow":"wrap"}},[t._v("\n          "+t._s(o.name)+"\n        ")]),t._v(" "),o.colors?e("div",{staticClass:"modal__product-card__color"},[e("h4",{staticClass:"modal__product-card__color-title"},[t._v("Цвета накидок:")]),t._v(" "),e("h3",{staticClass:"modal__product-card__color-description"},[t._v("\n            "+t._s(o.colors[t.chosenColors[r]].name)+"\n          ")])]):t._e(),t._v(" "),e("div",{staticClass:"modal__product-card__colors"},t._l(o.colors,(function(o,n){return e("img",{key:n,staticClass:"modal__product-card__colors-ball",attrs:{src:o.logo},on:{click:function(o){return t.changeColor(r,n)}}})})),0)])})),t._v(" "),e("div",{staticClass:"modal__product-actions"},[e("div",{staticClass:"modal__product-actions__price"},[t._v("\n          "+t._s(t.totalPrice)+" р.\n        ")]),t._v(" "),t._m(0)])],2)]):t._e()])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("div",{staticClass:"modal__product-actions__button"},[o("input",{attrs:{type:"submit",value:"Добавить в корзину"}})])}],!1,null,null,null);o.default=component.exports;installComponents(component,{Input:e(145).default})},502:function(t,o,e){"use strict";e.r(o);e(16),e(27),e(225);var r=e(1),n=e(423),l=r.default.extend({components:{SalesModal:n.default},layout:"default",data:function(){return{i:0,chosenColors:[],totalPrice:0,sales:[],fullItems:[],products:"",items:[],salesItems:"",modalOpen:!1,procent:0}},mounted:function(){var t=this;this.$axios.get("https://project.a-lux.dev/api/sale").then((function(o){t.sales=o.data,t.procent=o.data[0].procent,t.salesItems=o.data[0].items,t.salesItems.forEach((function(t,o){t.salesId=o+1})),t.$axios.post("https://project.a-lux.dev/api/items",{}).then((function(o){t.products=o.data,t.salesItems.forEach((function(element){t.items.push(t.products.find((function(t){return t.id===element.id})))})),t.fullItems.push(t.items)}))}))},methods:{openModal:function(a){return this.modalOpen=!0,a}}}),c=e(9),component=Object(c.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.fullItems?e("div",{staticClass:"container"},t._l(t.sales,(function(o,r){return e("div",{key:r,staticClass:"sale"},[e("h2",[t._v(t._s(o.title))]),t._v(" "),e("div",{staticClass:"sale_label"},[t._v("АКЦИЯ")]),t._v(" "),e("div",{staticClass:"PB_image"},[e("img",{staticClass:"PB_options_image double_trouble",staticStyle:{cursor:"pointer"},attrs:{src:o.image},on:{click:function(o){return o.preventDefault(),t.openModal(r)}}})]),t._v(" "),e("div",{staticClass:"sale-page-info"},[e("div",{staticClass:"sale-page-info__price"},[e("strike",{staticClass:"oldprice"},[t._v(t._s(o.oldprice)+" р.")]),t._v(" "),e("p",{staticClass:"price"},[t._v(t._s(o.newprice)+" р.")])],1),t._v(" "),e("div",{staticClass:"sale-page-info__button",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.openModal(o.items)}}},[e("span",[t._v("Выбрать цвет")])])]),t._v(" "),t.modalOpen?e("sales-modal",{attrs:{items:t.openModal(o.items),procent:t.procent,"sale-id":o.id},on:{closeModal:function(o){t.modalOpen=!1}}}):t._e()],1)})),0):t._e()}),[],!1,null,null,null);o.default=component.exports}}]);