location /modules/ssh-terminal/teleport/ {
    proxy_pass https://127.0.0.1:3080/;
}
location /modules/ssh-terminal/ {
    rewrite ^/modules/ssh-terminal/$ /modules/ssh-terminal/index.php/index/index/web redirect;
}
