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
		topic: Locale.tr("No topic"),
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
		if(form_changed && formValided){
		// if(1){ // 
			makeRequest();
			$("button[href='Request.send']").attr("disabled", "disabled");
		}else{
			$("button[href='Request.send']").removeAttr("disabled");  
		}
		return true;
	}
	
	function makeRequest(){
		var jqxhr = $.post("sendmail", data , function(data1, stat){
				if(data1.error != null){ 
				  console.log("Error: " + JSON.stringify(data1.error) + " " +stat);
				  Notifier.notifyError(Locale.tr(data1.error));
				}else{
				  form_changed = false;
				  console.log("Success: " + JSON.stringify(data1.message) + " " +stat);
				  Notifier.notifyMessage(Locale.tr(data1.message));
				}
			  });
			
		// var jqxhr = $.post("sendmail", data)
			 // .success(function() { console.log("Успешное выполнение"); Notifier.notifyMessage(Locale.tr("Success post")); })
			 // .error(function() { console.log("Ошибка выполнения"); Notifier.notifyError(Locale.tr("Error post"));});
			 // .complete(function() { console.log("Завершение выполнения"); });
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
