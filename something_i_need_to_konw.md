## 账号信息
- 手机号: `13322603515` 密码: `123456`
- 邮箱: `2105837635@qq.com` 密码: `jianyaokeji@200324` 备注: `123456这个账号登录插件`
https://www.tt123.com/

## MQ 地址
- URL: `http://112.74.104.156:15672`
- 用户名: `admin`
- 密码: `e897e069`

## 数据库连接
- 地址: `rm-wz9hpx2gt8nnnz10qco.mysql.rds.aliyuncs.com`
- 账号: `daren_dev_user`
- 密码: `@daren123`

## 技术栈
- `wxt+nodejs + websocket + ts + worker_theart + 消息队列qm + mysql + 线程池 + 设计模式/线程设计模式`

## 测试命令
```bash
npx ts-node src/index.ts
```

## Git 相关

- 仓库地址: [Bitai/creator-unified-exp](https://git.bitaihub.com/Bitai/creator-unified-exp)
```bash
克隆分组
$ git clone https://e.coding.net/g-sldf2848/agenthub/creator-extension.git 
cd到抓下来的目录
$ cd creator-extension/
切换到指定分支和标签
$ git checkout  feature/sendmsg
显示所有指定分支
$ git branch
查看目录文件
$ ls
显示所有指定分支
$ git branch feature/login-feature
切换到指定分支和标签
$ git checkout feature/login-feature
查看目录文件
$ ls
# 执行合并
git merge origin/feature/login_feature_1.0.2  # 如果分支在远程

命令来切换到某个提交哈希
git checkout 0d5e215f7c5fd41453f7b4661df35a4a91e2ca8a

content:负责监听
--api
background:后端

是不追踪文件可以避免提交是吗
git update-index --skip-worktree packages/creator-extension/config/env.ts
  ```
## 测试代码
```javascript
async function findTikTokTab() {
  const tabs = await chrome.tabs.query({ 
    url: "https://affiliate-us.tiktok.com/product/sample-request?shop_region=US",
    status: "complete"
  });
  if (!tabs.length) throw new Error("未找到TikTok Affiliate标签页，请先打开对应页面");
  return tabs[0].id;
}

// ===== 测试消息数组 =====
const testMessages = [
  // 测试消息1：content_type = 1（视频内容）
  {
    type: "get_video_data_response",
    data: {
      video_id: "8070728021973831829",
      region: "US",
      options: {
        size: 20,
        offset: 0,
        content_type: 1,  // 视频内容
        user_language: "en"
      }
    },
    taskId: "test-task-video",
    messageId: "test-msg-video"
  },
  // 测试消息2：content_type = 2（直播内容）
  {
    type: "get_video_data_response",
    data: {
      video_id: "8070728021973831829",
      region: "US",
      options: {
        size: 20,
        offset: 0,
        content_type: 2,  // 直播内容
        user_language: "en"
      }
    },
    taskId: "test-task-live",
    messageId: "test-msg-live"
  },
  // 测试消息3
  {
    type: "get_video_data_response",
    data: {
      video_id: "8070726829523898551",
      region: "US",
      options: {
        size: 20,
        offset: 0,
        content_type: 2,  // 直播内容
        user_language: "en"
      }
    },
    taskId: "test-task-live",
    messageId: "test-msg-live"
  }
];

// ===== 执行测试 =====
(async () => {
  try {
    const tabId = await findTikTokTab();
    console.log("🔍 目标标签页ID:", tabId);
    let i = 1;
    // 遍历测试消息数组
    for (const testMessage of testMessages) {
      console.log(`\n=== 测试 content_type=${testMessage.data.options.content_type}  测试点${i}===`);
      i++;
      console.log("📤 发送测试消息:", testMessage);
      
      const response = await chrome.tabs.sendMessage(tabId, testMessage);
      console.log("📥 收到响应:", response);

      // 模拟socketService处理
      const socketResponse = {
        type: "GET_VIDEO_DATA_RESPONSE",
        message: `测试成功 (content_type=${testMessage.data.options.content_type})`,
        token: "mock-token",
        shopId: "mock-shop-id",
        data: response,
        code: 0,
        taskId: testMessage.taskId
      };
      console.log("🚀 模拟socket响应:", socketResponse);
    }
    console.log("All_AC");
  } catch (error) {
    console.error("❌ 测试失败:", error);
  }
})();
```

## 测试结果
- 分支 `origin/maoqi/feature/task_schedule` 完美通过。
- 可以正常向插件以指定频率发送请求。
- 可以正确返回请求结果，并且 `data` 和 `token` 皆为正常。
- `0ms` 成功触发保底机制。