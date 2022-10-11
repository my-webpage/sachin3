

var invit_win=0;

function change_selected_txt(sel_element,targetid)
{
var x=document.getElementById(sel_element.id);
var SelecteOption=x.options[x.selectedIndex].text;
document.getElementById(targetid).innerHTML=SelecteOption;
}
function check_search(frm,host)
{
        //Initial lines
        show_error[0]='Please make note of following things :\n';
        form_name='global_search_form';
        //End of initial lines
        if(frm.keyword.value == "Search Product/Service"){
            frm.keyword.value = '';
        }
        validate_text('keyword','Keyword','string',1);
        //Initial lines
        error_counter('1');
        if(back_m==1){
		change_action_search(frm,host);
                disable();
                back_m=0;
                return true;
        }
        else{error_counter('2');error_counter('0');return false;}
        //End of initial lines
}

function change_action_search(frm,host) {
	var radioObj = frm.criteria;
	var radioLength = frm.criteria.length;
	var criteria_val;
	host = host ||  '';
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			criteria_val = radioObj[i].value;
		}
	}
	if(criteria_val == 'product')
	{
		frm.action= host + '/search/product_search.html';
	}else if(criteria_val == 'company'){
		frm.action= host + '/search/company_search.html';
	}else{
		frm.action= host + '/Seller/company_search.html';
	}
        window.document.getElementById('h1_div').style.visibility="hidden";
        window.document.getElementById('suggestion-panel-right').style.visibility="hidden";
        window.document.getElementById('search-suggestion').style.visibility="hidden";
        window.document.getElementById('sr_sugg').style.visibility="hidden";

	frm.submit();
	return true;
}

var existing_onload ;

if (window.onload) {
        existing_onload = window.onload;
}

window.onload = function new_onload ()
{
	if (existing_onload)
	{
		existing_onload();
	}
	var pathname = window.location.pathname;
	if(pathname != '/login/login.html') {
		document.getElementById('global_search').focus();
	}
}
