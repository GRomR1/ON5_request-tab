var request_quotas_widgets = '\
<div class="dashboard">\
  <div class="panel">\
    <div class="row">\
      <div class="twelve columns">\
        <h4 class="subheader header">\
          <span class="header-resource">\
            <i class="icon-plus"></i> '+tr("Request resources")+'\
          </span>\
          <span class="header-info">\
          <span> <small></small>&emsp;\
          </span>\
          <span class="user-login">\
          </span>\
        </h4>\
      </div>\
    </div>\
    <div class="row" style="margin-bottom: 20px;">\
      <div class="ten columns">\
        <div class="action_blocks">\
        </div>\
      </div>\
    </div>\
</div>\
<div id="general_info" class="row">\
  <div class="ten columns">\
    <div class="panel">\
      <div class="row">\
        <h5 class="subheader header-dashboard"><span class="span-dashboard">'+tr("General Information")+'</span></h5>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form" id="full_name" type="text" placeholder="' + tr("Full name") + '" required>\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form" id="email" type="text" placeholder="' + tr("E-mail") + '">\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered" style="line-height: 1; font-size: 13px;">\
            <span id="email_validation_message"></span>\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form" id="manager_full_name" type="text" placeholder="' + tr("Manager\'s full name") + '" required>\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form" id="manager_email" type="text" placeholder="' + tr("Manager\'s e-mail") + '">\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered" style="line-height: 1; font-size: 13px;">\
            <span id="manager_email_validation_message"></span>\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <span class="inline right">\
              <span>' + tr("Laboratory: ") + '</span>\
                <select name="laboratory" id="lab">\
                  <option value="' + tr("VBLHEP") + '">' + tr("VBLHEP") + '</option>\
                  <option value="' + tr("LIT") + '">' + tr("LIT") + '</option>\
                  <option value="' + tr("DLNP") + '">' + tr("DLNP") + '</option>\
                  <option value="' + tr("BLTP") + '">' + tr("BLTP") + '</option>\
                  <option value="' + tr("FLNP") + '">' + tr("FLNP") + '</option>\
                  <option value="' + tr("FLNR") + '">' + tr("FLNR") + '</option>\
                  <option value="' + tr("SOD") + '">' + tr("SOD") + '</option>\
                  <option value="' + tr("LRB") + '">' + tr("LRB") + '</option>\
                  <option value="' + tr("Служба главного инженера") + '">' + tr("Служба главного инженера") + '</option>\
<option value="' + tr("MAC &quot;Nanobiophotonics&quot;") + '">' + tr("MAC &quot;Nanobiophotonics&quot;") + '</option>\
                </select>\
            </span>\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <span class="inline right">\
              <span>' + tr("Topic number: ") + '</span>\
                <select name="topic_number" id="topic">\
<option value="No topic">'+tr("No topic")+'</option>\
<option value="01-3-1113-2014/2018">01-3-1113-2014/2018</option>\
<option value="01-3-1114-2014/2018">01-3-1114-2014/2018</option>\
<option value="01-3-1115-2014/2018">01-3-1115-2014/2018</option>\
<option value="01-3-1116-2014/2018">01-3-1116-2014/2018</option>\
<option value="01-3-1117-2014/2018">01-3-1117-2014/2018</option>\
<option value="02-0-1079-2009/2014">02-0-1079-2009/2014</option>\
<option value="02-2-1098-2010/2015">02-2-1098-2010/2015</option>\
<option value="02-2-1080-2009/2015">02-2-1080-2009/2015</option>\
<option value="02-0-1081-2009/2016">02-0-1081-2009/2016</option>\
<option value="02-0-1082-2009/2014">02-0-1082-2009/2014</option>\
<option value="02-2-1099-2010/2015">02-2-1099-2010/2015</option>\
<option value="02-0-1108-2011/2016">02-0-1108-2011/2016</option>\
<option value="02-2-1109-2012/2014">02-2-1109-2012/2014</option>\
<option value="02-1-1106-2011/2016">02-1-1106-2011/2016</option>\
<option value="02-1-1096-2010/2014">02-1-1096-2010/2014</option>\
<option value="02-0-1083-2009/2016">02-0-1083-2009/2016</option>\
<option value="02-0-1085-2009/2016">02-0-1085-2009/2016</option>\
<option value="02-1-1086-2009/2014">02-1-1086-2009/2014</option>\
<option value="02-1-1093-2009/2015">02-1-1093-2009/2015</option>\
<option value="02-0-1065-2007/2014">02-0-1065-2007/2014</option>\
<option value="02-0-1067-2007/2015">02-0-1067-2007/2015</option>\
<option value="02-1-1097-2010/2015">02-1-1097-2010/2015</option>\
<option value="02-1-1087-2009/2014">02-1-1087-2009/2014</option>\
<option value="02-0-1066-2007/2015">02-0-1066-2007/2015</option>\
<option value="02-1-1088-2009/2016">02-1-1088-2009/2016</option>\
<option value="02-1-1107-2011/2016">02-1-1107-2011/2016</option>\
<option value="03-5-1094-2010/2014">03-5-1094-2010/2014</option>\
<option value="03-0-1095-2010/2014">03-0-1095-2010/2014</option>\
<option value="03-2-1100-2010/2015">03-2-1100-2010/2015</option>\
<option value="03-2-1101-2010/2015">03-2-1101-2010/2015</option>\
<option value="03-2-1102-2010/2015">03-2-1102-2010/2015</option>\
<option value="03-4-1104-2011/2016">03-4-1104-2011/2016</option>\
<option value="04-4-1069-2009/2014">04-4-1069-2009/2014</option>\
<option value="04-4-1105-2011/2016">04-4-1105-2011/2016</option>\
<option value="04-4-1075-2009/2014">04-4-1075-2009/2014</option>\
<option value="04-5-1076-2009/2014">04-5-1076-2009/2014</option>\
<option value="04-9-1077-2009/2014">04-9-1077-2009/2014</option>\
<option value="04-9-1112-2013/2015">04-9-1112-2013/2015</option>\
<option value="04-2-1103-2010/2015">04-2-1103-2010/2015</option>\
<option value="04-10-1111-2013/2014">04-10-1111-2013/2014</option>\
<option value="05-6-1118-2014/2016">05-6-1118-2014/2016</option>\
<option value="05-6-1119-2014/2016">05-6-1119-2014/2016</option>\
<option value="05-8-1037-2001/2014">05-8-1037-2001/2014</option>\
<option value="06-0-1120-2014/2018">06-0-1120-2014/2018</option>\
<option value="07-1-1110-2012/2014">07-1-1110-2012/2014</option>\
                </select>\
            </span>\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <span>' + tr("Details on the listed topics see <a href=\"http://wwwinfo.jinr.ru/plan/ptp-2014/title_a4.htm\" target=\"_blank\">here</a>") + '</span>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>\
<div id="requested_resources" class="row">\
  <div class="ten columns">\
    <div class="panel dashboard">\
      <div class="row">\
        <h5 class="subheader header-dashboard"><span class="span-dashboard">'+tr("Required Resources")+'</span></h5>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form numbersOnly" id="cpu" type="text" placeholder="' + tr("CPUs (cores)") + '">\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form" id="ram" type="text" placeholder="' + tr("RAM (GB)") + '">\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form" id="hdd" type="text" placeholder="' + tr("Storage (GB)") + '">\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <input class="registration_form" id="vms" type="text" placeholder="' + tr("Number of virtual machines") + '">\
          </div>\
        </div>\
        <div class="row">\
          <div class="five columns centered">\
            <span class="inline right">\
              <span>' + tr("OS type: ") + '</span>\
                <select id="os">\
                  <option value="linux">Linux</option>\
                  <option value="other">' + tr("Other") + '</option>\
                </select>\
            </span>\
          </div>\
        </div>\
        <div class="row">\
          <div class="seven columns centered">\
            <textarea class="registration_form" id="comment" rows="10" style="width:100%;" placeholder="' + tr("Comment (purpose of the requested resources or reason for quotas change)") + '"></textarea>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>\
</div>\
';

var user_id;
var user_name;

var request_actions = {
"Request.create" : {
        type: "custom",
        call: function () {
          
          if(validateEmail($("#email").val()) && validateEmail($("#manager_email").val())){
            alert(tr("Your request has been sent"));
            $.post( "sendmail", { full_name: $("#full_name").val(),
                                email: $("#email").val(),
                                manager_full_name: $("#manager_full_name").val(),
                                manager_email: $("#manager_email").val(),
                                lab: $("#lab").val(),
                                topic: $("#topic").val(),
                                cpu: $("#cpu").val(),
                                ram: $("#ram").val(),
                                hdd: $("#hdd").val(),
                                vms: $("#vms").val(),
                                os:  $("#os").val(),
                                comment: $("#comment").val(),
                                user_id: user_id,
                                user_name: user_name
            } );
          }
        }
    }
};

var request_buttons = {
"Request.create" : {
        type: "action",
        layout: "create",
        text: tr("Send"),
        alwaysActive: false 
    }
};

var request_quotas_tab = {
    title: '<i class="icon-plus"></i>'+tr("Request resources"),
    //title: '<img src="images/icon_mail.png" >'+tr("Request quotas"),
    content: request_quotas_widgets,
    buttons: request_buttons,
    showOnTopMenu: false,
};

function validateEmail(email){
  var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)*jinr\.ru$/;
  return re.test(email);
}

function validateForm(){
  var isValid = true;
  $(".registration_form").each(function(){
    if($(this).val().length == 0){
      isValid = false;
    }
  });
  if(!validateEmail($("#email").val())){
    isValid = false;
  }
  return isValid;
}
function showHideEmailValidityMessage(email_input, email_message){
  $(email_input).css({'margin-bottom': '0px'});
  if(validateEmail($(email_input).val())){
    $(email_message).html(tr("Email is valid")).css({'color': 'green'});
    $(email_input).css({'border' : '1px solid green'});
  }else{  
    $(email_message).html(tr("Not a valid email (only jinr.ru domain emails are accepted)")).css({'color': 'red'});
    $(email_input).css({'border' : '1px solid #ff0000'});
  }
}

Sunstone.addActions(request_actions);
Sunstone.addMainTab('requestquotas-tab',request_quotas_tab);

$(document).ready(function() {
  OpenNebula.User.show({
        data : {
            id: "-1"
        },
        success: function(request,user_json){
          user_id = user_json.USER.ID;
          user_name = user_json.USER.NAME;
        }
  });
  $(".registration_form").keyup(function(){
    if(validateForm()){
      $("button[href='Request.create']").removeAttr("disabled");  
    }else{
      $("button[href='Request.create']").attr("disabled", "disabled");
    }
  });

  $("#email").keyup(function() {
    showHideEmailValidityMessage("#email", "#email_validation_message");
  });
  $("#email").change(function() {
    showHideEmailValidityMessage("#email", "#email_validation_message");
  });
  $("#manager_email").keyup(function() {
    showHideEmailValidityMessage("#manager_email", "#manager_email_validation_message");
  });
  $("#manager_email").change(function() {
    showHideEmailValidityMessage("#manager_email", "#manager_email_validation_message");
  });
});
