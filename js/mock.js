/* 所有模拟的数据 */
// 模拟真实网络延迟
Mock.setup({
    timeout:500
})


Mock.mock('/regist','post',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)'
})

Mock.mock('/sms','post',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)'
})

Mock.mock('/login','post',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)',
    'token':'@title(64)',
    'name':'@ctitle(2,8)'
})
// 如果 URL 上面有参数的参数，要求我们用正则
Mock.mock(/\/news/,'get',{
    'total':"@integer(100,200)",
    'data|8':[
        {
            'id|+1':1,
            'title':"@ctitle(5,11)",
            'created_at':"@datetime"
        }
    ]
})

Mock.mock('/categorys','get',{
    'data|4-13':[
        {
            'id|+1':1,
            'cat_name':"@ctitle(2,5)",
            "children|4-10":[
                {
                    'id|+1':1,
                    'cat_name':"@ctitle(2,5)",
                    'children|4-10':[
                        {
                            'id|+1':1,
                            'cat_name':"@ctitle(2,5)"
                        }
                    ]
                }
            ]
        }
    ]
})


Mock.mock('/floors','get',{
    'data|5-10':[
        {
            'floor_name':'@ctitle',
            'sub_categorys|7-16':[
                {
                    'id|+1':1,
                    'cat_name':'@ctitle'
                }
            ],
            'left_ad':{
                'img':'@dataImage(208x170)',
                'link':"@url('http')"
            },
            'right_ad':{
                'img':'@dataImage(310x100)',
                'link':"@url('http')"
            },
            'news|2-5':[
                {
                    'id|+1':1,
                    'title':'@ctitle'
                }
            ],
            'brands|2-9':[
                {
                    'id|+1':1,
                    'logo':'@dataImage(98x35)',
                    'brand_name':'@ctitle'
                }
            ],
            'rec_goods|3-8':[
                {
                    'id|+1':1,
                    'logo':'@dataImage(130x130)',
                    'price':'@float(10,200000,0,2)',
                    'goods_name':'@ctitle'
                }
            ],
            'rec_categorys|1-4':[
                {
                    'id|+1':1,
                    'cat_name':"@ctitle",
                    'goods|3-8':[
                        {
                            'id|+1':1,
                            'logo':'@dataImage(130x130)',
                            'price':'@float(10,200000,0,2)',
                            'goods_name':'@ctitle'
                        }
                    ]
                }
            ]
        }
    ]
})
// 商品详情页（接口上有参数必须用正则）
Mock.mock(/\/goods\/\d+/,'get',{
    'skuid':'@id',
    'spuid':'@id',
    'goods_name':'@ctitle(30,40)',
    'price':'@float(10,200000,0,2)',
    'on_sale_date':'@datetime',
    'comment_count':'@integer(10,20000)',
    'comment_level':'@integer(1,5)',
    'cat1_info':{
        'id':'@id',
        'cat_name':"@ctitle"
    },
    'cat2_info':{
        'id':'@id',
        'cat_name':"@ctitle"
    },
    'cat3_info':{
        'id':'@id',
        'cat_name':"@ctitle"
    },
    'logo':{
        'smlogo':'@dataImage(50x50)',
        'biglogo':'@dataImage(350x350)',
        'xbiglogo':'@dataImage(800x800)',
    },
    'photos|3-10':[
        {
            'smimg':'@dataImage(50x50)',
            'bigimg':'@dataImage(350x350)',
            'xbigimg':'@dataImage(800x800)',
        }
    ],
    'description':'@ctitle(100,3000)',
    'aftersale':'@ctitle(100,3000)',
    'stock':"@integer(10,3000)",
    'spec_list':[
        {
            'id':1,
            "spec_name":"颜色",
            "options":[
                {
                    "id":1,
                    "option_name":"白色"
                },
                {
                    "id":2,
                    "option_name":"黑色"
                }
            ]
        },
        {
            'id':2,
            "spec_name":"内存",
            "options":[
                {
                    "id":6,
                    "option_name":"4G"
                },
                {
                    "id":7,
                    "option_name":"8G"
                },
                {
                    "id":8,
                    "option_name":"16G"
                }
            ]
        }
    ],
    'spec_info':{
        'id_list':'1:2|2:6',
        'id_txt':"颜色:黑色|内存:4G"
    },
    'sku_list':[
        {
            'skuid':'@id',
            'id_list':'1:2|2:6'
        },
        {
            'skuid':'@id',
            'id_list':'1:2|2:7'
        },
        {
            'skuid':'@id',
            'id_list':'1:2|2:8'
        },
        {
            'skuid':'@id',
            'id_list':'1:1|2:6'
        },
        {
            'skuid':'@id',
            'id_list':'1:1|2:7'
        },
        {
            'skuid':'@id',
            'id_list':'1:1|2:8'
        },
    ]
})

Mock.mock(/\/comments\/\d+/,'get',{
    'comments_count':"@integer(300,30000)",
    'comments|10':[
        {
            'id|+1':"@id",
            'star':"@integer(1,5)",
            "created_at":"@datetime",
            "content":"@ctitle(30,500)",
            "user":{
                'id':"@id",
                'face':"@dataImage(50x50)",
                'name':"@ctitle"
            }
        }
    ]
})

Mock.mock(/\/comments\/\d+/, 'get', {
    'impressions|6-10':[
        {
            'title':'@ctitle(2,5)',
            'count':'@integer(5,2000)'
        }
    ],
    'ratio':{
        'goods':"85",
        'common':"10",
        'bad':"5"
    },
    'comment_count':"@integer(10,300)",
    'comments|10':[
        {
            'id':"@id",
            'star':"@integer(1,5)",
            'created_at':"@datetime",
            "content":"@ctitle(10,300)",
            'user':{
                'id':"@id",
                'face':'@dataImage(66x66)',
                'name':"@cname"
            }
        }
    ]
})

// 加入购物车
Mock.mock('/carts','post',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)'
})

// 获取购物车接口
Mock.mock('/carts', 'get', {
    'data|10-20': [{
        'skuid': "@id",
        'goods_name': '@ctitle',
        'price': '@float(10,20000,0,2)',
        'count': '@integer(1,5)',
        'checked': '@boolean',
        'midlogo': '@dataImage(50x50)',
        'spec_info': "颜色:黑色|内存:4G"
    }]
})

// 修改购物车
Mock.mock(/\/carts\/\d+/,'put',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)'
})

// 删除购物车
Mock.mock(/\/carts\/\d+/,'delete',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)'
})
// 获取收货地址
Mock.mock('/address','get',{
    'data|3-10':[{
        'id':'@id',
        'name':'@cname',
        'mobile':/^[1][34578][0-9]{9}$/,
        'province':'@province',
        'city':'@city',
        'county':'@county',
        'address':'@ctitle(10,20)'
    }]
})

// 生成订单
Mock.mock('/orders','post',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)',
    'sn':'@id'
})

// 支付
Mock.mock('/pay','post',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)',
    'wxurl':'@url'
})

// 支付
Mock.mock(/\/order_status\/\d+/,'get',{
    'errno':'@integer(0,1)',
    'errmsg':'@ctitle(5,20)',
    'pay_status':'@integer(0,1)'
})

// 获取品牌
Mock.mock(/\/brands\/\d+/,'get',{
    'data|5-15':[{
        'id':'@id',
        'brand_name':'@ctitle',
        'logo':'@dataImage(98x35)'
    }]
})

// 规格
Mock.mock(/\/specifications\/\d+/,'get',{
    'data|2-5':[{
        'id':'@id',
        'spec_name':'@ctitle',
        'selected':'',    // 当前勾选的规格的值
        'options|5-15':[{
            'id':'@id',
            'option_name':'@ctitle'
        }]
    }]
})

// 搜索商品
Mock.mock(/\/goods/,'get',{
    'count':'@integer(100,20000)',
    'data|40': [{
        'id': "@id",
        'goods_name': '@ctitle',
        'price': '@float(10,20000,0,2)',
        'midlogo': '@dataImage(130x130)',
        'comment_count': "@integer(20,20000)"
    }]
})