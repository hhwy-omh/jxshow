/* 所有AJAX的代码写到这里 */

// axios.defaults.baseURL='http://API地址'
// 设置AJAX超时时间
axios.defaults.timeout = 3000
// 设置提交数据时的格式
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

// 设置前置拦截器->以后所有的AJAX都会自动添加上 Authorization:token 的协议头
axios.interceptors.request.use(function (config) {
    // 判断如果用户登录了就把 token 配置上 axios 的协议头中
    let token = localStorage.getItem('token')
    if (token) {
        config.headers['Authorization'] = token
    }
    // 处理请求前代码
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 注册
function regist(params) {
    // 执行 AJAX 并返回一个 Promise 对象
    return axios.post('/regist', params)
}

// 发送短信
function sendSMS(params) {
    return axios.post('/sms', params)
}

// 登录
function login(params) {
    // 执行 AJAX 并返回一个 Promise 对象
    return axios.post('/login', params)
}

// 网站快报
function getTopNews() {
    return axios.get('/news', {
        params: {
            limit: 8,
            sort_by: "id",
            sort_way: "desc"
        }
    })
}

// 网站分类
function getCategorys() {
    return axios.get('/categorys')
}

// 楼层
function getFloors() {
    return axios.get('/floors')
}

// 获取商品详情
function getGoodsInfo(skuid) {
    return axios.get('/goods/' + skuid)
}

// 根据SPU获取评论
// 参数一、SPUID
// 参数二、每页显示条数
// 参数三、取第几页数据
function getComments(spuid, per_page, page) {
    return axios.get('/comments/' + spuid + "?limit=" + per_page + "&page=" + page + "&sort_by=id&sort_way=desc")
}


// 加入购物车
function addToCart(data) {
    return axios.post('/carts', data)
}

// 获取数据
function getCarts() {
    return axios.get('/carts')
}

// 修改购物车
function updateCart(id, data) {
    return axios.put('/carts/' + id, data)
}

function deleteCart(id) {
    return axios.get('/carts/' + id)
}

function getAddress(){
    return axios.get('/address')
}

function addOrder(data){
    return axios.post('/orders', data)
}

function pay(data){
    return axios.post('/pay', data)
}

function order_status(sn){
    return axios.get('/order_status/'+sn)
}

function getBrands(catid){
    return axios.get('/brands/'+catid)
}

function getSpecifications(catid){
    return axios.get('/specifications/'+catid)
}

// 搜索商品
function searchGoods(search){
    return axios.get('/goods', {
        params:search
    })
}