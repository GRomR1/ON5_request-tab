@ECHO OFF
:: dir
pscp.exe -q -batch -r "requestquotas-tab" root@192.168.33.157:/usr/lib/one/sunstone/public/app/tabs/

:: user
pscp.exe -q -batch "user.yaml" root@192.168.33.157:/etc/one/sunstone-views/

:: requestquotas-tab
pscp.exe -q -batch "requestquotas-tab.js" root@192.168.33.157:/usr/lib/one/sunstone/public/app/tabs/

:: routes
pscp.exe -q -batch "routes\requestquotas.rb" root@192.168.33.157:/usr/lib/one/sunstone/routes/