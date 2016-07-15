define(function(require) {
  var Locale = require('utils/locale');
  var TAB_ID = 'requestquotas-tab';

  var Tab = {
    tabId: TAB_ID,
    title: Locale.tr("requestquotas-tab"),
    no_content: true
  }

  return Tab;
});