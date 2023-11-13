"use strict";(self["webpackChunkcode"]=self["webpackChunkcode"]||[]).push([[107],{2107:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var i=function(){var e=this,t=e._self._c;return t("div",[t("el-row",[t("el-col",{attrs:{span:24}},[t("el-card",{attrs:{header:" "}},[t("span",{staticClass:"header2"},[e._v("产品列表")]),t("el-form",{staticStyle:{margin:"0 0 0 300px"},attrs:{inline:!0}},[t("el-form-item",{attrs:{label:"产品名称："}},[t("el-input",{attrs:{placeholder:"名称",clearable:""},model:{value:e.searchProduct.productName,callback:function(t){e.$set(e.searchProduct,"productName",t)},expression:"searchProduct.productName"}})],1),t("el-form-item",[t("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1)],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:24}},[t("el-card",[t("el-header",{staticStyle:{"background-color":"#ffffff","margin-left":"-5px"}},[t("el-button",{attrs:{icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.handleSave()}}},[e._v("新增产品")])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.productData}},[t("el-table-column",{attrs:{width:"80",prop:"id",label:"ID"}}),t("el-table-column",{attrs:{width:"220",prop:"title",label:"产品名称"}}),t("el-table-column",{attrs:{width:"170",prop:"price",label:"价格/￥"}}),t("el-table-column",{attrs:{width:"210",prop:"createTime",label:"创建时间"}}),t("el-table-column",{attrs:{width:"210",prop:"updateTime",label:"更新时间"}}),t("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{staticStyle:{margin:"0 0 0 0"},attrs:{slot:"reference",icon:"el-icon-setting",size:"mini",type:"warning"},on:{click:function(t){return e.setDialog(r.row.id,r.row.title,r.row.price)}},slot:"reference"},[e._v("编辑 ")]),t("el-popconfirm",{attrs:{title:"确定删除"+r.row.title+"吗？"},on:{confirm:function(t){return e.remove(r.row.id)}}},[t("el-button",{staticStyle:{margin:"0 0 0 15px"},attrs:{slot:"reference",icon:"el-icon-close",size:"mini",type:"danger"},slot:"reference"},[e._v("删除 ")])],1)]}}])})],1)],1)],1)],1),t("el-row",{staticClass:"page-row"},[t("el-pagination",{staticClass:"el-pagination",attrs:{layout:"total, sizes, prev, pager, next, jumper","page-sizes":[5,10,30,50],"current-page":e.current,"page-size":e.size,total:e.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange,"prev-click":e.currentChange,"next-click":e.currentChange}})],1),t("el-dialog",{attrs:{title:"添加产品",visible:e.saveDialog,width:"600px"},on:{"update:visible":function(t){e.saveDialog=t}}},[t("el-form",{ref:"ruleForm",attrs:{model:e.productObj,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"产品名称",prop:"title",rules:[{required:!0,message:"名称不能为空"}]}},[t("el-input",{attrs:{maxlength:"8","show-word-limit":""},model:{value:e.productObj.title,callback:function(t){e.$set(e.productObj,"title",t)},expression:"productObj.title"}})],1),t("el-form-item",{attrs:{label:"价格(分)",prop:"price",rules:[{required:!0,message:"价格不能为空"},{type:"number",message:"价格必须为数字值"}]}},[t("el-input",{model:{value:e.productObj.price,callback:function(t){e.$set(e.productObj,"price",e._n(t))},expression:"productObj.price"}})],1),t("el-form-item",[t("el-button",{staticStyle:{width:"255px",margin:"45px 0 0 65px"},attrs:{type:"primary",disabled:""===e.productObj.title||null===e.productObj.price||""===e.productSet.price},on:{click:e.productAdd}},[e._v("立即添加 ")])],1)],1)],1),t("el-dialog",{attrs:{title:"编辑产品",visible:e.updateDialog,width:"600px"},on:{"update:visible":function(t){e.updateDialog=t}}},[t("el-form",{ref:"ruleForm",attrs:{model:e.productSet,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"产品ID",prop:"id"}},[t("el-input",{attrs:{disabled:!0},model:{value:e.productSet.id,callback:function(t){e.$set(e.productSet,"id",t)},expression:"productSet.id"}})],1),t("el-form-item",{attrs:{label:"产品名称",prop:"title",rules:[{required:!0,message:"名称不能为空"}]}},[t("el-input",{attrs:{maxlength:"8","show-word-limit":""},model:{value:e.productSet.title,callback:function(t){e.$set(e.productSet,"title",t)},expression:"productSet.title"}})],1),t("el-form-item",{attrs:{label:"价格(分)",prop:"price",rules:[{required:!0,message:"价格不能为空"},{type:"number",message:"价格必须为数字值"}]}},[t("el-input",{model:{value:e.productSet.price,callback:function(t){e.$set(e.productSet,"price",e._n(t))},expression:"productSet.price"}})],1),t("el-form-item",[t("el-button",{staticStyle:{width:"255px",margin:"45px 0 0 65px"},attrs:{type:"primary",disabled:""===e.productSet.title||null===e.productSet.price||""===e.productSet.price},on:{click:e.updateProduct}},[e._v("确定修改 ")])],1)],1)],1)],1)},l=[],a={data(){return{adminName:"",searchProduct:{productName:""},productData:[{id:1,title:"炒粉1",price:5,createTime:"2023-04-30 15:18:05",updateTime:"2023-05-02 13:25:37"},{id:2,title:"炒粉2",price:6,createTime:"2023-04-30 15:18:05",updateTime:"2023-05-02 13:25:37"},{id:3,title:"炒粉3",price:8,createTime:"2023-04-30 15:18:05",updateTime:"2023-05-02 13:25:37"},{id:4,title:"炒粉4",price:7,createTime:"2023-04-30 15:18:05",updateTime:"2023-05-02 13:25:37"},{id:5,title:"炒粉5",price:9,createTime:"2023-04-30 15:18:05",updateTime:"2023-05-02 13:25:37"}],size:5,current:1,total:0,saveDialog:!1,productObj:{title:"",price:null},updateDialog:!1,productSet:{id:null,title:"",price:null}}},created(){this.getData()},methods:{handleSave(){this.saveDialog=!0},setDialog(e,t,r){this.productSet.id=e,this.productSet.title=t,this.productSet.price=r,this.updateDialog=!0},remove(e){},productAdd(){},updateProduct(){},sizeChange(e){this.size=e,""!==this.searchProduct.productName?this.search():this.getData()},search(){""!==this.searchProduct.productName||this.$message.error("搜索的产品名不能为空")},currentChange(e){this.current=e,""!==this.searchProduct.productName?this.search():this.getData()},getData(){}}},c=a,o=r(1001),s=(0,o.Z)(c,i,l,!1,null,null,null),p=s.exports}}]);
//# sourceMappingURL=107.268b0a7b.js.map