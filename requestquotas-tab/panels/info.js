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
  /*
    DEPENDENCIES
   */

  var TemplateInfo = require('hbs!./info/html');
  var ResourceSelect = require('utils/resource-select');
  var TemplateUtils = require('utils/template-utils');
  var Locale = require('utils/locale');
  var OpenNebulaUser = require('opennebula/user');
  var Sunstone = require('sunstone');

  /*
    TEMPLATES
   */

  var TemplateTable = require('utils/panel/template-table');

  /*
    CONSTANTS
   */

  var TAB_ID = require('../tabId');
  var PANEL_ID = require('./info/panelId');
  var RESOURCE = "User";
  var XML_ROOT = "USER";
  var PASSWORD_DIALOG_ID = require('tabs/users-tab/dialogs/password/dialogId');
  

  /*
    CONSTRUCTOR
   */

  function Panel(info) {
    this.title = Locale.tr("Info");
    this.icon = "fa-info-circle";

    this.element = info[XML_ROOT];

    return this;
  }

  Panel.PANEL_ID = PANEL_ID;
  Panel.prototype.html = _html;
  Panel.prototype.setup = _setup;

  return Panel;

  /*
    FUNCTION DEFINITIONS
   */
   
	function validateEmail(email){
	  var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)*jinr\.ru$/;
	  return re.test(email);
	}
	
	function showHideEmailValidityMessage(email_input, email_message){
	  $(email_input).css({'margin-bottom': '0px'});
	  if(validateEmail($(email_input).val())){
		$(email_message).html(Locale.tr("Email is valid")).css({'color': 'green'});
		$(email_input).css({'border' : '1px solid green'});
		return true;
	  }else{  
		$(email_message).html(Locale.tr("Not a valid email (only jinr.ru domain emails are accepted)")).css({'color': 'red'});
		$(email_input).css({'border' : '1px solid #ff0000'});
		return false;
	  }
	}
	
  function _html() {
	
    return TemplateInfo({
      'element': this.element,
      'sunstone_template': this.element.TEMPLATE.SUNSTONE||{},
    });
  }

  function _setup(context) {
    var that = this;
	
	$.post("get_topical_plan", function(data1, stat){
		// console.log("Success: " + JSON.stringify(data1.topics) + "\n" +stat);
		var topic_html = '';
		data1.topics.forEach(function(item){
			topic_html+= '<option value="'+item+'">'+item+'</option>\n';
		});
		$("#topic").html('<select name="topic_number" id="topic" >\
						<option value="'+Locale.tr("No topic")+'">'+Locale.tr("No topic")+'</option>'
						+ topic_html + '</select>');
	});


	context.off("click", "#resource_tab_b");
	context.on("click", "#resource_tab_b", function() {
		$("#resources_tab-label").click();
	});
	
	context.off("change", "#full_name");
	context.off("keyup", "#full_name");
	$("#full_name").bind("keyup change", function() {
      var full_name = $(this).val();
      Sunstone.runAction("Request.change", "full_name", full_name);
	})
	
	context.off("change", "#email");
	context.off("keyup", "#email");
	$("#email").bind("keyup change", function() {
      var email = $(this).val();
	  
	  if(showHideEmailValidityMessage("#email", "#email_validation_message"))
		Sunstone.runAction("Request.change", "email", email);
	})
	
	context.off("change", "#manager_email");
	context.off("keyup", "#manager_email");
	$("#manager_email").bind("keyup change", function() {
      var manager_email = $(this).val();
	  
	  if(showHideEmailValidityMessage("#manager_email", "#manager_email_validation_message"))
		Sunstone.runAction("Request.change", "manager_email", manager_email);
	})
	
	context.off("change", "#manager_full_name");
	context.off("keyup", "#manager_full_name");
	$("#manager_full_name").bind("keyup change", function() {
      var manager_full_name = $(this).val();
      Sunstone.runAction("Request.change", "manager_full_name", manager_full_name);
	})
	
	context.off("change", "#lab");
	$("#lab").bind("change", function() {
      var lab = $(this).val();
      Sunstone.runAction("Request.change", "lab", lab);
	})
	context.off("change", "#topic");
	$("#topic").bind("change", function() {
      var topic = $(this).val();
      Sunstone.runAction("Request.change", "topic", topic);
	})
	
    return false;
  }
});
