// page-config.js - 所有页面配置集中管理

const PAGE_CONFIG = {
    home: {
        title: '主页',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11tAJZk'
    },
    wz: {
        title: '无纸化收单',
        type: 'single',
        url: 'https://kdocs.cn/l/ckee7mJnjuIW'
    },
    sd: {
        title: '收单登记',
        type: 'split',
        url1: 'https://www.kdocs.cn/wo/sl/v14dSwGd',
        url2: 'https://www.kdocs.cn/l/cqOBfg5woE11?from=docs&embed=1&hide=1'
    },
    dz: {
        title: '打单做账登记',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v12naO01',
        noMove: true  // 特殊页面，不应用 -35px 上移
    },
    yc: {
        title: '异常单登记',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11xPZ9y',
        noMove: true
    },
    jd: {
        title: '交单登记',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v14aBsjE',
        noMove: true
    },
    sdData: {
        title: '收单数据',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11p8MmT'
    },
    agent: {
        title: '代理数据',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v1ydmSr'
    },
    dzData: {
        title: '打单做账数据',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11yP7M2'
    },
    ycData: {
        title: '异常单数据',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v1NM4FF'
    },
    sdQuery: {
        title: '收单查询',
        type: 'single',
        url: 'https://www.kdocs.cn/etapps/query/q/pTa0EFIg'
    },
    ycQuery: {
        title: '异常单展示',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11MkQ2e'
    },
    slQuery: {
        title: '收单历史数据',
        type: 'single',
        url: 'https://www.kdocs.cn/etapps/query/q/CkE29Uf3'
    },
    dlQuery: {
        title: '代理历史数据',
        type: 'single',
        url: 'https://www.kdocs.cn/etapps/query/q/IYVp2QqW'
    },
    stat: {
        title: '数据统计',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v12mnYEt'
    },
    viz: {
        title: '数据可视化',
        type: 'single',
        url: ''  // 留空或后续补充
    },
    bind: {
        title: '员工号绑定',
        type: 'single',
        url: 'https://web.wps.cn/wo/sl/v31Bmr3z?app_id=5IXSM8MjQrYBI9tXidNxyq'
    },
    switch: {
        title: '切换账号',
        type: 'single',
        url: 'https://account.wps.cn/?cb=https%3A%2F%2Fdocs.wps.cn%2Fcrossdomain.html%3Faction%3DwebLoginSuccess%26tcb%3Dhttps%253A%252F%252Fwww.kdocs.cn%252Flatest&autologin=false'
    },
    help: {
        title: '系统说明',
        type: 'single',
        url: 'https://kdocs.cn/l/cdeCQXZdMEnf'
    }
};