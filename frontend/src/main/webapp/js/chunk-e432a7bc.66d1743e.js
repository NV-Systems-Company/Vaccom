(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e432a7bc"],{"0fd9":function(t,a,e){"use strict";var n=e("ade3"),o=e("5530"),i=(e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),s=e("d9f7"),r=e("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,a){return c.reduce((function(e,n){return e[t+Object(r["D"])(n)]=a(),e}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:u}})),g=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},m=d("justify",(function(){return{type:String,default:null,validator:g}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=d("alignContent",(function(){return{type:String,default:null,validator:p}})),f={align:Object.keys(h),justify:Object.keys(m),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function S(t,a,e){var n=b[t];if(null!=e){if(a){var o=a.replace(t,"");n+="-".concat(o)}return n+="-".concat(e),n.toLowerCase()}}var C=new Map;a["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(o["a"])(Object(o["a"])(Object(o["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:g}},m),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,a){var e=a.props,o=a.data,i=a.children,r="";for(var c in e)r+=String(e[c]);var l=C.get(r);return l||function(){var t,a;for(a in l=[],f)f[a].forEach((function(t){var n=e[t],o=S(a,t,n);o&&l.push(o)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(n["a"])(t,"align-".concat(e.align),e.align),Object(n["a"])(t,"justify-".concat(e.justify),e.justify),Object(n["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),C.set(r,l)}(),t(e.tag,Object(s["a"])(o,{staticClass:"row",class:l}),i)}})},"2a7f":function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return i}));var n=e("71d9"),o=e("80d2"),i=Object(o["h"])("v-toolbar__title"),s=Object(o["h"])("v-toolbar__items");n["a"]},"2fa4":function(t,a,e){"use strict";e("20f6");var n=e("80d2");a["a"]=Object(n["h"])("spacer","div","v-spacer")},"4aa1":function(t,a,e){},"5e23":function(t,a,e){},"67c5":function(t,a,e){},"71d9":function(t,a,e){"use strict";var n=e("3835"),o=e("5530"),i=(e("a9e3"),e("0481"),e("5e23"),e("8dd9")),s=e("adda"),r=e("80d2"),c=e("d9bd");a["a"]=i["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var a=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(a)?0:a)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(o["a"])(Object(o["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(o["a"])(Object(o["a"])({},this.measurableStyles),{},{height:Object(r["g"])(this.computedHeight)})}},created:function(){var t=this,a=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];a.forEach((function(a){var e=Object(n["a"])(a,2),o=e[0],i=e[1];t.$attrs.hasOwnProperty(o)&&Object(c["a"])(o,i,t)}))},methods:{genBackground:function(){var t={height:Object(r["g"])(this.computedHeight),src:this.src},a=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(s["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[a])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["g"])(this.computedContentHeight)}},Object(r["r"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["g"])(this.extensionHeight)}},Object(r["r"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var a=[this.genContent()],e=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&a.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&a.unshift(this.genBackground()),t(this.tag,e,a)}})},"87c2":function(t,a,e){"use strict";e("67c5")},a711:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card-text",{staticClass:"px-0"},[e("v-row",[e("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Họ tên",outlined:"",placeholder:"Họ và tên",dense:"",clearable:"","hide-details":"auto"},model:{value:t.dataSearch["HoVaTen"],callback:function(a){t.$set(t.dataSearch,"HoVaTen",a)},expression:"dataSearch['HoVaTen']"}})],1),e("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Số CMND/ CCCD",outlined:"",placeholder:"Số CMND/ CCCD",dense:"",clearable:"","hide-details":"auto"},model:{value:t.dataSearch["CMTCCCD"],callback:function(a){t.$set(t.dataSearch,"CMTCCCD",a)},expression:"dataSearch['CMTCCCD']"}})],1),e("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[e("v-text-field",{attrs:{label:"Ngày đăng ký tiêm",outlined:"",placeholder:"dd/mm/yyyy, ddmmyyyy",dense:"",clearable:"","hide-details":"auto"},model:{value:t.ngayDangKyFormatted,callback:function(a){t.ngayDangKyFormatted=a},expression:"ngayDangKyFormatted"}})],1),e("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[e("v-autocomplete",{attrs:{items:t.listDoiTuong,placeholder:"Nhóm đối tượng","item-text":"doiTuongMoTa","item-value":"id","hide-no-data":"",outlined:"",dense:"","hide-details":"auto",clearable:""},model:{value:t.dataSearch["NhomDoiTuong"],callback:function(a){t.$set(t.dataSearch,"NhomDoiTuong",a)},expression:"dataSearch['NhomDoiTuong']"}})],1),e("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[e("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listCoSoYTe,"item-text":"tenCoSo","item-value":"maCoSo",outlined:"",placeholder:"Cơ sở y tế",dense:"","hide-details":"auto",clearable:""},model:{value:t.coSoYTe,callback:function(a){t.coSoYTe=a},expression:"coSoYTe"}})],1),e("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[e("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listDiaBan,"item-text":"tenDiaBan","item-value":"id",outlined:"",placeholder:"Tổ dân phố, khóm ấp, thôn bản…",dense:"","hide-details":"auto",clearable:""},model:{value:t.dataSearch["DiaBanCoSo_ID"],callback:function(a){t.$set(t.dataSearch,"DiaBanCoSo_ID",a)},expression:"dataSearch['DiaBanCoSo_ID']"}})],1),e("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[e("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listTrangThaiTrung,"item-text":"name","item-value":"value",outlined:"",placeholder:"Kiểm tra trùng lặp",dense:"","hide-details":"auto",clearable:""},model:{value:t.dataSearch["KiemTraTrung"],callback:function(a){t.$set(t.dataSearch,"KiemTraTrung",a)},expression:"dataSearch['KiemTraTrung']"}})],1)],1),e("v-row",{staticClass:"justify-end"},[e("v-btn",{staticClass:"mt-3 mx-3",attrs:{color:"red",small:""},on:{click:t.cancelSearch}},[e("v-icon",{attrs:{left:"",size:"20"}},[t._v(" mdi-close ")]),t._v(" Thoát ")],1),e("v-btn",{staticClass:"mt-3 mx-3",attrs:{color:"#0072bc",small:""},on:{click:function(a){return t.$emit("trigger-search",t.dataSearch)}}},[e("v-icon",{attrs:{left:"",size:"20"}},[t._v(" mdi-content-save ")]),t._v(" Lọc danh sách ")],1)],1)],1)],1)},o=[],i=(e("7db0"),e("498a"),e("ac1f"),e("1276"),e("fb6a"),{name:"Search",props:[],data:function(){return{listDoiTuong:[],listDiaBan:[],listCoSoYTe:[],coSoYTe:"",dataSearch:{HoVaTen:"",CMTCCCD:"",NhomDoiTuong:"",DiaBanCoSo_ID:"",CoSoYTe_Ma:"",NgayDangKi:"",KiemTraTrung:-1},listTrangThaiTrung:[{name:"Chưa kiểm tra",value:0},{name:"Đã kiểm tra, không trùng lặp",value:1},{name:"Đã kiểm tra, bị trùng lặp",value:2}],ngayDangKyFormatted:""}},created:function(){var t=this;t.getCoSoYTe(),t.getDiaBanCoSo(),t.getNhomDoiTuong()},watch:{coSoYTe:function(t){this.dataSearch.CoSoYTe_Ma=t,this.getDiaBanCoSo(t)}},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName},userLogin:function(){return this.$store.getters.getPermistion}},methods:{cancelSearch:function(){var t=this;t.dataSearch={HoVaTen:"",CMTCCCD:"",NhomDoiTuong:"",DiaBanCoSo_ID:"",CoSoYTe_Ma:"",NgayDangKi:"",KiemTraTrung:-1},t.$emit("trigger-cancel",t.dataSearch)},getDiaBanCoSo:function(t){var a=this,e={id:-1};if(t){var n=a.listCoSoYTe.find((function(a){return a.maCoSo==t}));e={id:n["id"]}}a.$store.dispatch("getDiaBanCoSo",e).then((function(t){t.hasOwnProperty("data")&&t.data.length&&(a.listDiaBan=t.data)}))},getCoSoYTe:function(){var t=this,a={};t.$store.dispatch("getCoSoYTe",a).then((function(a){t.listCoSoYTe=a||[]}))},getNhomDoiTuong:function(){var t=this,a={};t.$store.dispatch("getNhomDoiTuong",a).then((function(a){t.listDoiTuong=a||[]}))},formatNgayDangKy:function(){var t=this,a=String(t.ngayDangKyFormatted).trim().length,e=String(t.ngayDangKyFormatted).split("/");if(a&&a>4&&3===e.length&&e[2])t.ngayDangKyFormatted=t.translateDate(t.ngayDangKyFormatted);else if(a&&8===a){var n=String(t.ngayDangKyFormatted);t.ngayDangKyFormatted=n.slice(0,2)+"/"+n.slice(2,4)+"/"+n.slice(4,8)}else t.ngayDangKyFormatted=""}}}),s=i,r=(e("87c2"),e("2877")),c=e("6544"),l=e.n(c),d=e("c6a6"),u=e("8336"),h=e("99d9"),g=e("62ad"),m=e("132d"),p=e("0fd9"),v=e("8654"),f=Object(r["a"])(s,n,o,!1,null,"53d58221",null);a["a"]=f.exports;l()(f,{VAutocomplete:d["a"],VBtn:u["a"],VCardText:h["b"],VCol:g["a"],VIcon:m["a"],VRow:p["a"],VTextField:v["a"]})},c4eb:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",{style:"xs"===t.breakpointName||"sm"===t.breakpointName?"padding-top: 75px":"",attrs:{id:"users",fluid:"",tag:"section"}},[e("base-material-card",{staticClass:"px-5 py-3",staticStyle:{"margin-top":"20px"},attrs:{icon:"mdi-clipboard-text",title:"DANH SÁCH ĐĂNG KÝ TIÊM MỚI"}},[e("v-btn",{staticClass:"mx-0",staticStyle:{position:"absolute",right:"40px",top:"15px"},attrs:{color:"#0072bc",small:""},on:{click:function(a){return a.stopPropagation(),t.showTimKiem(a)}}},[e("v-icon",{attrs:{left:"",size:"20"}},[t._v(" mdi-filter-plus-outline ")]),t._v(" Lọc danh sách ")],1),t.showAdvanceSearch?e("v-card-text",[e("tim-kiem",{ref:"timkiem",on:{"trigger-search":t.searchDangKyTiem,"trigger-cancel":t.cancelSearchDangKyTiem}})],1):t._e(),e("v-card-text",{class:"lg"!==t.breakpointName?"px-0":"pt-0"},[e("div",{class:"xs"===t.breakpointName?"mb-3":"d-flex my-3"},["xs"===t.breakpointName?e("div",{staticClass:"mr-auto pt-2 mb-3"},[t._v(" Tổng số: "),e("span",{staticStyle:{"font-weight":"bold",color:"green"}},[t._v(t._s(t.totalItem))]),t._v(" người ")]):e("span",{staticClass:"mr-auto pt-2"},[t._v(" Tổng số: "),e("span",{staticStyle:{"font-weight":"bold",color:"green"}},[t._v(t._s(t.totalItem))]),t._v(" người ")]),e("v-btn",{staticClass:"mx-0 mr-4",attrs:{color:"#0072bc",small:"",loading:t.processingAction,disabled:t.processingAction},on:{click:function(a){return a.stopPropagation(),t.exportDanhSach(a)}}},[e("v-icon",{attrs:{left:"",size:"20"}},[t._v(" mdi-export ")]),t._v(" Xuất danh sách ")],1),e("v-btn",{staticClass:"mx-0",attrs:{color:"green",small:"",loading:t.processingAction,disabled:t.processingAction},on:{click:function(a){return a.stopPropagation(),t.translateStatus("multiple")}}},[e("v-icon",{attrs:{left:"",size:"20"}},[t._v(" mdi-transfer ")]),t._v(" Chuyển đăng ký chính thức ")],1)],1),e("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":"",headers:t.headers,items:t.items,"items-per-page":t.itemsPerPage,"hide-default-footer":"","no-data-text":"Không có",loading:t.loadingData,"loading-text":"Đang tải... "},scopedSlots:t._u([{key:"item.index",fn:function(a){a.item;var n=a.index;return[e("div",[t._v(t._s((t.page+1)*t.itemsPerPage-t.itemsPerPage+n+1))])]}},{key:"item.hoVaTen",fn:function(a){var n=a.item;a.index;return[e("div",{style:2==n.kiemTraTrung?"background: yellow":"",attrs:{title:2==n.kiemTraTrung?"Đăng ký trùng lặp":""}},[e("p",{staticClass:"mb-0",staticStyle:{"font-weight":"500"}},[t._v(t._s(n.hoVaTen))]),e("p",{staticClass:"mb-2",staticStyle:{color:"blue"}},[t._v("Ngày sinh: "+t._s(n.ngaySinh))])])]}},{key:"item.cmtcccd",fn:function(a){var n=a.item;a.index;return[e("p",{staticClass:"mb-2"},[t._v(t._s(n.cmtcccd))])]}},{key:"item.nhomDoiTuong",fn:function(a){var n=a.item;a.index;return[e("p",{staticClass:"mb-2"},[t._v(t._s(n.nhomDoiTuong))])]}},{key:"item.soDienThoai",fn:function(a){var n=a.item;a.index;return[e("p",{staticClass:"mb-2"},[t._v(t._s(n.soDienThoai))])]}},{key:"item.diaChiNoiO",fn:function(a){var n=a.item;a.index;return[e("p",{staticClass:"mb-2"},[t._v(t._s(n.diaChiNoiO)+" - "+t._s(n.phuongXaTen)+" - "+t._s(n.quanHuyenTen)+" - "+t._s(n.tinhThanhTen))])]}},{key:"item.ngayDangKi",fn:function(a){var n=a.item;a.index;return[e("p",{staticClass:"mb-2"},[t._v(t._s(n.ngayDangKi))])]}},{key:"item.action",fn:function(a){var n=a.item;return[e("div",{staticStyle:{width:"150px"}},[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"blue",text:"",icon:""},on:{click:function(a){return t.editRegistration(n)}}},"v-btn",i,!1),o),[e("v-icon",{attrs:{size:"22"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Sửa thông tin")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"red",text:"",icon:""},on:{click:function(a){return t.removeRegistrationStatus(n)}}},"v-btn",i,!1),o),[e("v-icon",{attrs:{size:"22"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[e("span",[t._v("Xóa đăng ký")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"green",text:"",icon:""},on:{click:function(a){return t.translateStatus(n)}}},"v-btn",i,!1),o),[e("v-icon",{attrs:{size:"22"}},[t._v("mdi-transfer")])],1)]}}],null,!0)},[e("span",[t._v("Chuyển chính thức")])])],1)]}}]),model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}}),t.pageCount?e("pagination",{attrs:{pageInput:t.page,pageCount:t.pageCount},on:{"tiny:change-page":t.changePage}}):t._e()],1)],1),e("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-toolbar-title",[t._v("Thông tin chi tiết")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{icon:"",dark:""},on:{click:function(a){t.dialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("v-card-text",{staticClass:"mt-5"}),e("v-card-actions",{staticClass:"justify-end"},[e("v-btn",{staticClass:"white--text mr-2",attrs:{color:"red",loading:t.loading,disabled:t.loading},on:{click:function(a){t.dialog=!1}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" Thoát ")],1)],1)],1)],1)],1)],1)},o=[],i=(e("d3b7"),e("25f0"),e("d81d"),e("fb6a"),e("a711")),s=e("cf9c"),r={name:"Customers",components:{"tim-kiem":i["a"],pagination:s["a"]},data:function(){return{loading:!1,loadingData:!1,processingAction:!1,listDaiLy:[],dailySelected:"",dialog:!1,lastVisible:"",firstVisible:"",totalItem:0,page:0,pageCount:0,itemsPerPage:50,items:[],advanceSearchData:{codeNumber:"",customerTelNo:"",branchUid:""},showAdvanceSearch:!1,selected:[],dataInputSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"index"},{sortable:!1,text:"Họ tên",align:"left",value:"hoVaTen"},{sortable:!1,text:"Số CMND/ CCCD",align:"left",value:"cmtcccd"},{sortable:!1,text:"Mã nhóm đối tượng",align:"left",value:"nhomDoiTuong"},{sortable:!1,text:"Số điện thoại",align:"left",value:"soDienThoai"},{sortable:!1,text:"Địa chỉ",align:"left",value:"diaChiNoiO"},{sortable:!1,text:"Ngày đăng ký tiêm",align:"center",value:"ngayDangKi"},{sortable:!1,text:"Thao tác",align:"center",value:"action"}]}},created:function(){var t=this;t.$store.commit("SET_INDEXTAB",1);var a=this.$store.getters.getIsSigned;a?t.getDanhSachDangKyMoi(0):t.$router.push({path:"/login?redirect=/pages/danh-sach-dang-ky-tiem-moi"})},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName},userLogin:function(){return this.$store.getters.getPermistion}},methods:{searchDangKyTiem:function(t){var a=this;console.log("dataSearch",t),a.dataInputSearch=t,a.page=0,a.totalItem=0,a.pageCount=0,a.getDanhSachDangKyMoi(0,t)},cancelSearchDangKyTiem:function(t){var a=this;a.showAdvanceSearch=!1,a.dataInputSearch=t,a.page=0,a.totalItem=0,a.pageCount=0,a.getDanhSachDangKyMoi(0,t)},showTimKiem:function(){var t=this;t.showAdvanceSearch=!0},getDanhSachDangKyMoi:function(t,a){var e=this;e.loadingData=!0;var n={page:t,size:e.itemsPerPage,tinhtrangdangky:0,cmtcccd:a&&a["CMTCCCD"]?a["CMTCCCD"]:"",nhomdoituong:a&&a["NhomDoiTuong"]?a["NhomDoiTuong"]:"",ngaydangki:a&&a["NgayDangKi"]?a["NgayDangKi"]:"",hovaten:a&&a["HoVaTen"]?a["HoVaTen"]:"",diabancosoid:a&&a["DiaBanCoSo_ID"]?a["DiaBanCoSo_ID"]:"",cosoytema:a&&a["CoSoYTe_Ma"]?a["CoSoYTe_Ma"]:"",kiemtratrung:a&&a["KiemTraTrung"]?a["KiemTraTrung"]:""};e.$store.dispatch("getNguoiTiemChung",n).then((function(t){e.loadingData=!1,t?(e.items=t.hasOwnProperty("data")?t.data:[],e.totalItem=t.hasOwnProperty("total")?t.total:0,e.pageCount=Math.ceil(e.totalItem/e.itemsPerPage)):(e.items=[],e.totalItem=0)})).catch((function(){e.loadingData=!1}))},translateStatus:function(t,a){var e=this,n="";if("multiple"===t){if(0===e.selected.length)return void e.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Vui lòng chọn người đăng ký muốn chuyển",color:"success"});n=e.selected.map((function(t){return t["id"]})).toString(),console.log("selected",n)}var o={data:{ids:"multiple"===t?n:String(t.id),TinhTrangDangKi:"remove"===a?2:1}};if(o["data"]["ids"]){var i="remove"===a?"Bạn có chắc chắn muốn Rút đăng ký":"Bạn có chắc chắn muốn Chuyển đăng ký",s=confirm(i);s&&e.$store.dispatch("updateRegistrationStatus",o).then((function(t){e.$store.commit("SHOW_SNACKBAR",{show:!0,text:"remove"===a?"Rút thành công":"Chuyển thành công",color:"success"}),e.getDanhSachDangKyMoi(0),e.selected=[]})).catch((function(){e.$store.commit("SHOW_SNACKBAR",{show:!0,text:"remove"===a?"Rút thất bại":"Chuyển thất bại",color:"error"})}))}},removeRegistrationStatus:function(t){var a=this,e="Bạn có chắc chắn muốn xóa đăng ký",n=confirm(e);n&&a.$store.dispatch("removeRegistrationStatus",t).then((function(t){a.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Xóa thành công",color:"success"}),a.getDanhSachDangKyMoi(0),a.selected=[]})).catch((function(){a.$store.commit("SHOW_SNACKBAR",{show:!0,text:"Xóa thất bại",color:"error"})}))},exportDanhSach:function(){var t=this;t.processingAction=!0;var a={typeList:"DanhSachTiemMoi",data:{page:-1,size:-1,tinhtrangdangky:0,cmtcccd:t.dataInputSearch&&t.dataInputSearch["CMTCCCD"]?t.dataInputSearch["CMTCCCD"]:"",nhomdoituong:t.dataInputSearch&&t.dataInputSearch["NhomDoiTuong"]?t.dataInputSearch["NhomDoiTuong"]:"",ngaydangki:t.dataInputSearch&&t.dataInputSearch["NgayDangKi"]?t.dataInputSearch["NgayDangKi"]:"",hovaten:t.dataInputSearch&&t.dataInputSearch["HoVaTen"]?t.dataInputSearch["HoVaTen"]:"",diabancosoid:t.dataInputSearch&&t.dataInputSearch["DiaBanCoSo_ID"]?t.dataInputSearch["DiaBanCoSo_ID"]:"",cosoytema:t.dataInputSearch&&t.dataInputSearch["CoSoYTe_Ma"]?t.dataInputSearch["CoSoYTe_Ma"]:"",kiemtratrung:t.dataInputSearch&&t.dataInputSearch["KiemTraTrung"]?t.dataInputSearch["KiemTraTrung"]:-1}};t.$store.dispatch("exportDanhSach",a).then((function(a){t.processingAction=!1})).catch((function(){t.processingAction=!1}))},changePage:function(t){var a=this;a.page=t.page,a.getDanhSachDangKyMoi(t.page,a.dataInputSearch)},editRegistration:function(t){var a=this;a.$store.commit("SET_RegistrationUpdate",t),a.$router.push("/pages/dang-ky-tiem-moi/"+t.id)},parseDate:function(t){if(t){var a=String(t).length;return 4===a?t:String(t).slice(6,8)+"/"+String(t).slice(4,6)+"/"+String(t).slice(0,4)}return""}}},c=r,l=(e("edcc"),e("2877")),d=e("6544"),u=e.n(d),h=e("8336"),g=e("b0af"),m=e("99d9"),p=e("a523"),v=e("8fea"),f=e("169a"),b=e("132d"),S=e("2fa4"),C=e("71d9"),y=e("2a7f"),T=e("3a2f"),D=Object(l["a"])(c,n,o,!1,null,"3a50e079",null);a["default"]=D.exports;u()(D,{VBtn:h["a"],VCard:g["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:p["a"],VDataTable:v["a"],VDialog:f["a"],VIcon:b["a"],VSpacer:S["a"],VToolbar:C["a"],VToolbarItems:y["a"],VToolbarTitle:y["b"],VTooltip:T["a"]})},edcc:function(t,a,e){"use strict";e("4aa1")}}]);