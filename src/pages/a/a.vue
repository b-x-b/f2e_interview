<template>
    <div>
         <ul class="list">
             <li>
                 <span>姓名</span>
                 <span>手机</span>
                 <span>部门</span>
                 <span>日期</span>
             </li>
             <li v-for="item in listDatas">
                 <span>姓名</span>
                 <span>手机</span>
                 <span>部门</span>
                 <span>日期</span>
             </li>
         </ul>
    </div>
</template>

<script>
   export default {
     data () {
       return {
       		 listDatas:[]
       }
            
     },
     mounted(){
     	this.getList();
     },
       methods : {
         getList () {
         	const self = this;
         	// 传参
         	const params = {
         		 
         	}
         	 this.$api.getAlist(params).then( res => {
         	 	let { code, msg, result } = res;
         	 	// 失败
         	 	if(code !== 200){
         	 		console.log(msg)
         	 	}else{
         	 		self.listDatas = result;
         	 	}
         	 })
         	 .catch( err =>{
         	 	console.log(err)
         	 })
         }
       }
   }
</script>

<style lang='scss' scoped>
   .list {
      li {
        font-size:0;
      	span{
      		display:inline-block;
      		font-size:14px;
      	}
      }
   }
</style>