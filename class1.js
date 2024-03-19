$(document).ready(()=>{
    $('p').css({
        "color":"red",
        "font-size":"20px",
        "text-decoration":"underline wavy"
    })  
    // $('#box h2').hide()
    $('#box h1').on("click",()=>{
    $('#box h2').slideToggle(3000)
    // $('#box h2').fadeToggle(2000)
})
})