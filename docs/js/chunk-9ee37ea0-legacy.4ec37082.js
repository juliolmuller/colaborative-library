(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ee37ea0"],{"069c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"books-manager"}},[a("header",[a("ViewTitle",[t._v(" "+t._s(t.title)+" ")]),"userBooks"===t.type?a("RouterLink",{staticClass:"btn btn-hero",attrs:{to:{name:"BookDetails",params:{bookId:"novo"}}}},[t._v("+ Cadastrar Novo Livro")]):t._e()],1),t.books.length?t._l(t.books,(function(e){return a("div",{key:e.id,staticClass:"books-list"},[a("img",{attrs:{src:e.image,alt:"capa do livro"}}),a("div",{staticClass:"book-title"},[t._v(" "+t._s(e.name)+" ")]),a("RouterLink",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"BookDetails",params:{bookId:e.id}}}},[a("img",{attrs:{src:s("33bf"),alt:"ícone de edição"}}),a("span",{staticClass:"d-none d-lg-block"},[t._v("Ver Detalhes...")])])],1)})):a("div",{staticClass:"fallback-msg"},[t._v(" Nenhum livro aqui 🙂 ")])],2)},o=[],n=s("5530"),i=s("2f62"),r=s("d246"),l={name:"BooksManager",components:{ViewTitle:r["a"]},props:{type:{type:String,required:!0},title:{type:String,required:!0}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])("books",["userBooks","userLoans"])),{},{books:function(){return this[this.type]||[]}})},c=l,u=(s("d709"),s("2877")),d=Object(u["a"])(c,a,o,!1,null,null,null);e["default"]=d.exports},"0a25":function(t,e,s){"use strict";s("af4b")},"33bf":function(t,e,s){t.exports=s.p+"img/pencil.f7d47ee1.svg"},5857:function(t,e,s){},af4b:function(t,e,s){},d246:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"h1",attrs:{id:"view-title"}},[t._t("default")],2)},o=[],n={name:"ViewTitle"},i=n,r=(s("0a25"),s("2877")),l=Object(r["a"])(i,a,o,!1,null,null,null);e["a"]=l.exports},d709:function(t,e,s){"use strict";s("5857")}}]);
//# sourceMappingURL=chunk-9ee37ea0-legacy.4ec37082.js.map