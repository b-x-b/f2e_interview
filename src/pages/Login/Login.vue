<template>
    <div>
        <div class="login-left">

        </div>
        <div class="login-right">
            <ul>
                <li>
                    <span class=""></span><input type="text" v-model="account" placeholder='请输入个人账号'/>
                </li>
                <li>
                    <span class=""></span><input type="text" v-model="password" placeholder='请输入密码'/>
                </li> 
                <li>
                    <button @click='submit'>进入</button>
                </li>
                <li>
                    <span>忘记密码？</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
   export default {
     data () {
       return {
       		account: 'testing',
            password: 'fsfa'
       }
            
     },
       methods : {
         submit () {
         	const params = {
         		account:this.account,
         		password:this.password
         	}
         	 this.$api.requestLogin(params).then( res => {
         	 	let { code, msg, result } = res;
         	 	if(code !== 200){
         	 		console.log(msg)
         	 	}else{
         	 		sessionStorage.setItem('token',result.token)
         	 	}
         	 })
         	 .catch( err =>{
         	 	console.log(err)
         	 })
         }
       }
   }
</script>a

<style lang='scss' scoped>
 
</style>