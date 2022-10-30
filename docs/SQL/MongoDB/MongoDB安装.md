## Linux

[参考](https://blog.csdn.net/Amor_Leo/article/details/85858145)

1. docker pull mongo

2. 创建存储数据的文件夹

```shell
mkdir /usr/local/mongodb/databases
```

3. 给所有权限

```shell
chmod 777 /usr/local/mongodb/databases
```

4. 运行mongo程序
   -d 后台运行
   -v 运行路径
   -p 映射端口
   --privileged 获取systemctl权限
   -e MONGO_INITDB_ROOT_USERNAME=root 设置mongodb的root账号
   -e MONGO_INITDB_ROOT_PASSWORD=msdnmm 设置mongodb的root密码

```sql
docker run -d --name mongo -v /usr/local/mongodb/databases:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=msdnmm --privileged=true -p 27017:27017 mongo
```

5. 执行mongo程序

```shell
docker exec -it mongo bash
```

6. 连接Mongo

```shell
mongo admin
```

7. 创建root账户

```shell
use admin
db.createUser(
	{
		user: 'root',
		pwd: 'admin',
		roles:[ { role: 'root', db: 'admin' } ]
	}
)
```

8. 连接

```shell
mongo -u <用户>
```

9. 创建普通用户

```shell
db.createUser(
	{
		user: '<用户名>',
		pwd: '<密码>',
		roles:[ { role: '<用户名>', db: '<数据库显示的用户名>' } ]
	}
)
```

Q&A: 容器被占用,删除即可

```shell
docker rm -f <容器ID>
```

Q&A: 需要开放端口?
[参考](https://blog.csdn.net/chushiyan/article/details/104902491)
![[Pasted image 20220726121543.png]]

## Windows:

1. docker pull mongo
2. docker run --name mongo -d -p 27017:27017 mongo
3. docker exec -itd mongo

错误: CPU不支持AVX
检查当前电脑是否支持CPU的AVX指令
1. 进入`WSL`的命令行模式
2. 查看`/proc/cpuinfo`的`tags`字段是否包含`avx`,如果没有,则电脑不支持

```shell
cat /proc/cpuinfo 
```

解决方案:
不使用`mongo`5.x以上上版本