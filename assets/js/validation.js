function validation_Isempty(obj)
{
	
	if(	$.trim($(obj).val())=='' || $(obj).val()==$(obj).attr('alt'))
	{
		$(obj).removeClass('validation_ok').addClass('validation_error');
		return false;
	}
	else
	{
		$(obj).removeClass('validation_error').addClass('validation_ok');
		return true;	
	}
}

function Validation_ValidEmails(obj1,obj2)
{
	var emailaddressVal=$(obj1).val();
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(emailaddressVal)) {
		$(obj1).removeClass('validation_ok').addClass('validation_error');
		return false;
	}
	else
	{
		$(obj1).removeClass('validation_error').addClass('validation_ok');
			
		if($(obj1).val()!=$(obj2).val())
		{
			$(obj2).removeClass('validation_ok').addClass('validation_error');
			return false;
		}
		else
		{
			$(obj2).removeClass('validation_error').addClass('validation_ok');
			return true;
		}
	}
}
function Validation_ValidEmail(obj1) {
    if ($.trim($(obj1).val()) == '' || $(obj1).val() == $(obj1).attr('alt')) {
        $(obj1).removeClass('validation_ok').addClass('validation_error');
        return false;
    }
    else {
        var emailaddressVal = $(obj1).val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (!emailReg.test(emailaddressVal)) {
            $(obj1).removeClass('validation_ok').addClass('validation_error');
            return false;
        }
        else {
            $(obj1).removeClass('validation_error').addClass('validation_ok');

            return true;
        }
    }


}
function checkdate(input) {
    var strDate = $(input).val();
    var validformat = /^\d{2}\/\d{2}\/\d{4}$/ //Basic check for format validity
    var returnval = false
    if (!validformat.test(strDate)) {
        $(input).removeClass('validation_ok').addClass('validation_error');
        return false;
    }
    else { //Detailed check for valid date ranges
        var monthfield = strDate.split("/")[0]
        var dayfield = strDate.split("/")[1]
        var yearfield = strDate.split("/")[2]
        var dayobj = new Date(yearfield, monthfield - 1, dayfield)
        if ((dayobj.getMonth() + 1 != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield)) {
            $(input).removeClass('validation_ok').addClass('validation_error');
            return false;
        }
        else {
            $(input).removeClass('validation_error').addClass('validation_ok');

            return true;
        }
    }
}
