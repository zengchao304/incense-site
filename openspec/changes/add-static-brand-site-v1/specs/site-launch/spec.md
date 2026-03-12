## ADDED Requirements

### Requirement: 截止日前完成正式发布
系统 SHALL 在周日上线截止时间前发布到一个可公开访问的 HTTPS 地址。

#### Scenario: 正式部署成功
- **WHEN** 生产构建被部署到 Vercel
- **THEN** 网站可通过一个公开 HTTPS 链接访问，并可直接分享给客户

### Requirement: 域名绑定存在兜底方案
系统 SHALL 在自定义域名未及时就绪时保留一个可交付的备用线上地址。

#### Scenario: 自定义域名延迟
- **WHEN** 域名实名、DNS 生效或 SSL 证书下发未能在上线前完成
- **THEN** 团队使用 Vercel 正式链接作为第一版交付地址

### Requirement: 上线前通过人工验收清单
系统 SHALL 在交付前通过内容、导航和响应式布局的人工验收检查。

#### Scenario: 最终验收执行
- **WHEN** 团队在交付前使用桌面端与移动端检查网站
- **THEN** 所有关键图片均可加载、导航可用，且不存在严重的响应式错位问题
