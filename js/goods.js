/*
@功能：商品页js
@作者：diamondwang
@时间：2013年11月13日
*/

$(function(){
	//商品缩略图左右移动效果
	

	//选择货品，如颜色、版本等
	$(".product a").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		$(this).find("input").attr({checked:"checked"});
		//去除虚边框
		$(this).blur();
	});


	//购买数量
	// //减少
	// $("#reduce_num").click(function(){
	// 	if (parseInt($(".amount").val()) <= 1){
	// 		alert("商品数量最少为1");
	// 	} else{
	// 		$(".amount").val(parseInt($(".amount").val()) - 1);
	// 	}
	// });

	// //增加
	// $("#add_num").click(function(){
	// 	$(".amount").val(parseInt($(".amount").val()) + 1);
	// });

	//直接输入
	$(".amount").blur(function(){
		if (parseInt($(".amount").val()) < 1){
			alert("商品数量最少为1");
			$(this).val(1);
		}
	});

	//商品详情效果
	$(".detail_hd li").click(function(){
		$(".detail_div").hide().eq($(this).index()).show();
		$(this).addClass("on").siblings().removeClass("on");
	});
});