/* -------------------------------------------------------------------------- */
/* Copyright 2002-2016, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

define(function(require) {
  var Locale = require('utils/locale');
  var OpenNebulaUser = require('opennebula/user');
  var Sunstone = require('sunstone');
  var _actions = require('./users-tab/actions');

  var TAB_ID = require('./requestquotas-tab/tabId');
  // var USERS_TAB_ID = require('tabs/users-tab/tabId');
  
  var user_id;
  var user_name;
  var form_changed = false;

  _actions["Request.refresh"] = {
    type: "custom",
    call: _onShow
  };

  _actions["Request.next_click"] = {
    type: "custom",
    call: _onNextClick
  };
  
  _actions["Request.send"] = {
    type: "custom",
    call: _onSend
  };
  
  // var _dialogs = [
    // require('tabs/users-tab/dialogs/password')
  // ];

  var _panels = [
    require('tabs/requestquotas-tab/panels/info'),
    require('tabs/requestquotas-tab/panels/general-info'),
    require('tabs/requestquotas-tab/panels/resources')
  ];

  var _formPanels = [
    require('./acls-tab/form-panels/create')
  ];
  

  var Tab = {
    tabId: TAB_ID,
    title: Locale.tr("Request"),
    listHeader: Locale.tr("Request"),
    resource: 'Request',
    actions: _actions,
    content: '<span class="fa-stack fa-2x" style="color: #dfdfdf">' +
      '<i class="fa fa-cloud fa-stack-2x"></i>' +
      '<i class="fa  fa-spinner fa-spin fa-stack-1x fa-inverse"></i>' +
    '</span>',
    // dialogs: _dialogs,
    panels: _panels,
  };

  function _onNextClick() {
	  // alert("Next event called");
  }
  
  function _onShow() {
    OpenNebulaUser.show({
      data : {
        id: -1
      },
      success: function(request, user_json) {
        user_id = user_json.USER.ID;
        user_name = user_json.USER.NAME;
				
		$(".registration_form").change(function(){
			alert("Send clicked: " + form_changed);
			form_changed = true;
		});
		$(".registration_form").keyup(function(){
			if(validateForm()){
				$('#send_request').prop('disabled', false);
			//$("button[href='Request.send']").removeAttr("disabled");
			}else{
				$('#send_request').prop('disabled', true);
			//$("button[href='Request.send']").attr("disabled", "disabled");
			}
		});
		$("#lab").change(function(){
			form_changed = true;
		});
		$("#os").change(function(){
			form_changed = true;
		});
		$("#topic").change(function(){
			form_changed = true;
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
		  
        Sunstone.insertPanels(TAB_ID, user_json, TAB_ID, $(".sunstone-list", $("#" + TAB_ID)));
      }
    });
  }
  
	function _onSend() { 
		var data = 
		{ 
				full_name: $("#full_name").val(),
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
	  }
		alert("Send clicked: " + form_changed + "\n" + data);
	
        // if( validateEmail($("#email").val()) && validateEmail($("#manager_email").val()) ) {
				// //alert(tr("Your request has been sent"));
			// if(!form_changed){
			  // if(confirm( Locale.tr("You have already made the request. Do you want to repeat it?") )){
				// makeRequest();
			  // }
			// }else{
			  // makeRequest();
			// }
        // }
	}
	
	function makeRequest(){
	  $.post("sendmail", { 
				full_name: $("#full_name").val(),
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
	  }).done(function(data){
		if(data.error != null){ 
			alert(Locale.tr(data.error));
		  //notifyError(Locale.tr(data.error));
		}else{
		  form_changed = false;
			alert(Locale.tr(data.error));
		  //notifyMessage(Locale.tr(data.message));
		}
	  });
	}
  
  
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

  return Tab;

});
