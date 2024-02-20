/*************************************
项目名称：少年得道
下载地址：appstore下载（https://apps.apple.com/cn/app/id1279715325）
脚本作者：xiaowendong1（阿猫阿狗）
使用说明：解锁付费资源，免费观看，仅限视频和音频

**************************************

[rewrite_local]

^https:\/\/igetcool-gateway\.igetcool\.com url script-response-body https://raw.githubusercontent.com/xiaowendong1/XD/main/Original%20Script/dedao/dedao.js

[mitm]
hostname = igetcool-gateway.igetcool.com

*************************************/

const _0x8522 = [
    'wp0fJQ==',
    'w50JdMOFWMOQwp9kAFY=',
    'asOmdE3CgmNYJEfCkA==',
    'w7stw7jDnw==',
    'w4XCssO6PS3DgTnCo37Cpw==',
    'M8OidgvDmntDP0bDig==',
    'MXvClBfCmwBhw6w9Ug==',
    'wrTDrQE=',
    'ZMKxA8KsLQPChDHCmUA=',
    'w6A6IcKdwqXCv8KH',
    'wofCthLCnQ==',
    'PyHDvTQKNsK0worDsMOx',
    'acKlAMK5ciPCgTzDnV8=',
    'wrfDhiDDgMKnOGo=',
    'D8KTwo7CsFTCkjHCtg==',
    'wpJUw4EfwqDCrTQoBMKt',
    'JMKQwq7CuHLCmnI='
];
(function (_0x17e105, _0x8522f9) {
    const _0x2b9ea8 = function (_0x2c515d) {
        while (--_0x2c515d) {
            _0x17e105['push'](_0x17e105['shift']());
        }
    };
    _0x2b9ea8(++_0x8522f9);
}(_0x8522, 0xc8));
const _0x2b9e = function (_0x17e105, _0x8522f9) {
    _0x17e105 = _0x17e105 - 0x0;
    let _0x2b9ea8 = _0x8522[_0x17e105];
    if (_0x2b9e['KXUYKW'] === undefined) {
        (function () {
            const _0x2293f1 = function () {
                let _0x1b0132;
                try {
                    _0x1b0132 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x545248) {
                    _0x1b0132 = window;
                }
                return _0x1b0132;
            };
            const _0x356dd4 = _0x2293f1();
            const _0x2b6dd6 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x356dd4['atob'] || (_0x356dd4['atob'] = function (_0x3966ba) {
                const _0x449785 = String(_0x3966ba)['replace'](/=+$/, '');
                let _0x5cf437 = '';
                for (let _0x2a33f9 = 0x0, _0x247fbd, _0x11d66e, _0x4376ba = 0x0; _0x11d66e = _0x449785['charAt'](_0x4376ba++); ~_0x11d66e && (_0x247fbd = _0x2a33f9 % 0x4 ? _0x247fbd * 0x40 + _0x11d66e : _0x11d66e, _0x2a33f9++ % 0x4) ? _0x5cf437 += String['fromCharCode'](0xff & _0x247fbd >> (-0x2 * _0x2a33f9 & 0x6)) : 0x0) {
                    _0x11d66e = _0x2b6dd6['indexOf'](_0x11d66e);
                }
                return _0x5cf437;
            });
        }());
        const _0x148690 = function (_0x10cacc, _0x2a9fcd) {
            let _0x1de974 = [], _0xe4b3f9 = 0x0, _0x306b96, _0x424e41 = '', _0x20e327 = '';
            _0x10cacc = atob(_0x10cacc);
            for (let _0x165ea3 = 0x0, _0x5eb9bb = _0x10cacc['length']; _0x165ea3 < _0x5eb9bb; _0x165ea3++) {
                _0x20e327 += '%' + ('00' + _0x10cacc['charCodeAt'](_0x165ea3)['toString'](0x10))['slice'](-0x2);
            }
            _0x10cacc = decodeURIComponent(_0x20e327);
            let _0x3cc878;
            for (_0x3cc878 = 0x0; _0x3cc878 < 0x100; _0x3cc878++) {
                _0x1de974[_0x3cc878] = _0x3cc878;
            }
            for (_0x3cc878 = 0x0; _0x3cc878 < 0x100; _0x3cc878++) {
                _0xe4b3f9 = (_0xe4b3f9 + _0x1de974[_0x3cc878] + _0x2a9fcd['charCodeAt'](_0x3cc878 % _0x2a9fcd['length'])) % 0x100;
                _0x306b96 = _0x1de974[_0x3cc878];
                _0x1de974[_0x3cc878] = _0x1de974[_0xe4b3f9];
                _0x1de974[_0xe4b3f9] = _0x306b96;
            }
            _0x3cc878 = 0x0;
            _0xe4b3f9 = 0x0;
            for (let _0x5de082 = 0x0; _0x5de082 < _0x10cacc['length']; _0x5de082++) {
                _0x3cc878 = (_0x3cc878 + 0x1) % 0x100;
                _0xe4b3f9 = (_0xe4b3f9 + _0x1de974[_0x3cc878]) % 0x100;
                _0x306b96 = _0x1de974[_0x3cc878];
                _0x1de974[_0x3cc878] = _0x1de974[_0xe4b3f9];
                _0x1de974[_0xe4b3f9] = _0x306b96;
                _0x424e41 += String['fromCharCode'](_0x10cacc['charCodeAt'](_0x5de082) ^ _0x1de974[(_0x1de974[_0x3cc878] + _0x1de974[_0xe4b3f9]) % 0x100]);
            }
            return _0x424e41;
        };
        _0x2b9e['XzIfjH'] = _0x148690;
        _0x2b9e['YoWnZS'] = {};
        _0x2b9e['KXUYKW'] = !![];
    }
    const _0x2c515d = _0x2b9e['YoWnZS'][_0x17e105];
    if (_0x2c515d === undefined) {
        if (_0x2b9e['NtxJXJ'] === undefined) {
            _0x2b9e['NtxJXJ'] = !![];
        }
        _0x2b9ea8 = _0x2b9e['XzIfjH'](_0x2b9ea8, _0x8522f9);
        _0x2b9e['YoWnZS'][_0x17e105] = _0x2b9ea8;
    } else {
        _0x2b9ea8 = _0x2c515d;
    }
    return _0x2b9ea8;
};
var _0xf809f9 = $response[_0x2b9e('0xe', '2r(0')];
const _0x4c4d06 = _0x2b9e('0x10', 'DzdD') + _0x2b9e('0x2', 'ZmyT') + _0x2b9e('0x9', 'pug$') + 'course/vid' + _0x2b9e('0x1', 'kRQy');
const _0x456f6d = _0x2b9e('0x6', 'pug$') + _0x2b9e('0xf', 'jj8O') + _0x2b9e('0xa', 'E3P4') + _0x2b9e('0x5', 'SWIo');
if ($request[_0x2b9e('0xb', 'DZM$')][_0x2b9e('0x3', 'V%&Y')](_0x4c4d06) != -0x1) {
    _0xf809f9 = _0xf809f9['replace'](/\"buy":\d+/g, '\x22buy\x22:1');
}
if ($request[_0x2b9e('0x4', 'Munu')][_0x2b9e('0xd', 'RG!u')](_0x456f6d) != -0x1) {
    _0xf809f9 = _0xf809f9[_0x2b9e('0x0', 'n9Xt')](/\"userAudioLockStatus":\d+/g, _0x2b9e('0xc', 'DzdD') + _0x2b9e('0x8', '4UTI') + '\x22:2');
}
const _0x2b486e = {};
_0x2b486e[_0x2b9e('0x7', 'Fv2O')] = _0xf809f9;
$done(_0x2b486e);