$(function(){

    // j query 



            // sea 

let coxbazar = $('.boximg1')
let box1 = $('.box1')
let h31 = $('.h31')
let sea =$('.sea')
coxbazar.click(function(){
    coxbazar.animate(
       {
        left:"355px",
        top:'30px',
        height:'500px',
        width:'600px',
        borderRadius:'30px 0 0 30px',

       }
       ,500
    ) 
    sea.animate(
        {
            left:"600px" ,
        }
        ,500
    )
})

        // hills 

let Bandorban = $('.boximg2')
let box2 = $('.box2')
let h32 = $('.h32')
let hills  =$('.hills')

Bandorban.click(function(){
    Bandorban.animate(
        {
            left:"355px",
            top:'-170px',
            height:'500px',
            width:'600px',
            borderRadius:'30px 0 0 30px',  
        }
        ,500
    )
    hills.animate(
        {
            left:"600px" , 
        }
        ,500
    )
}

)

             // historical place 

let HP = $('.boximg3')
let box3 = $('.box3')
let h33 = $('.h33')
let historical  =$('.historical')
HP.click(function(){
    HP.animate(
        {
            left:"355px",
            top:'-370px',
            height:'500px',
            width:'600px',
            borderRadius:'30px 0 0 30px',  
        }
        ,500
    )
    historical.animate(
        {
            left:"600px", 
        }
        ,500
    )
}

)





            // map 



            // chittagong 

let spot = $(".chispot");
let chittagong = $('.chittagong')


chittagong.hide()
spot.click(function(){
    chittagong.toggle(350)
})



let crbicon = document.querySelector('.crbicon')
function pointcrb (){
    crbicon.classList.toggle('crbpointer')



}
crbicon.addEventListener('click', pointcrb)



let crb =$('.crb')
let crbinfo = $('.crbinfo')
crbinfo.hide()
crb.click(function(){
    $('.seabeach').toggle();
    $('.linkroad').toggle();
    $('.zia').toggle();
    $('.cndra').toggle();
    $('.koiacora').toggle();
    $('.gkb').toggle();
    crbinfo.toggle(1000);
    $('.Zela').toggle()
})



            // top 10 

   $('.topcox').hide()
   $('.topkua').hide()
   $('.topban').hide()
   $('.topmartin').hide()
   $('.topKaptai').hide()
   $('.topsri').hide()
   $('.topsajek').hide()
   $('.topsum').hide()
   $('.topsund').hide()
   $('.topmaha').hide()


 let top10btn = $('.top10btn')
top10btn.click(function(){
    $('.topcox').toggle(700)
    $('.topkua').toggle(700)
    $('.topban').toggle(700)
    $('.topmartin').toggle(700)
    $('.topKaptai').toggle(700)
   $('.topsri').toggle(700)
   $('.topsajek').toggle(700)
   $('.topsum').toggle(700)
   $('.topsund').toggle(700)
   $('.topmaha').toggle(700)
})
 

$('.coxinfo').hide()
$('.topcox').click(function(){
    $('.coxinfo').toggle(700)
})




}
)