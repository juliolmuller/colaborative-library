(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5e1676"],{"0a25":function(t,e,s){"use strict";s("af4b")},"9db2":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user-profile"}},[s("header",[s("ViewTitle",[t._v(" Perfil do Usuário ")]),t.isEditing?t._e():s("button",{staticClass:"btn btn-sm btn-light",attrs:{type:"button"},on:{click:t.toggleEditing}},[t._v(" Editar Dados ")])],1),s("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user-id"}},[t._v("Código de Cadastro:")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.user.id,expression:"user.id",modifiers:{number:!0}}],class:t.inputStyle,attrs:{type:"text",id:"user-id",readonly:""},domProps:{value:t.user.id},on:{input:function(e){e.target.composing||t.$set(t.user,"id",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user-name"}},[t._v("Nome Completo:")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.name,expression:"user.name",modifiers:{trim:!0}}],class:t.inputStyle,attrs:{type:"text",id:"user-name",readonly:!t.isEditing,required:"",autofocus:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user-email"}},[t._v("E-mail de Contato:")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.email,expression:"user.email",modifiers:{trim:!0}}],class:t.inputStyle,attrs:{type:"email",id:"user-email",readonly:!t.isEditing,required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t.isEditing?s("div",{staticClass:"card border-hero"},[s("h5",{staticClass:"card-header"},[t._v("Mudar Senha")]),s("div",{staticClass:"card-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user-password"}},[t._v("Senha Atual:")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.oldPassword,expression:"user.oldPassword",modifiers:{trim:!0}}],class:t.inputStyle,attrs:{type:"password",id:"user-password",required:Boolean(t.user.newPassword||t.user.newPasswordConfirmation)},domProps:{value:t.user.oldPassword},on:{input:function(e){e.target.composing||t.$set(t.user,"oldPassword",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user-new-password"}},[t._v("Nova Senha:")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.newPassword,expression:"user.newPassword",modifiers:{trim:!0}}],class:t.inputStyle,attrs:{type:"password",id:"user-new-password",required:Boolean(t.user.oldPassword||t.user.newPasswordConfirmation)},domProps:{value:t.user.newPassword},on:{input:function(e){e.target.composing||t.$set(t.user,"newPassword",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"user-new-password-confirmation"}},[t._v("Repetir a Nova Senha:")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.newPasswordConfirmation,expression:"user.newPasswordConfirmation",modifiers:{trim:!0}}],class:t.inputStyle,attrs:{type:"password",id:"user-new-password-confirmation",required:Boolean(t.user.oldPassword||t.user.newPassword)},domProps:{value:t.user.newPasswordConfirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"newPasswordConfirmation",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.passwordsMatch?t._e():s("div",{staticClass:"error-feedback"},[t._v(" A nova senha e sua confirmação não conferem. ")])])])]):t._e(),s("div",{staticClass:"action-btn"},[t.isEditing?s("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.toggleEditing}},[t._v("Cancelar")]):t._e(),t.isEditing?s("button",{staticClass:"btn btn-hero",attrs:{type:"submit",disabled:!t.passwordsMatch||t.isLoading}},[t._v("Concluído")]):t._e()])])])},i=[],a=s("2f62"),o=s("d246"),n={name:"UserProfile",components:{ViewTitle:o["a"]},data:()=>({isLoading:!1,isEditing:!1,dataBackup:{},user:{}}),computed:{...Object(a["c"])({appLoading:"isLoading",userById:"users/userById",userData:"auth/userData"}),passwordsMatch(){return this.user.newPassword===this.user.newPasswordConfirmation},inputStyle(){return{"form-control":this.isEditing,"form-control-plaintext":!this.isEditing,"font-weight-bold":!this.isEditing,"text-hero":!this.isEditing}}},watch:{user(t){this.dataBackup={...t}}},methods:{...Object(a["b"])("auth",{updateUserData:"update"}),toggleEditing(){this.isEditing=!this.isEditing,this.user={...this.dataBackup}},async handleSubmit(){this.isLoading=!0;try{await this.updateUserData(this.user),this.isEditing=!1}catch(t){throw t}finally{this.isLoading=!1}}},async mounted(){await new Promise(t=>{while(this.appLoading);t()}),this.user={...this.userData,oldPassword:"",newPassword:"",newPasswordConfirmation:""}}},u=n,d=(s("f36d"),s("2877")),l=Object(d["a"])(u,r,i,!1,null,null,null);e["default"]=l.exports},af4b:function(t,e,s){},d246:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"h1",attrs:{id:"view-title"}},[t._t("default")],2)},i=[],a={name:"ViewTitle"},o=a,n=(s("0a25"),s("2877")),u=Object(n["a"])(o,r,i,!1,null,null,null);e["a"]=u.exports},dcf9:function(t,e,s){},f36d:function(t,e,s){"use strict";s("dcf9")}}]);
//# sourceMappingURL=chunk-5a5e1676.f418d739.js.map