$(document).ready(function()
{
	$(".main").click(function()
	{
        var value=$(this).attr("data-filter");
        if(value =="all")
        {
        	$(".filter").show(1500);
        }
        else
        {
        	$(".filter").not("."+value).hide(1500);
        	$(".filter").filter("."+value).show(1500);
        }
	})
})