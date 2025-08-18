这是我的 C# 的入门学习记录。你可以当做我的笔记来看。

# 1 | C#开发环境
这里使用 VS Code 来做开发。
> 为什么我想使用 VS Code 而不使用 VS 或其他的游戏引擎？
> 因为我学习 C# 是当做一个爱好，同时 VS Code 用习惯了。不使用游戏引擎因为我希望**暂时**锻炼下自己的写代码的能力。

1. 安装 .NET SDK
C# 程序依赖 .NET SDK（提供 dotnet 命令），可以在 [此处](https://dotnet.microsoft.com/zh-cn/download) 下载。

安装 .NET 后在 cmd 输入：

```
dotnet --version
```

如果输出版本号（如 8.0.100），说明安装成功。

2. 下载扩展
在 VS Code 的扩展中下载 `.NET Install Tool`、`C#`、`C# Dev Kit`这几个扩展。

3. 新建C#文件
在终端（`Ctrl` + `~`）输入：

```
dotnet new console -n MyCSharpProgram
cd MyCSharpProgram
```

以创建一个简单的 `Program.cs` 文件。
在 VS Code 打开 `MyCSharpProgram` 文件夹，若运行 `Program.cs` 后输出 `Hello, World!` 那么就完成了。

---

# 2 | 我的第一个C#程序

发现C#的程序和 Java 很相似，**大部分**语法可以直接通用。

这是一个C#程序，它的主要功能是遍历一个数组，然后寻找一个数字在数组中的位置。

```C# [我的第一个C#程序]
class Countnumber // 新建一个类
{
    int[] numbers = { 5, 4, 6, 63, 8, 4, 6, 16, 0, 2, 1, 7 }; // 初始化一维数组
    private int num;
    public Countnumber(int num) // 这里是类的一些属性
    {
        this.num = num; // this.可以认为是对象的私有变量
    }
    public void count() // 这是一个方法，实现主要功能
    {
        int a = 0;
        Console.WriteLine("Finding the Number " + this.num + " now...");
        for (int i = 0; i < numbers.Length; i++) // for的一个遍历
        {
            if (numbers[i] == this.num) // 判断，number[i]可以获取数组number的第 i+1 项
            {
                a = i;
                Console.WriteLine("\nI find the number" + this.num + "on the list of " + a + ".");
                break;
            }
            Console.Write("█");
        }
    }
    static void Main(string[] args) // 可以认为是主循环
    {
        Countnumber counter = new Countnumber(1); // 这个类新建一个对象，叫做counter
        counter.count(); // 对象counter运行count方法
    }
}
```
