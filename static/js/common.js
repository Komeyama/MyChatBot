// JavaScript Document

///////////////////////////////////////////////////////////////////////////
//ViewPort
///////////////////////////////////////////////////////////////////////////		
$(function(){
	var wid2 = window.innerWidth;
		//alert(wid2);
	if( wid2 < 768 ){
		//alert("SP");
	}
	else if ( 768 <= wid2 && wid2 <= 1024 ){
		//alert("iPad");
		//$('head').append('<meta name="viewport" content="width=device-width, initial-scale=0.75,user-scalable=1">');
	}
	else {
		//alert("PC");
	}
});

///////////////////////////////////////////////////////////////////////////
//スマホとPC
///////////////////////////////////////////////////////////////////////////	
$(function(){
	var wid = window.innerWidth;
	
//チェックボックス･ラジオボタン
    $('input[type=checkbox]').change(function(){
        if($(this).is(':checked')){
            $(this).parent('label').addClass('Chk');
        }else{
            $(this).parent('label').removeClass('Chk');
        }
    });
    $('input[type=radio]').change(function(){
        if($(this).is(':checked')){
            $('.Chk:not(:checked)').removeClass('Chk');
            $(this).parent('label').addClass('Chk');
        }
    });
	
///////////////////////////////////////////////////////////////////////////
//以下スマホサイト
///////////////////////////////////////////////////////////////////////////
if( wid < 768 ){
	
}
///////////////////////////////////////////////////////////////////////////
//以下PCサイト
///////////////////////////////////////////////////////////////////////////
else if( wid >= 768) {

}

//以上	
});