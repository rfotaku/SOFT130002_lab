* Lab11�ĵ�  
  
**  The function of cookie and session    
cookie�Ĵ�����setcookie(name, value, expireTime)   
��֤cookie�Ƿ��Ѿ����ã�isset($_COOKIE["name"])  
ע��cookie�� setcookie("name", "", -1);  ͨ���޸Ĺ���ʱ��ﵽĿ�ġ�  
  
session������session_start();  
����session������$_SESSION['name']=$_POST['name'];  
����session�Ự�� unset($_SESSION['name']);  
  
** cookie��session����ȱ��Ƚ�  
session �����ڷ��������ͻ��˲�֪�����е���Ϣ��cookie �����ڿͻ��ˣ��������ܹ�֪�����е���Ϣ��  
�����COOKIE,SESSION����ȫ����ΪCOOKIE�����ڿͻ��ˣ��û����Է�������ڱ��ص�COOKIE������COOKIE��ƭ��������ȡ���˵�COOKIE��ֱ��ʹ�ã��ﵽ���ɻ���ء���Ŀ�ġ����⣬COOKIE�ᱻ������ÿ��HTTP�����У�����������������������SESSION����һ��ʱ���ڱ����ڷ������ϣ����Ⲣ��һ���Ǻ��£����������ܴ�ʱ��ʹ��SESSION�ͻ�������������޴��ѹ��������������