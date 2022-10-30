# Shell

#Linux #Shell

切换账号

```shell
su - <user>   切换到新用户的同时,也却换到新用户的环境变量
su <user>  只切换到root,环境变量不切换
```

例子:

```shell
su -    切换到root,且环境切换到root的环境变量
su      只切换到root,环境变量不切换
```

运行管理员特权 `Super User Do`

```Shell
sudo
```

更改密码

```
passwd 当前密码 
```

解压

```
tar -zxvf <package>
xz -d <package>
tar -xf <package>
```

查找文件

语法:
`find <path> -name <filename>`
`locate <filename>`

```
find / -name <filename> // 查找根目录下的文件

locate <filename>
```

查找文件夹

```Shell
whereis <dir>
```

运行管理员特权

`sudo`

```
Super User Do
```

查看当前服务器占用的端口

```
ss -tunlp
```

更新`yum`软件包索引

```Shell
yum makecache fast
```

更改密码

passwd 当前密码

`pwd` 以绝对路径方式显示当前的工作路径

关机（退出Linux） shutdown -h 10:00 十点后关机 shutdown -h +4 4分钟后关机 shutdown -h now 现在关机

查看已安装的服务 rpm -qa rpm -qi 软件名 rpm -qc 软件的配置文件 rpm -qd 软件名 #查看一个已经安装软件的文档安装位置 rpm -qR 软件名 #查看一下已安装软件所依赖的软件包及文件