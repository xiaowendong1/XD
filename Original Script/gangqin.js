#!url=http://script.hub/file/_start_/https://raw.githubusercontent.com/Yu9191/Rewrite/main/paopaogq.js/_end_/paopaogq.sgmodule?type=qx-rewrite&target=shadowrocket-module&del=true
#!name=paopaogq
#!desc=paopaogq

[Script]
paopaogq = type=http-response, pattern=https:\/\/c\.abcpiano\.cn\/(pianoCourse\/units|pianoCourse\/lessons|pianoCourse\/playProgress|practice\/stavePlay|pianist|practice\/home), script-path=https://raw.githubusercontent.com/Yu9191/Rewrite/main/paopaogq.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% c.abcpiano.cn