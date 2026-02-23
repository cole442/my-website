// page-config.js - 所有页面配置集中管理

const PAGE_CONFIG = {
    home: {
        title: '主页',
        type: 'single',
         url: 'home.html'
    },
    wz: {
        title: '收单登记(本场)',
        type: 'single',
        url: 'https://www.kdocs.cn/l/ckee7mJnjuIW',
        moveOffset: 85
    },
    ad: {
        title: '收单登记(A岛)',
        type: 'single',
        url: 'https://www.kdocs.cn/l/chOikqBK4pyB',
        moveOffset: 85
    },
    dz: {
        title: '打单做账登记',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v12naO01',
        noMove: true  // 特殊页面，不应用 -35px 上移
    },
    yc: {
        title: '异常信息登记',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11xPZ9y',
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
        title: '收单状态查询',
        type: 'single',
        url: 'https://www.kdocs.cn/etapps/query/q/pTa0EFIg'
    },
    ycQuery: {
        title: '异常信息展示',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11MkQ2e'
    },
    slQuery: {
        title: '收单历史数据',
        type: 'single',
        url: 'https://www.kdocs.cn/etapps/query/q/7D7YiHpo'
    },
    dlQuery: {
        title: '代理历史数据',
        type: 'single',
        url: 'https://www.kdocs.cn/etapps/query/q/AacdusKo'
    },
    stat: {
        title: '数据统计',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v12mnYEt'
    },
    viz: {
        title: '数据可视化',
        type: 'single',
        url: 'https://www.kdocs.cn/wo/sl/v11tAJZk'  // 留空或后续补充
    },
    help: {
        title: '系统说明',
        type: 'single',
        url: 'https://www.kdocs.cn/l/cp5INwdtAXhG',
        moveOffset: 85
    }
};

