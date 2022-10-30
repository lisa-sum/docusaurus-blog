## 数据库操作

### 连接

##### options:

- retryWrites=true&w=majority 可以重写

#### 连接自建服务器

格式:

```txt
mongodb://[<user:password>]@<IP>:<post>/?[oprions]
```

示例:

```txt
mongodb://root:msd@152.32.186.251:27017/?retryWrites=true&w=majority
```

- 连接MongoDB集群

格式:

```txt
mongodb+srv://root:<password>@<分配给你的数据库>/?[options]
```

示例:

```txt
mongodb+srv://root:msd@cluster0.1zprm.mongodb.net/?retryWrimongodb+srv://root:msdnmm@cluster0.1zprm.mongodb.net/?retryWrites=true&w=majority
```

1. 显示所有的数据库

```sql
show dbs
show databases
```

2. 查看当前所在的的数据库

```sql
db
```

3. 创建并使用数据库

```sql
use <database>
```

4. 删除数据库

```sql
// 进入到要删除的数据库
db.dropDatabase()
```

## 集合(表)操作

- 创建表
  语法

```sql
db.createCollection('<table>',[options])
```

选项
> [options]
> capped:布尔值 固定大小的集合
> size:数值 大小(字节)
> max:数组 最大条数

- 删除表
  语法

```sql
db.<表>.drop()
```

## 增加(插入)insert

- 插入单条数据
  语法:

```sql
db.<集合>.insert({"<key>":"<value>"})

db.<表>.insert([
{"<key1>":"<value1>"},
{"<key2>":"<value2>"}
])
```

- 插入多条数据
  语法:

```sql
db.<集合>.insertMany([ {"<key1>":"<value1>"},
{"<key2>":"<value2>"}, ...])
```

- 脚本操作数据

```sql
for(let i=0;i<10;i++){
	db.<集合>.insert({name:'user'+i })
}
```

## 查询find()

语法:
db.<表>.find(query,options)

- 全部查询(默认返回前20条),使用`it`查看下一组数据

```sql
db.<表>.find()
```

- 模糊查询
  通过JS正则表达式实现

```sql
db.<表>.find({ <字段>: /<模糊查询值>/ })
```

示例:

```sql
--测试数据
db.users.insert({ "_id" : ObjectId("62de51a37c9c74a632447881"), "name" : "n1_6", "age" : 32 },{ "_id" : 6, "name" : "n2_6", "age" : 31 },{ "_id" : 2, "name" : "n2_1", "age" : 18 })

> db.users.find({name:/6/})

-- 返回结果
-> { "_id" : ObjectId("62de51a37c9c74a632447881"), "name" : "n1_6", "age" : 32 }
-> { "_id" : 6, "name" : "n2_6", "age" : 31 }
```

- 返回指定字段
  `1` : 返回该字段
  `0`: 不返回该字段
  语法:

```sql
find({}, {<key1>: <1 | 0>, <key2>: <1 | 0>})
```

> TIP
> `0`与`1`不能同时使用!

示例:
只返回`list`集合的`age`字段,不返回`name`字段

```sql
db.list.find({},{name: 0})
```

- 分页查询
  语法:
  `skip(start)`: 起始位置, 数值
  `limit(pageNum)`: 每页要显示的数据, 数值

示例:
返回排序好的id与name值,并且从第1条数据开始显示10条数据

```sql
dn.list.find().sort({_id:1,name:1}).skip(0).limit(10)
```

- 文档总条数count()
  示例:
  查询`list`文档字段的总条数

```sql
db.list.find().count()
db.list.count().find()
```

- 条件查询:
  | 条件 | 代码 | 符号表示 |
  | ---------------- | ----- | -------- |
  | 小于 | $lt | <        |
  | 小于或等于 | $lte | <= |
  | 大于 | $gt | >        |
  | 大于或等于 | $gte | >= |
  | 不等于 | $ne | != |
  | 等于 | :     | = |
  | 数组长度大于等于 | $size | |

- 与查询
  使用`,`分割要查询的条件

```sql
db.<集合>.find(
	{<字段1>: {<条件>: 值1}},
	{<字段2>: {<条件>: 值2}},
	...
)
```

示例:

```sql
db.<集合>.find(
	{age: {$gt: 20}},
	{_id: {$lte: 10}}
)
```

> TIP
> 如果两个字段相同,只会取最后的字段的结果

- 或查询

db.<集合>.find(
$or: [
{<字段1>: {<条件>: 值1}},
{<字段2>: {<条件>: 值2}},
\]
...
)

示例:

```sql
db.users.find(
	$or: [
		{age: {$gt: 20}},
		{_id: {$lte: 10}}
	\]
	...
)
```

> TIP
> 如果两个字段相同,只会取最后的字段的结果

- 与或条件结合

 ```sql
 db.<集合>.find(
	 {
		 { <字段1>: {<条件>: 值1}, ... },
		 {
			 $or: [
				{<字段1>: {<条件>: 值1}},
				{<字段2>: {<条件>: 值2}},
				...
			\]
		 }
	 }
)
 ```

- 排序sort()
  语法:
  `1`: 升序
  `-1` 降序

```sql
db.<集合>.sort({ <字段1>: 1 | -1,[<字段2>: 1 | -1 ] }).find()
```

- $type
  类型图:
  类型|数字|备注
  Doble|1|数字与浮点数都属于Double
  String|2|字符串
  Object|3|对象
  Array|4|数组
  Binary data|5|二进制数据
  Undefined|6|废弃
  Object id|7|MongoDB自动生成的ID
  Boolean|8|布尔
  Date|9|日期
  Null|10|空
  Regular Expression|11|正则表达式
  Javascript|13|脚本
  Symbol|14|
  Binary data|5
  ---|---|---

![[Pasted image 20220725231633.png]]

语法:

```sql
find(<字段>: {$type: '1'})

find(<字段>: {$type:'double'})
```

- 去重distinct()
  语法:

```sql
db.<集合>.distinct(<字段>)
```

返回值: 数组形式的不重复项

显示user集合的age重复的项

```sql
db.users.distinct('age')
```

数据过长时格式化

```sql
db.<集合>.find().pretty()
```

## 删除remove()

语法:

```sql
db.<集合>.remove(
<删除条件>,
	{
		justOne:默认为false,删除匹配的文档,反则只删除一个文档,
		writeConcern: 异常级别
	}
)
```

## 更新update()

```
语法:
```sql
db.<表>.update(
	<query>,
	<update>,
	{
		multi: 多个匹配.默认flase,只匹配第一个数据
		upsert: 查询条件不匹配时是否插入,默认flase
	}
)
```

例子:
将所有年龄为21的字段更新为23

```sql
db.users.update(
	{age:21},
	{$set:{age:23}},
	{ multi:true }
)
```

对原有数据插入新字段与值

`$set:{key:value}` 保持原有数据进行插入或更新

对`user`文档字段`user`为`lookeke`的字段进行新增字段`thumbUp`值为`17`

```sql
db.pins.updateOne({user:'lookeke'},{$set:{thumbUp:17}})

```

对所有文档字段进行新增字段`thumbUp`值为`17`

```sql
db.pins.updateMany({},{$set:{thumbUp:17}})
```

## 索引

目的: 为经常访问的数据建立索引,减少访问时遍历的时候从头到尾访问
创建索引

```sql
db.<集合>.createIndex({<字段>})
```