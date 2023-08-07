(function(){"use strict";var t={406:function(t,r,e){var s=e(6369),a=function(){var t=this,r=t._self._c;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("router-view")],1)},i=[],o=function(){var t=this,r=t._self._c;return r("nav",{staticClass:"navbar"},[t._m(0),r("div",{staticClass:"navbar-items"},[t.isLogin?r("div",[r("div",{staticClass:"dropdown"},[t._m(1),r("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu2"}},[r("ul",{staticClass:"navbar-nav"},[t.isAdmin?r("div",[r("li",{staticClass:"dropdown-item"},[r("router-link",{attrs:{to:"/admin/products"}},[r("button",{staticClass:"dropdown-item"},[t._v("Listado")])])],1),r("li",{staticClass:"dropdown-item"},[r("router-link",{attrs:{to:"/admin/orders"}},[r("button",{staticClass:"dropdown-item"},[t._v("Envíos")])])],1)]):r("div",[r("li",{staticClass:"dropdown-item"},[r("router-link",{attrs:{to:"/Home"}},[r("button",{staticClass:"dropdown-item"},[t._v("Productos")])])],1),r("li",{staticClass:"dropdown-item"},[r("router-link",{attrs:{to:"/Cart"}},[r("button",{staticClass:"dropdown-item"},[t._v("Carrito")])])],1)]),r("div",{staticClass:"dropdown-divider"}),r("li",{staticClass:"dropdown-item",on:{click:t.logout}},[t._v("Logout")])])])])]):r("div",[r("router-link",{attrs:{to:"/login"}},[r("a",{staticClass:"navbar-button",attrs:{href:"#"}},[t._v("Login")])])],1)])])},n=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"navbar-logo"},[r("a",{staticClass:"navbar-logo-link",attrs:{href:"#"}},[t._v(" Logo ")])])},function(){var t=this,r=t._self._c;return r("button",{staticClass:"btn btn-default dropdown-toggle",attrs:{type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"}},[r("img",{attrs:{src:"https://www.drivetest.de/wp-content/uploads/2019/08/drivetest-avatar-m.png",height:"40"}}),r("span",{staticClass:"caret"})])}],c=(e(7658),{name:"navbar",props:{cartItemCount:{type:Number,default:0}},data(){return{}},methods:{toggleCart(){this.$emit("toggle-cart")},logout(){this.$store.dispatch("isLoggedIn",!1),this.$store.dispatch("userData",{}),this.$router.push("/login")}}}),u=c,d=e(1001),l=(0,d.Z)(u,o,n,!1,null,"1d23ca30",null),m=l.exports,p={name:"App",components:{Navbar:m}},v=p,h=(0,d.Z)(v,a,i,!1,null,null,null),g=h.exports,f=e(2631),_=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"login-register"},[r("form",{on:{submit:function(r){return r.preventDefault(),t.login()}}},[r("div",{staticClass:"login"},[r("h2",[t._v("Iniciar sesión")]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.email,expression:"loginData.email"}],staticClass:"form-input",attrs:{name:"email",type:"email",id:"email",placeholder:"Email"},domProps:{value:t.loginData.email},on:{input:function(r){r.target.composing||t.$set(t.loginData,"email",r.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.loginData.password,expression:"loginData.password"}],staticClass:"form-input",attrs:{name:"password",type:"password",id:"password",placeholder:"Contraseña"},domProps:{value:t.loginData.password},on:{input:function(r){r.target.composing||t.$set(t.loginData,"password",r.target.value)}}})]),r("button",[t._v("Iniciar sesión")]),r("p",[t._v("¿No tienes una cuenta aún? "),r("router-link",{attrs:{to:"/register"}},[r("button",[t._v("Regístrate aquí")])])],1),t.loginError?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.loginError))]):t._e()])])])])},C=[],b=e(7327),y=e(4161);class w{constructor(){(0,b.Z)(this,"apiBaseUrl","https://649a4f4bbf7c145d0238b603.mockapi.io/")}getApi(){return{}}}class P{constructor(){(0,b.Z)(this,"url",""),(0,b.Z)(this,"enviroments",null),this.enviroments=new w,this.url=this.enviroments.apiBaseUrl+"/users/"}async getUsers(){try{return await y.Z.get(this.url)}catch(t){console.error("Error en función getUsers: "+t.message)}}async storeUser(t){try{return await y.Z.post(this.url,t,this.enviroments.getApi())}catch(r){console.error("Error en función storeUser: "+r.message)}}}var D={name:"Login",data(){return{loginData:{email:"",password:"",admin:!1},loginError:"",usersDB:new P}},methods:{async login(){if(!this.loginData.email||!this.loginData.password)return void(this.loginError="Por favor, ingresa el usuario y la contraseña.");let{data:t}=await this.usersDB.getUsers();const r=t.find((t=>t.email===this.loginData.email&&t.password===this.loginData.password));r?(this.$store.dispatch("isLoggedIn",!0),this.$store.dispatch("userData",r),localStorage.setItem("user",JSON.stringify(r)),this.$router.push(r.admin?"/admin/products":"/home")):(this.$store.dispatch("isLoggedIn",!1),this.$store.dispatch("userData",{}),this.loginError="Credenciales de inicio de sesión incorrectas.")}}},x=D,E=(0,d.Z)(x,_,C,!1,null,"3ca1720e",null),$=E.exports,I=function(){var t=this,r=t._self._c;return r("div",[r("div",{staticClass:"container"},[r("div",{staticClass:"register"},[r("form",{on:{submit:function(r){return r.preventDefault(),t.register()}}},[r("div",{staticClass:"registration"},[r("h2",[t._v("Registrarse")]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.name,expression:"registerData.name"}],staticClass:"form-input",attrs:{name:"name",type:"text",id:"name",placeholder:"Nombre"},domProps:{value:t.registerData.name},on:{input:function(r){r.target.composing||t.$set(t.registerData,"name",r.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.email,expression:"registerData.email"}],staticClass:"form-input",attrs:{name:"email",type:"email",id:"email",placeholder:"Email"},domProps:{value:t.registerData.email},on:{input:function(r){r.target.composing||t.$set(t.registerData,"email",r.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.password,expression:"registerData.password"}],staticClass:"form-input",attrs:{name:"password",type:"password",id:"password",placeholder:"Contraseña"},domProps:{value:t.registerData.password},on:{input:function(r){r.target.composing||t.$set(t.registerData,"password",r.target.value)}}})]),r("div",{staticClass:"custom-control custom-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.admin,expression:"registerData.admin"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"admin",name:"admin"},domProps:{checked:Array.isArray(t.registerData.admin)?t._i(t.registerData.admin,null)>-1:t.registerData.admin},on:{change:function(r){var e=t.registerData.admin,s=r.target,a=!!s.checked;if(Array.isArray(e)){var i=null,o=t._i(e,i);s.checked?o<0&&t.$set(t.registerData,"admin",e.concat([i])):o>-1&&t.$set(t.registerData,"admin",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.registerData,"admin",a)}}}),r("label",{staticClass:"custom-control-label",attrs:{for:"admin"}},[t._v("¿Es admin?")])]),r("button",[t._v("Registrarse")]),r("p",[t._v("¿Ya tienes una cuenta? "),r("router-link",{attrs:{to:"/login"}},[r("button",[t._v("Inicia sesión aquí")])])],1),t.registrationError?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.registrationError))]):t._e(),t.registrationSuccess?r("div",{staticClass:"success alert-success"},[t._v(t._s(t.registrationSuccess))]):t._e()])])])])])},Z=[],k={name:"Register",data(){return{registerData:{name:"",email:"",password:"",admin:!1},registrationError:"",registrationSuccess:"",usersDB:new P}},methods:{async register(){if(this.registerData.name&&this.registerData.email&&this.registerData.password){let{data:t}=await this.usersDB.getUsers(),r=t.find((t=>t.email==this.registerData.email));if(r)return void(this.registrationError="Lo sentimos. Este usuario ya existe.");{let{data:t}=await this.usersDB.storeUser(this.registerData);this.registrationSuccess="El usuario ha sido registrado exitosamente."}}else this.registrationError="Registro incorrecto. Por favor, inténtelo nuevamente."}}},L=k,N=(0,d.Z)(L,I,Z,!1,null,"6b3d0b68",null),S=N.exports,B=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"home"},[r("h2",[t._v("Bienvenido a la Tienda")]),r("p",[t._v("Explora nuestra selección de productos")]),r("ProductList")],1)])},A=[],q=function(){var t=this,r=t._self._c;return r("div",[t.cartSuccess?r("div",{staticClass:"success alert-success"},[t._v(t._s(t.cartSuccess))]):t._e(),r("div",{staticClass:"product-list"},t._l(t.products,(function(e){return r("div",{key:e.id,staticClass:"product-card"},[r("img",{staticClass:"product-image",attrs:{src:e.picture,alt:"Product Image"}}),r("h3",[t._v(t._s(e.name))]),r("p",{staticClass:"product-description"},[t._v(t._s(e.description))]),r("p",{staticClass:"product-price"},[t._v(t._s(t.formattedPrice(e.price)))]),r("button",{staticClass:"btn btn-primary",on:{click:function(r){return t.addToCart(e.id)}}},[t._v("Agregar al Carrito")])])})),0)])},O=[];class U{constructor(){(0,b.Z)(this,"url",""),(0,b.Z)(this,"enviroments",null),this.enviroments=new w,this.url=this.enviroments.apiBaseUrl+"/products/"}async getProducts(){try{return await y.Z.get(this.url)}catch(t){console.error("Error en función getProducts: "+t.message)}}async getProduct(t){try{return await y.Z.get(this.url+(t||""))}catch(r){console.error("Error en getProduct: "+r.message)}}async storeProduct(t){try{return await y.Z.post(this.url,t,this.enviroments.getApi())}catch(r){console.error("Error en función storeProduct: "+r.message)}}async destroyProduct(t){try{return(await y.Z.delete(this.url+t)).data}catch(r){console.error("Error en destroyProduct: "+r.message)}}async updateProduct(t,r){try{return(await y.Z.put(this.url+r,t,this.enviroments.getApi())).data}catch(e){console.error("Error en updateProduct: "+e.message)}}}class T{constructor(){(0,b.Z)(this,"url",""),(0,b.Z)(this,"enviroments",null),this.enviroments=new w,this.url=this.enviroments.apiBaseUrl+"/users/"}async updateCart(t,r){y.Z.get(this.url+t).then((e=>{let s=e.data;s.orders=r,y.Z.put(this.url+t,s).then((t=>{})).catch((t=>{}))})).catch((t=>{console.error("Error al obtener el objeto:",t)}))}}var Q={data(){return{name:"ProductList",products:[],cart:[],productsDB:new U,cartDB:new T,cartSuccess:""}},mounted(){this.isLogin||(this.productsError="No tiene permitido acceder a este sitio."),this.getAllProducts(),this.getAllCart(this.userId)},methods:{async getAllProducts(){let{data:t}=await this.productsDB.getProducts();this.products=t},async getAllCart(t){let{data:r}=await this.productsDB.getProducts(t);this.cart=r},addToCart(t){let r=this.products.find((r=>r.id==t));this.$store.dispatch("addToCart",r),this.cartSuccess="Producto agregado al carrito."},formattedPrice(t){return`CLP $${t}`}}},j=Q,R=(0,d.Z)(j,q,O,!1,null,"30fa0573",null),F=R.exports,M={name:"Home",components:{ProductList:F}},z=M,H=(0,d.Z)(z,B,A,!1,null,"40088b6b",null),J=H.exports,G=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[t.productsError?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.productsError))]):r("div",{staticClass:"admin-products"},[r("h2",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Listado de Productos "),r("router-link",{staticClass:"btn btn-success",attrs:{to:"/admin/product/new"}},[t._v("Nuevo producto")])],1),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.products,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.id))]),r("td",[r("img",{attrs:{src:e.picture,height:"75",alt:e.name}})]),r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.price))]),r("td",[r("router-link",{staticClass:"btn btn-sm btn-primary",attrs:{to:`/admin/product/${e.id}/edit`}},[t._v("Editar")]),r("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(r){return t.deleteProduct(e.id)}}},[t._v("Eliminar")])],1)])})),0)])])])},V=[function(){var t=this,r=t._self._c;return r("thead",[r("tr",[r("th",[t._v("ID")]),r("th",[t._v("Imagen")]),r("th",[t._v("Nombre")]),r("th",[t._v("Precio")])])])}],Y={name:"AdminProducts",data(){return{products:[],productsDB:new U,productsError:""}},mounted(){this.isLogin||(this.productsError="No tiene permitido acceder a este sitio."),this.getAllProducts()},methods:{async getAllProducts(){let{data:t}=await this.productsDB.getProducts();this.products=t},async deleteProduct(t){if(confirm("¿está seguro de querer borrar este producto. Una vez hecho no podrá volver atrás.")){let r=await this.productsDB.destroyProduct(t),e=this.products.findIndex((t=>t.id==r.id));this.products.splice(e,1)}}}},K=Y,W=(0,d.Z)(K,G,V,!1,null,"1fd05a93",null),X=W.exports,tt=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"admin-form"},[r("h2",[t._v(t._s(t.isNewProduct?"Nuevo Producto":"Editar Producto"))]),r("form",{on:{submit:function(r){return r.preventDefault(),t.saveProduct.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Nombre:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",name:"name",required:""},domProps:{value:t.product.name},on:{input:function(r){r.target.composing||t.$set(t.product,"name",r.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"price"}},[t._v("Precio:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",name:"price",min:"0",required:""},domProps:{value:t.product.price},on:{input:function(r){r.target.composing||t.$set(t.product,"price",r.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Descripción:")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{id:"description",name:"description",required:""},domProps:{value:t.product.description},on:{input:function(r){r.target.composing||t.$set(t.product,"description",r.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"picture"}},[t._v("URL de la imagen:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.product.picture,expression:"product.picture"}],staticClass:"form-control",attrs:{type:"text",id:"picture",name:"picture",required:""},domProps:{value:t.product.picture},on:{input:function(r){r.target.composing||t.$set(t.product,"picture",r.target.value)}}})]),t.productError?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.productError))]):t._e(),t.productSuccess?r("div",{staticClass:"success alert-success"},[t._v(t._s(t.productSuccess))]):t._e(),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v(t._s(t.isNewProduct?"Guardar":"Actualizar"))]),r("router-link",{attrs:{to:"/admin/products"}},[r("a",{staticClass:"btn btn-secondary",attrs:{href:"#"}},[t._v("Volver")])])],1)])])},rt=[],et={name:"AdminForm",data(){return{product:{name:"",price:0,description:"",picture:""},productError:"",productSuccess:"",productsDB:new U,isNewProduct:!0}},created(){if(this.$route.params.id){let t=this.$route.params.id;if(t<0)return;let r=this.getOneProduct(t);this.product.name=r.name,this.product.price=r.price,this.product.description=r.description,this.product.picture=r.picture,this.isNewProduct=!1}},methods:{saveProduct(){this.isNewProduct?(this.createProduct(this.product),this.product=this.setFormatData(),this.productSuccess="Se ha creado un nuevo producto exitosamente."):(this.editProduct(this.product,this.product.id),this.productSuccess="Se ha actualizado el producto exitosamente.")},async getOneProduct(t){let{data:r}=await this.productsDB.getProduct(t);this.product=r},async editProduct(t,r){await this.productsDB.updateProduct(t,r)},async createProduct(t){await this.productsDB.storeProduct(t)},setFormatData(){return{name:"",price:0,description:"",picture:""}}}},st=et,at=(0,d.Z)(st,tt,rt,!1,null,"a841ba20",null),it=at.exports,ot=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[t.orderError?r("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.orderError))]):t._e(),r("div",{staticClass:"admin-orders"},[r("h2",[t._v("Listado de Pedidos")]),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.name))]),r("td",[e.orders.length?r("ul",t._l(e.orders,(function(e,s){return r("li",{key:s},[r("ul",t._l(e,(function(s,a){return r("li",{key:a},[t._v(" "+t._s(s.name)+" x "+t._s(e.quantity)+" = "+t._s(s.price*e.quantity)+" ")])})),0)])})),0):r("ul",[r("li",[t._v(" Aún sin compra. ")])])])])})),0)])])])},nt=[function(){var t=this,r=t._self._c;return r("thead",[r("tr",[r("th",[t._v("Usuario")]),r("th",[t._v("Productos")])])])}],ct={data(){return{users:[],usersDB:new P,orderError:""}},mounted(){this.isLogin||(this.orderError="No tiene permitido acceder a este sitio."),this.getAllUsers()},methods:{formattedPrice(t){return`CLP $${t}`},async getAllUsers(){let{data:t}=await this.usersDB.getUsers();this.users=t}}},ut=ct,dt=(0,d.Z)(ut,ot,nt,!1,null,"71f8099a",null),lt=dt.exports,mt=function(){var t=this;t._self._c;return t._m(0)},pt=[function(){var t=this,r=t._self._c;return r("div",[r("p",[t._v("ProductDetail")])])}],vt={name:"ProductDetail"},ht=vt,gt=(0,d.Z)(ht,mt,pt,!1,null,"1e03afde",null),ft=gt.exports,_t=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"cart"},[r("h2",[t._v("Carrito de Compras")]),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.cartItems,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.product.name))]),r("td",[t._v(t._s(t.formattedPrice(e.product.price)))]),r("td",{staticClass:"quantity-column"},[r("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(r){return t.decreaseQuantity(e)}}},[t._v("-")]),t._v(" "+t._s(e.quantity)+" "),r("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(r){return t.increaseQuantity(e)}}},[t._v("+")])]),r("td",[t._v(t._s(t.formattedPrice(e.product.price*e.quantity)))]),r("td",[r("button",{staticClass:"btn btn-sm btn-danger",on:{click:function(r){return t.removeItem(e)}}},[t._v("Eliminar")])])])})),0),r("tfoot",[r("tr",[r("td",{attrs:{colspan:"3"}},[t._v("Total:")]),r("td",[t._v(t._s(t.formattedPrice(t.totalPrice)))]),r("td")])])]),0===t.cartItems.length?r("div",{staticClass:"empty-cart"},[t._v(" No hay productos en el carrito ")]):r("button",{staticClass:"btn btn-primary",on:{click:t.confirmPurchase}},[t._v("Confirmar Compra")])])])},Ct=[function(){var t=this,r=t._self._c;return r("thead",[r("tr",[r("th",[t._v("Producto")]),r("th",[t._v("Precio")]),r("th",{staticClass:"quantity-column"},[t._v("Cantidad")]),r("th",[t._v("Subtotal")]),r("th")])])}],bt={name:"Cart",data(){return{cartDB:new T}},computed:{cartItems(){return this.cartInProgress},totalPrice(){return this.$store.getters.cartTotalPrice}},methods:{increaseQuantity(t){this.$store.commit("increaseQuantity",t)},decreaseQuantity(t){t.quantity>1&&this.$store.commit("decreaseQuantity",t)},removeItem(t){this.$store.commit("removeItem",t)},formattedPrice(t){return`CLP $${t}`},async confirmPurchase(){await this.cartDB.updateCart(this.userId,this.cartItems);this.$store.commit("clearCart"),alert("¡Felicidades por tu compra!"),setTimeout((()=>{this.$router.push("/home")}),3e3)}}},yt=bt,wt=(0,d.Z)(yt,_t,Ct,!1,null,"5f3d1b77",null),Pt=wt.exports;s.ZP.use(f.ZP);const Dt=[{path:"/",redirect:"/Login"},{path:"/Login",component:$},{path:"/register",component:S},{path:"/home",component:J,children:[{path:"",component:F},{path:"product/:id",component:ft}]},{path:"/cart",component:Pt},{path:"/admin/products",component:X},{path:"/admin/product/new",component:it},{path:"/admin/product/:id/edit",component:it},{path:"/admin/orders",component:lt},{path:"*"}],xt=new f.ZP({mode:"history",base:"/",routes:Dt});var Et=xt,$t=e(3822);const It={isLogin:!1,user:{}},Zt={isLoggedIn:(t,r)=>{t.isLogin=r},userData:(t,r)=>{t.user=r,r?localStorage.setItem("user",JSON.stringify(r)):localStorage.removeItem("user")}},kt={isLoggedIn:({commit:t},r)=>{t("isLoggedIn",r)},userData:({commit:t},r)=>{t("userData",r)}};var Lt={state:It,mutations:Zt,actions:kt};const Nt={cart:[]},St={cartItems:t=>t.cart,cartTotalPrice:t=>t.cart.reduce(((t,r)=>t+r.product.price*r.quantity),0)},Bt={addToCart:(t,r)=>{const e=t.cart.find((t=>t.product.id===r.id));e?e.quantity++:t.cart.push({product:r,quantity:1})},increaseQuantity:(t,r)=>{r.quantity++},decreaseQuantity:(t,r)=>{r.quantity>1&&r.quantity--},removeItem:(t,r)=>{const e=t.cart.indexOf(r);t.cart.splice(e,1)},clearCart:t=>{t.cart=[]},deleteItemCart:(t,r)=>{t.cart.splice(r,1)},deleteCart:t=>{t.cart=[]}},At={addToCart:({commit:t},r)=>{t("addToCart",r)},increaseQuantity:({commit:t},r)=>{t("increaseQuantity",r)},decreaseQuantity:({commit:t},r)=>{t("decreaseQuantity",r)},removeItem:({commit:t},r)=>{t("removeItem",r)},clearCart:({commit:t})=>{t("clearCart")},deleteItemCart:({commit:t},r)=>{t("deleteItemCart",r)},deleteCart:({commit:t})=>{t("deleteCart")}};var qt={state:Nt,getters:St,mutations:Bt,actions:At};s.ZP.use($t.ZP);var Ot=new $t.ZP.Store({modules:{user:Lt,cart:qt}});e(2166);const Ut={computed:{isLogin(){return this.$store.state.user.isLogin},isAdmin(){return this.$store.state.user.user.admin},userId(){return this.$store.state.user.user.id},cartInProgress(){return this.$store.state.cart.cart}}};s.ZP.mixin(Ut),s.ZP.config.productionTip=!1,new s.ZP({router:Et,store:Ot,render:t=>t(g)}).$mount("#app")}},r={};function e(s){var a=r[s];if(void 0!==a)return a.exports;var i=r[s]={exports:{}};return t[s].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(r,s,a,i){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],i=t[d][2];for(var n=!0,c=0;c<s.length;c++)(!1&i||o>=i)&&Object.keys(e.O).every((function(t){return e.O[t](s[c])}))?s.splice(c--,1):(n=!1,i<o&&(o=i));if(n){t.splice(d--,1);var u=a();void 0!==u&&(r=u)}}return r}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,a,i]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,s){var a,i,o=s[0],n=s[1],c=s[2],u=0;if(o.some((function(r){return 0!==t[r]}))){for(a in n)e.o(n,a)&&(e.m[a]=n[a]);if(c)var d=c(e)}for(r&&r(s);u<o.length;u++)i=o[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},s=self["webpackChunkproyecto2burgos"]=self["webpackChunkproyecto2burgos"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(406)}));s=e.O(s)})();
//# sourceMappingURL=app.711187ae.js.map