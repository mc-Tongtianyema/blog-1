import http.server
import socketserver
import os
import urllib.parse

PORT = 8000 # 默认端口

class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # 解析路径和查询参数
        parsed_path = urllib.parse.urlparse(self.path)
        path = urllib.parse.unquote(parsed_path.path)  # 解码 URL 路径
        query = parsed_path.query  # 获取查询参数

        # 如果路径无后缀（如 /blog/article）
        if '.' not in os.path.basename(path):
            # 尝试补全 .html
            html_path = path.lstrip('/') + '.html'
            if os.path.exists(html_path):
                new_path = path + '.html'
            # 尝试补全 /index.html
            elif os.path.exists(os.path.join(path.lstrip('/'), 'index.html')):
                new_path = path + '/index.html'
            else:
                new_path = path  # 不修改路径（最终返回 404）

            # 重新拼接路径和查询参数
            if query:
                self.path = f"{new_path}?{query}"
            else:
                self.path = new_path

        return http.server.SimpleHTTPRequestHandler.do_GET(self)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    httpd.serve_forever()