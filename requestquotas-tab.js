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
  // Создаем хэш, заполненный значениями
	var data = { 
		full_name: '',
		email: '',
		manager_full_name: '',
		manager_email: '',
		lab: '',
		topic: '',
		cpu: '',
		ram: '',
		hdd: '',
		vms: '',
		os:  '',
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
        user_id = user_json.USER.ID;
        user_name = user_json.USER.NAME;
		  
        Sunstone.insertPanels(TAB_ID, user_json, TAB_ID, $(".sunstone-list", $("#" + TAB_ID)));
      }
    });
  }
  
	function _onChange(key, value) { 
		form_changed = true;
		//console.log(key+"="+value);
		data[key]=value;
	}
	
	function _onSend() { 
	
		console.log("Send clicked: " + form_changed + "\n" + JSON.stringify(data));
		
		  // notifyMessage(Locale.tr(data.error));
	
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
	  $.post("sendmail", data).done(function(data){
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
	

  return Tab;

});
