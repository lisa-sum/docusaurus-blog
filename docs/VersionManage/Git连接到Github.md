# Git连接到Github

#教程 #命令 #Git

> 参考: [Git安装教程](https://www.cnblogs.com/hdlan/p/14395189.html)
>
> 参考: [Git连接Github](https://www.cnblogs.com/hdlan/p/14395681.html)

## 第一次配置

### 设置个人标识

**名称**

> username : 你的名字/昵称

```git
git config --global user.name "username"
```

**邮箱**

> expor@email.com 你的邮箱

```git
git config --global user.email "expor@email.com"
```

### 创建密钥

```git
ssh-keygen -t rsa
```

> 默认回车即可
`ssh文件: C:\Users\<username>\.ssh`

- id_rsa 私钥
- id_rsa_pub 公钥

打开公钥复制里面的内容

## 远程github配置ssh秘钥

1. 密钥生成后需要在github上配置密钥本地才可以顺利访问
2. 进入github右上角你账号的头像选择settings
3. 选择 SSH and GPG keys
4. 创建SSH Key
5. 输入有意义<日期,创建Kek的目的...>的Title内容
6. key栏输入复制的 `id_rsa_pub` 内容
7. Add SSH Key

## 仓库配置

生成仓库

```git
git init
```

查看仓库

```git
git remote
```

连接仓库

> <ssh地址> : github创建的库中的链接
>
> 示例: `git@github.com:icons/Electron-Template.git`

```git
git remote add origin <仓库地址>
```

## 查看连接的仓库

```git
git remote -v
```

## 把本地库的内容推送到远程

### 参数:

-u : Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来

```git
git push origin master -u
```

本地更新内容,然后提交到远程Github仓库

```git
git push origin master
```