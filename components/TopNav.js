Vue.component('TopNav',{
    template:`<div class="topnav">
                <div class="topnav_bd w1210 bc">
                    <div class="topnav_left"></div>
                    <div class="topnav_right fr">
                        <ul>
                            <li><a href="flow1.html">我的购物车</a></li>
                            <li v-if="name==null">您好，欢迎来到京西！[<a href="login.html">登录</a>] [<a href="regist.html">免费注册</a>] </li>
                            <li v-else>您好，{{name}}！[<a href="" @click.prevent="logout">退出</a>] [<a href="order.html">我的订单</a>] </li>
                            <li class="line">|</li>
                            <li>我的订单</li>
                            <li class="line">|</li>
                            <li>客户服务</li>

                        </ul>
                    </div>
                </div>
            </div>`,
    data:function(){
        return {
            name:localStorage.getItem('name')
        }
    },
    methods:{
        logout:function(){
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            this.name = null
        }
    }
})