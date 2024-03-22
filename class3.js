$(document).ready(()=>{
    $('#slide').click(()=>{
        $('.box').animate({
        left:"+=100px",
        opacity:"toggle"
    },1000,"linear")
    })
    // $.ajax({
    //     type:"GET",
    //     url:"https://animechan.xyz/api/random"
    // }).done((res)=>{
    //     console.log(res)
    // }).fail((err)=>{
    //     console.log(err)
    // })
    $.getJSON("https://animechan.xyz/api/random")
    .done((res)=>{
        console.log(res)
    }).fail((err)=>{
        console.log(err)
    })
})