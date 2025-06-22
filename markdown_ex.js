// 以下属于自制的 Markdown 语法，可能并不兼容原版

// 下划线 _text_
function underline() {
return {
    extensions: [{
        name: 'underline',
        level: 'inline', // 行内元素
        start(src) { return src.indexOf('_'); }, //  查找下划线位置
        tokenizer(src, tokens) {
            // 定义匹配下划线文本的正则表达式：
            // ^_       - 以下划线开头
            // ([^_]+)  - 捕获组，匹配一个或多个非下划线字符
            // _        - 以下划线结尾
            const rule = /^_([^_]+)_/;
            const match = rule.exec(src); // 匹配正则
            if (match) {
                return {
                type: 'underline',
                raw: match[0], // 原始文本
                text: match[1] // 提取去掉下划线的文本
                };
            }
        },
        renderer(token) {
            return `<u>${token.text}</u>`; // 输出去掉下划线的文本
            }
        }]
    };
}
marked.use(underline());

// 卡片  [[类型|text]] （类型有：warning、info、danger）（|前后的空格无所谓）
marked.setOptions({ breaks: false, gfm: true }); // 初始化防BUG
function card() {
return{
    extensions: [{
    name: 'card',
    level: 'block',
    start(src) { return src.trimStart().startsWith('[[') ? 0 : undefined; },
    tokenizer(src) {
        const match = src.match(/^\[\[\s*(.*?)\s*\|\s*([\s\S]*?)\s*\]\]/);
        if (match) {
            return {
                type: "card", // 重要！修了半天原来是这段被删掉了，无语
                raw: match[0],
                card_type: match[1],
                content: match[2]
            };
        }
    },
    renderer(token) {
        // 要解析卡片里的markdown，用marked.parse()
        return `
        <div class="custom-card custom-card-${token.card_type}">
            <div>${marked.parse(token.content)}</div> 
        </div>
        `;
    }
    }]
}
}
marked.use(card());