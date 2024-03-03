fetch('https://apis40.qupeiyin.com/member/index', {
    method: 'GET', // 或者 'POST', 取决于API的要求
    headers: {
        'Content-Type': 'application/json',
        // 可能还需要其他认证头或cookies，取决于API的要求
    },
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    // 修改响应数据
    if (data.is_svip !== undefined) {
        data.is_svip = "1";
    }
    if (data.svip_endtime !== undefined) {
        data.svip_endtime = "4076230383";
    }

    // 处理修改后的数据
    console.log('Modified Data', data);
})
.catch(error => {
    console.error('Fetch error:', error);
});
