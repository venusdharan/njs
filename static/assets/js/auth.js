function CheckAuth()
{
	$.post("/checkAuth", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}

function CheckToken()
{
	if(localStorage.getItem("token") != undefined && localStorage.getItem("token") != "")
	{
		return true;
	}else
	{
		return false;
	}
}

