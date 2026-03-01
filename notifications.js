// 通知内容配置文件
// 修改此文件即可更新滚动通知内容，无需修改主页面
// 
// 使用说明：
// 1. items 为空数组 [] 时，通知栏自动隐藏
// 2. 添加通知对象到 items 数组，通知栏自动显示
// 3. text 为空或只有空格的通知会被自动过滤

const NOTIFICATIONS_CONFIG = {
    // 通知列表 - 空数组时通知栏隐藏
    items: [
        { 
            text: "根据大韩通知：大韩航空计划实施普货提单无纸化进程。自3月2日起，电子单EAW不需要A4纸质提单，EAP只需随机业务袋即可，其他所需文件保持不变。", 
            priority: "normal"  // 普通：绿色
        },
        { 
            text: "例外情况：危险品，活体，骨灰灵柩，温控箱药品等特货仍需要纸质提单！", 
            priority: "high"     // 重要：橙色
        },
        { 
            text: "", 
            priority: "urgent"   // 紧急：红色
        },
        { 
            text: "南航货单需2、4联的站点为：DAC、SGN、DXB、PNH、CGK。", 
            priority: "normal"
        },
        { 
            text: "", 
            priority: "normal"
        }
    ],

    // 滚动速度配置（秒）- 数字越小滚动越快
    scrollSpeed: 30,

    // 优先级颜色配置
    priorityColors: {
        urgent: '#ef4444',   // 红色
        high: '#f59e0b',     // 橙色  
        normal: '#10b981'    // 绿色
    },

    // 图标配置
    icon: '📢'
};

// 导出配置（如果在模块环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NOTIFICATIONS_CONFIG;

}
