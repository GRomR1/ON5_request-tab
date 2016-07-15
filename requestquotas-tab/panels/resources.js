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

  var TemplateInfo = require('hbs!./resources/html');
  var Locale = require('utils/locale');
  var Sunstone = require('sunstone');

  /*
    TEMPLATES
   */

  var TemplateTable = require('utils/panel/template-table');

  /*
    CONSTANTS
   */

  var TAB_ID = require('../tabId');
  var PANEL_ID = require('./resources/panelId');

  /*
    CONSTRUCTOR
   */

  function Panel(info) {
    this.title = Locale.tr("Resources");
    this.icon = "fa-align-left";

    return this;
  }

  Panel.PANEL_ID = PANEL_ID;
  Panel.prototype.html = _html;
  Panel.prototype.setup = _setup;

  return Panel;

  /*
    FUNCTION DEFINITIONS
   */

  function _html() {
    return TemplateInfo();
  }

  function _setup(context) {
	context.off("change", "#cpu");
	context.off("keyup", "#cpu");
	$("#cpu").bind("keyup change", function() {
      var cpu = $(this).val();
      Sunstone.runAction("Request.change", "cpu", cpu);
	})	
	context.off("change", "#ram");
	context.off("keyup", "#ram");
	$("#ram").bind("keyup change", function() {
      var ram = $(this).val();
	  Sunstone.runAction("Request.change", "ram", ram);
	})
	context.off("change", "#hdd");
	context.off("keyup", "#hdd");
	$("#hdd").bind("keyup change", function() {
      var hdd = $(this).val();
	  Sunstone.runAction("Request.change", "hdd", hdd);
	})
	context.off("change", "#vms");
	context.off("keyup", "#vms");
	$("#vms").bind("keyup change", function() {
      var vms = $(this).val();
	  Sunstone.runAction("Request.change", "vms", vms);
	})
	context.off("change", "#os");
	$("#os").bind("change", function() {
      var os = $(this).val();
      Sunstone.runAction("Request.change", "os", os);
	})
	context.off("change", "#comment");
	context.off("keyup", "#comment");
	$("#comment").bind("keyup change", function() {
      var comment = $(this).val();
	  Sunstone.runAction("Request.change", "comment", comment);
	})
	
	
	  
    return false;
  }
});
