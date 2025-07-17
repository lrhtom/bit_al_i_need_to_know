import { test, expect } from '@playwright/test';
import { _electron as electron } from 'playwright';

test('测试 Electron 应用', async () => {
  // 启动 Electron 应用
  const electronApp = await electron.launch({
    args: ['D:/destop/job/agent-client/src/main/index.ts'], // 替换为你的 Electron 主进程文件路径
  });

  // 获取第一个窗口
  const window = await electronApp.firstWindow();

  // 测试窗口标题
  await expect(window).toHaveTitle('Bital'); // 替换为你的应用标题

  // 测试某个元素是否存在
  const button = await window.$('button#submit');
  expect(button).not.toBeNull();

  // 关闭应用
  await electronApp.close();
});