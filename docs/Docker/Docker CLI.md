# Docker Doc CLI

#Docker #教程 #指令

#指令

```shell
docker run -itd --privileged=true eeb6ee3f44bd /usr/sbin/init
```

```shell
docker exec -it e81f4310b48b03 /usr/bin/bash1
```

docker ps 查看镜像详细信息

从 Docker 拉取 镜像 将`images-name>` 替换为`DockerHub`上的`镜像名称`

```shell
docker pull <images-name>
```

运行DockerFile

```shell
docker up docker-compose
```

```shell
docker status sshd 查看某个服务状态

docker start sshd 启动某个服务 把sshd 改成服务名称

systemctl enable sshd 把某个服务加入带启动项

systemctl stop sshd 停止某个

systemctl disable sshd 移除某个服务的自启动

systemctl restart sshd 重启某个服务
```

参数：

`-d ` 后台运行

`-i`

`-p`  指定端口映射 `4000:4000`

`-v` 挂载宿主的目录至Docker目录`/Web/local/app:/Web/Docker/app`

`--privileged` 特权模式Docker的目录

`exit` 退出

```

docker cp <file1> <Image>:/<file2> 复制宿主机的文件file1到容器<image>的<file2>中

docker rmi <images-name>镜像名称

docker ps -a 查询容器

docker stop <images-name>

docker rm <cont> 删除容器

dicker rmi <images> 删除镜像

停止所有容器：docker stop $(docker ps -a -q)

删除所有容器：docker rm $(docker ps -a -q)

删除所有镜像：docker rmi $(docker images -q)
```

## 查看容器相关信息

`docker inspect 容器名`

## 部署：

`docker commit <contID>`

第三方包指令：

`passwd root` 更改root用户密码

`docker -privileged` 和`/usr/sbin/init` 启动容器之后可以使用systemctl方法

`-privileged=true` 获取宿主机root权限（特殊权限）

## Vim

`vim /etc/ssh/sshd_config` 使用Vim某个编辑文件

`x` 删除

`/Pre` 搜索Pre

`ESC` 菜单

`:wq` 保存退出