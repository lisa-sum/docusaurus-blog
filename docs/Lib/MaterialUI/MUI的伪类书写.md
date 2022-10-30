使用引号来写伪类:

```ts
'& :hover' :{
	...style code
}
```

响应式:
[MUI](https://mui.com/zh/material-ui/customization/breakpoints/#theme-breakpoints-up-key-media-query)

```ts
[theme.breakpoints.up('sm')]: {  
  width: '15ch',  
  '&:focus': {  
    width: '20ch',  
    border: '1px solid #2c88ff',  
  },  
},
```

Btn
常见属性
color
1.
variant
1. text
size
1. small

文本
Typography

Paper 阴影盒子

sx
p: 数值 padding的倍数
padding: 字符串 '3em'

## 颜色

[MUI颜色表](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=29B6F6)

引入

color:
1. orange[900]  橘色900

## 主题:

1. 引入`@mui/material`
2. 通过`createTheme`与`themeProvider`创建主题,

> [主题属性参考](https://mui.com/zh/material-ui/customization/default-theme/?expand-path=$.palette)

```ts
const theme = createTheme({
	
})```

## 自定义组件
1. 引入`@mui/system/styled`
自定义`Button`组件,继承自`Button`的自定义组件
```ts
const MyButton = syleted(Button)({
	border:'1px solid red'
})
```