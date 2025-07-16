以下为更改后的样式测试。

- pre code

> 过长可以横向滑动

```python
def fib2(n):
    # Return a list containing the Fibonacci series up to n.
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a+b
    return result

```

- 图片

> 过长可以横向滑动

![图示1.png](https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAI2MWh3cPzeYPoAAd-JrrSVo4V9scXOnwACiBcAAub7wFfvO02_SOvp-jYE.png)


- code

`114514`

- link

[link](https://markdown.com.cn/)  
<https://markdown.com.cn/>

- blockquote

> Quick fox jumped over lazy dog.

- 下划线<sup>1</sup>

```
_下划线_
```

这是_下划线_。

- 卡片<sup>1</sup>

```
[[类型|内容]]
```

> 类型有：`warning`、`info`、`danger`或不填
> 内容支持 Markdown，但不支持嵌套卡片

[[warning | 注意：这是一个警告！
- 这是一个 Card
- Card 内可以嵌套 `markdown`]]
[[ info|注意：这是一个信息! ]]
[[danger| 注意：这很危险！]]
[[|这是一个card[link]()]]

---

注：  
<sup>1</sup> 属于自制 Markdown，并不兼容原版 Markdown 语法。