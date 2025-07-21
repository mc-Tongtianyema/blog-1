# 无法访问？
因为某些不可抗力因素，会偶尔出现无法访问 *github.io* 的情况。这里给出了一些**可能有效**的解决方法：

[[warning|修改DNS的方法可能并非完全有效，当修改完DNS后发现无法连接 Github，你可以尝试复原 DNS 的设置]]

## 关于 DNS
你可以在这里查询比较大众化的 IPv4 公共加密 DNS：<https://www.cccitu.com/2205354.html>

## Windows

- 【推荐，简单易用】使用加速器（例：Watt Toolkit）
1. 在网络上下载 [Watt Toolkit](https://steampp.net/)（原名 Steam++）
2. 打开软件后在 *加速服务* 中勾选 Github 相关并加速

- 通用方法
1. `Win` + `R` 打开运行。输入 `control` 进入控制面板。
2. 选择 *网络和Internet* → *网络与共享中心* → 单击网络名称（图示1中所框注区域）
![图示1](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAI2MWh3cPzeYPoAAd-JrrSVo4V9scXOnwACiBcAAub7wFfvO02_SOvp-jYE.png)
3. 在弹出的 *WlAN状态* 窗口中，选择 *属性* → *Internet 协议版本 4（TCP/IPv4）* → *属性*
4. 勾选 *使用下面的 DNS 服务器地址* → *首选 DNS 服务器* 填写 `114.114.114.114`,*确定* 后关闭窗口
[[ info | <img src="https://img.icons8.com/?size=48&id=kNMmj1h9AoTk&format=png" style="height:1.2rem;"></img> *这是什么？*  
`114.114.114.114` 是国内一个公用的免费DNS，在国内使用较为稳定。  
当然，你也可以选择 `8.8.8.8`（谷歌提供的全球通用DNS）、`223.5.5.5`（阿里巴巴提供的DNS）、`119.29.29.29`(腾讯提供的DNS)、`180.76.76.76`（百度提供的DNS）、`1.1.1.1`（cloudflare提供的DNS）]]

- 修改 Hosts
Hosts 通常在路径 `C:\Windows\System32\drivers\etc` 下，你可以使用记事本打开它，请注意取得管理员权限。
修改 Hosts 的方法此处不再过多赘述。

## 安卓
- 通用方法
[[warning|注：尚不清楚是否所有安卓及其魔改系统都能使用。]]
1. *设置* 应用中搜索 `DNS` 相关字眼，打开 *私人 DNS*（在部分系统中它叫“加密 DNS”、“私密 DNS”等）
2. 在 *私人 DNS* 中，选择 *私人 DNS 提供商主机名* ，主机名的输入框内输入 `dns.alidns.com`，然后 *保存*，再选择 *自动*。
[[ info | <img src="https://img.icons8.com/?size=48&id=kNMmj1h9AoTk&format=png" style="height:1.2rem;"></img> *这是什么？*  
`dns.alidns.com` 是阿里巴巴提供的私人DNS服务。
类似的还有谷歌提供的 `dns.google`、腾讯的 `dot.pub`等。你可以[上网查询](https://www.cccitu.com/2205354.html)其他服务提供商的 DoT。]]