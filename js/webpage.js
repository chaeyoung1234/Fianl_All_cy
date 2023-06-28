/*마우스 올라가면 웹 페이지 이동하는 것 */

$(function(){


	/*첫번째 웹페이지 */
	$(".webpage01").mouseenter(function(){

		$(".webpage01 img").stop().animate({marginTop:-1300},2500);

	}).mouseleave(function(){

		$(".webpage01 img").stop().animate({marginTop:0},3000);
	});


	/*두번째 웹페이지 */
	$(".webpage02").mouseenter(function(){

		$(".webpage02 img").stop().animate({marginTop:-4600},5500);

	}).mouseleave(function(){

		$(".webpage02 img").stop().animate({marginTop:0},3000);
	});


	/*세번째 웹페이지 */
	$(".webpage03").mouseenter(function(){

		$(".webpage03 img").stop().animate({marginTop:-2200},2500);

	}).mouseleave(function(){

		$(".webpage03 img").stop().animate({marginTop:0},3000);
	});


	/*네번째 웹페이지 */
	$(".webpage04").mouseenter(function(){

		$(".webpage04 img").stop().animate({marginTop:-2179},5500);

	}).mouseleave(function(){

		$(".webpage04 img").stop().animate({marginTop:0},3000);
	});




});