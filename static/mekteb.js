$(document).ready(function () {
    
    $(document).on("click",".add-ksq",function(){
        var ksqsLength = $(".ksq").length
        var lastIndex = Number($($(".ksq")[Number(ksqsLength)-1]).attr("data-index"))+1;
        var input = `<div class="form-group">
        <label for="KSQ1">KSQ ${lastIndex}</label>
        <input class="form-control ksq" type="number" name="ksq[]" value=""
            placeholder="Bal daxil edin" min="0" max="100" data-index="${lastIndex}" />
    </div>`
    $("#ksq_div").append($(input))
        console.log(lastIndex)
    })

    $(".remove-ksq").click(function(){
        var ksqsLength = $(".ksq").length
        var input = $($(".ksq")[Number(ksqsLength)-1]).closest(".form-group");
        $(input).remove();
    })

    $(".calculate").click(function(e){
        e.preventDefault();
        var totalPoint = 0;
        ksqCount = 0;
        var ksqs = $(".ksq")

        for(var i=0;i<ksqs.length;i++){
            ksqCount+=Number($(ksqs[i]).val());
        }
        totalPoint = ksqCount/ksqs.length;

        if($("#bsq").val()){
            totalPoint = totalPoint*0.4 + Number($("#bsq").val())*0.6;
        }

        $(".result h3").text("Yekun: "+totalPoint.toFixed(2));
    })

});