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
  var Notifier = require('utils/notifier');
  var _actions = require('./users-tab/actions');

  var TAB_ID = require('./requestquotas-tab/tabId');
  
  var form_changed = false;
	var data = { 
		full_name: '',
		email: '',
		manager_full_name: '',
		manager_email: '',
		lab: Locale.tr("VBLHEP"),
		lab: Locale.tr("No topic"),
		cpu: '',
		ram: '',
		hdd: '',
		vms: '',
		os: Locale.tr("Linux"),
		comment: '',
		user_id: '',
		user_name: ''
	};

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
  
  _actions["Request.change"] = {
    type: "custom",
    call: _onChange
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
	  // some action
  }
  
  function _onShow() {
    OpenNebulaUser.show({
      data : {
        id: -1
      },
      success: function(request, user_json) {
		data['user_id']=user_json.USER.ID;
		data['user_name']=user_json.USER.NAME;
		  
        Sunstone.insertPanels(TAB_ID, user_json, TAB_ID, $(".sunstone-list", $("#" + TAB_ID)));
      }
    });
  }
  
	function _onChange(key, value) { 
		//console.log(key+"="+value);
		$("button[href='Request.send']").removeAttr("disabled");  
		form_changed = true; 
		data[key]=value;
	}
	
	function _onSend() { 
	
		if(!form_changed)
			return false;
		var formValided = validateForm();
		// if(form_changed && formValided){
		if(1){ // TODO fix it!
			makeRequest();
			Notifier.notifyMessage(Locale.tr("Request sended"));
			$("button[href='Request.send']").attr("disabled", "disabled");
		}else{
			Notifier.notifyError(Locale.tr("Your data doesn't valid"));
			$("button[href='Request.send']").removeAttr("disabled");  
		}
	
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
		return true;
	}
	
	function makeRequest(){
	  
	  // console.log("sendmail?get:"+JSON.stringify({a:1, b:2}));
	  // $.get("sendmail", {a:1, b:2}, function(data){
			// console.log("Data Loaded: " + JSON.stringify(data));
		// });
	  
	  console.log("sendmail?=POST: " + "\n" + JSON.stringify(data));
	  // $.post("sendmail", {a:1, b:2}, function(data, stat){
			// console.log("Data Loaded: " + JSON.stringify(data) + " " +stat);
		// });
		var jqxhr = $.post("sendmail", {email:temp@jinr.ru, b:2})
			.success(function() { alert("Успешное выполнение"); })
			.error(function() { alert("Ошибка выполнения"); })
			.complete(function() { alert("Завершение выполнения"); });
			
	  // $.post("sendmail", data, function(data1){
		// if(data1.error != null){ 
		  // Notifier.notifyError(Locale.tr(data1.error));
		// }else{
		  // form_changed = false;
		  // Notifier.notifyMessage(Locale.tr(data1.message));
		// }
	  // });
	}
  
  
	function validateEmail(email){
	  var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)*jinr\.ru$/;
	  return re.test(email);
	}

	function validateForm(){
	  var isValid = true;
	  for (var key in data) {
		if(key == 'comment')
			continue;
		var v = data[key];
		if(v.length == 0){
		  isValid = false;
		}
	  }
	  if(!validateEmail(data['email'])) {
		isValid = false;
	  }
	  if(!validateEmail(data['manager_email'])) {
		isValid = false;
	  }
	  return isValid;
	}
	

  return Tab;

});
