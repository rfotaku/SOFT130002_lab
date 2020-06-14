* Lab11文档  
  
**  The function of cookie and session    
cookie的创建：setcookie(name, value, expireTime)   
验证cookie是否已经设置：isset($_COOKIE["name"])  
注销cookie： setcookie("name", "", -1);  通过修改过期时间达到目的。  
  
session启动：session_start();  
创建session变量：$_SESSION['name']=$_POST['name'];  
结束session会话： unset($_SESSION['name']);  
  
** cookie和session的优缺点比较  
session 保存在服务器，客户端不知道其中的信息；cookie 保存在客户端，服务器能够知道其中的信息。  
相比于COOKIE,SESSION更安全，因为COOKIE储存在客户端，用户可以分析存放在本地的COOKIE并进行COOKIE欺骗，甚至截取他人的COOKIE后直接使用，达到“蒙混过关”的目的。另外，COOKIE会被附加在每个HTTP请求中，所以无形中增加了流量；SESSION会在一定时间内保存在服务器上，但这并不一定是好事，当访问量很大时，使用SESSION就会给服务器带来巨大的压力，甚至崩溃。