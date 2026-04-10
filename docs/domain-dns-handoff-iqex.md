# IQEX 域名 DNS 交接说明

本文档用于交接给负责 DNS/域名配置的同事。

## 目标

将 `iqex.io` 与 `www.iqex.io` 指向 Vercel 项目 `iqex-website`。

## 当前状态

- Vercel 项目中已添加以下域名：
  - `iqex.io`
  - `www.iqex.io`
- 当前待完成事项：在域名服务商处配置 DNS 记录。

## 需要配置的 DNS 记录

请新增或更新以下记录：

1. `A` 记录
   - Host/Name：`@`（根域）
   - Value：`76.76.21.21`
   - TTL：默认/自动

2. `A` 记录
   - Host/Name：`www`
   - Value：`76.76.21.21`
   - TTL：默认/自动

## 说明

- DNS 生效后，Vercel 会自动完成域名验证并签发 SSL 证书。
- 如果使用 Cloudflare 代理，建议验证阶段先切换为 DNS only（仅 DNS），验证通过后再按需开启代理。

## 验收清单

- `https://iqex.io` 可正常访问。
- `https://www.iqex.io` 可正常访问。
- SSL 证书状态有效（浏览器无证书告警）。

## 可选项（DNS 验证通过后）

- 设定一个正式主域名：
  - 方案 A：`www.iqex.io` 作为主域，`iqex.io` 301 跳转到 `www.iqex.io`
  - 方案 B：`iqex.io` 作为主域，`www.iqex.io` 301 跳转到 `iqex.io`

