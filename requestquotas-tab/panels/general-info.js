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

  var Locale = require('utils/locale');
  var Config = require('sunstone-config');
  var QuotaDefaults = require('utils/quotas/quota-defaults');
  var QuotaWidgets = require('utils/quotas/quota-widgets');
  var OpenNebulaGroup = require('opennebula/group');
  

  /*
    CONSTANTS
   */

  var TAB_ID = require('../tabId');
  var PANEL_ID = require('./general-info/panelId');
  var RESOURCE = "User";
  var XML_ROOT = "USER";

  /*
    CONSTRUCTOR
   */

  function Panel(info, tabId) {
    this.tabId = tabId || TAB_ID;
    this.title = Locale.tr("General info");
    this.icon = "fa-align-left";

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

  function _html() {
    return '<div class="row">\
              <div class="large-6 columns">\
                <label>' + Locale.tr("Laboratory") + '\
                  <select id="laboratory_sel">\
                  <option value="' + Locale.tr("VBLHEP") + '">' + Locale.tr("VBLHEP") + '</option>\
                  <option value="' + Locale.tr("LIT") + '">' + Locale.tr("LIT") + '</option>\
                  <option value="' + Locale.tr("DLNP") + '">' + Locale.tr("DLNP") + '</option>\
                  <option value="' + Locale.tr("BLTP") + '">' + Locale.tr("BLTP") + '</option>\
                  <option value="' + Locale.tr("FLNP") + '">' + Locale.tr("FLNP") + '</option>\
                  <option value="' + Locale.tr("FLNR") + '">' + Locale.tr("FLNR") + '</option>\
                  <option value="' + Locale.tr("SOD") + '">' + Locale.tr("SOD") + '</option>\
                  <option value="' + Locale.tr("LRB") + '">' + Locale.tr("LRB") + '</option>\
                  <option value="' + Locale.tr("MAC &quot;Nanobiophotonics&quot;") + '">' + Locale.tr("MAC &quot;Nanobiophotonics&quot;") + '</option>\
                  </select>\
                </label>\
              </div>\
            </div>\
            ';
  }

  function _setup(context) {

    // var groups = ['Lab1', 'Lab2', 'Lab3'];
	// //this.element.GROUPS.ID;

    // if (!$.isArray(groups)){
      // groups = [groups];
    // }

    // var groupDropdownOptions = "";
    // $.each(groups, function(){
      // groupDropdownOptions +=
      // '<option elem_id="'+this+
      // '" value="'+this+'">'+
      // this+
	  // '</option>';
    // });

    // $('select#laboratory_sel', context).html(groupDropdownOptions);

    // $("#laboratory_sel", context).off("change");
    // $("#laboratory_sel", context).on("change", function() {
        // var value_str = $('select#laboratory_sel').val();
        // if(value_str!="")
        // {
          // fillGroupQuotas(value_str, context);
        // }
    // });

    // fillGroupQuotas('-1', context);

    return false;
  }

  function fillGroupQuotas(group_id, context){
	  // alert(group_id+' '+context);
    // OpenNebulaGroup.show({
      // data : {
        // id: group_id
      // },
      // success: function(request,group_json){
        // var info = group_json.GROUP;

        // var quotas_tab_html = QuotaWidgets.initQuotasPanel(
          // info,
          // QuotaDefaults.getDefaultQuotas("Group"),
          // false);

        // $("#group_quotasTabBody", context).html(quotas_tab_html);

        // QuotaWidgets.setupQuotasPanel(
          // info,
          // $("#group_quotasTabBody", context),
          // false,
          // "Group");

        // $("select#quota_group_sel", context).val(info.ID);
      // }
    // });
  }
});
