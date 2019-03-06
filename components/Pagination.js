Vue.component('pagination',{
    // props:['total_page','page'],
    // 定义属性时可以指定类型，然后如果传的值不是这种类型的，就会报错（便于调试！）
    props:{
        total_page:Number,   // 总页数
        page:Number          // 当前页
    },
    template:`
                <div class="page mt20">
                    <a @click.prevent="pageClick(1)" href="">首页</a>
                    <a @click.prevent="pageClick(cur_page-1)" href="">上一页</a>
                    <a @click.prevent="pageClick(v)" :class="{cur:v==page}" v-for="v in pageRange" href=""> {{v}} </a>
                    <a @click.prevent="pageClick(cur_page+1)" href="">下一页</a>
                    <a @click.prevent="pageClick(total_page)" href="">尾页</a>
                    总页数：{{total_page}}
                    <input v-model="cur_page" style="width:50px" type="number">
                    <input @click.prevent="pageClick(cur_page)" type="button" value="确定">
                </div>
            `,
    data:function(){
        return {
            cur_page:this.page
        }
    },
    // 如果数据是通过计算得来的就放到这里
    computed:{
        // 数组：页码范围
        pageRange:function(){
            console.log( this.page  )
            // Math.max 取出最大值
            let star = Math.max(this.page-3,1)    // 确保得到一个 >=1的数
            let end = Math.min(this.page+3,this.total_page)   // 得到一个<=总的页数的数

            // 构造范围页码的数组
            let page = []
            for(let i=star;i<=end;i++){
                page.push(i)
            }

            return page
        }
    },
    methods:{
        pageClick:function(num){
            if(num<1)
                num=1
            if(num>this.total_page)
                num=this.total_page
            // 通知使用这个组件的页面（父组件）
            // 参数一、消息的名字
            // 参数二、传的数据
            this.$emit('page_changed', parseInt(num))
            // 更新当前页码
            this.cur_page = num
        }
    }
})
