# Lab7设计文档  
  

## 遇到的问题  
重复问题。这次的Lab中，四个div的内容中有很大的重复部分。如果采用挨个编写的方法，不但辛苦，而且命名复杂，更重要的是日后如果进行修改，将极其麻烦。  
  
## 解决办法  
使用循环。助教给出的works数组其实就是解题的关键。由数组很容易想到遍历，也就是循环。
在循环体中编写代码，利用局部性的原理，则无需考虑命名规则。【在每次循环时变量都是“初次”定义】。稍微麻烦的在于图片插入，用到了嵌套循环。  
另外，利用数组可以使代码易于修改，日后如需修改，只需修改下标或数组内容即可，代码结构不需要大幅度改动。