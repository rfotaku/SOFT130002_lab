* Lab10 �ĵ�  
  
** exercise7 �еĴ������  
1��lab10-exercise7-pdo.php�еĴ���  
try{}catch()������쳣�����ص��עtry���н��еĲ�����  
��һ��������һ������ : $pdo = new PDO(DBCONNSTRING,DBUSER,DBPASS);  ���ǵ���ͳһ��php���ݶ���ӿڽ������ݿ���ʡ�  
�������ڶ��н����˹��ڴ��󱨸���������ã�����֮ǰ��try-catch�쳣����ʽ��ء�  
����������һ��������������θ���$sql�ĳ�ʼֵΪһ���ַ�����  
�����е�����$pdo�����query����������Ϊ$sql��������൱��֮ǰ��phpMyAdmin��SQL������������ַ�����ִ�У��˴�Ϊ������棬֮ǰΪ�û�������档  
֮���whileѭ�������Ǳ������ҽ������ÿһ�������Ӧ��ArtistID��LastName��  
ϸ�ڣ��ڱ�����ɺ�ִ��$pdo=null;�൱��java�еĹر��ļ�����Ԥ��������ã�������Ĵ���ϰ�ߡ�  
    
![ex7_1.png](./screenshots/ex7_1.png)  
  
2��lab10-exercise7-mysqli.php�еĴ���  
���ȴ�һ����MySQL�����������Ӳ���֤�Ƿ�򿪳ɹ���  
֮�����������ƣ����ַ�����ֵ��$sql������������Ӧ��query������  
�˴�ʹ�õ�mysqli_query($connect,$sql)��֮ǰ��ͬ�ĵ����ڣ�֮ǰ�����ݿ�����ΪPDO�����Ե��õ�ʱ����Ҫ����ָ�����ݿ�Ĳ��������˴��ĺ�����������ĳ���ض�����������Ҫ���ε�ʱ�������ӡ���while������ͬ���Ǳ������ҽ��������select���ӱ�ǩ<option>�С�  
���õĴ���ϰ�ߣ�     
// release the memory used by the result set  
     mysqli_free_result($result);   
�ͷ��ڴ汣֤ϵͳ�������С�  
 // close the database connection  
   mysqli_close($connection);  
��ʱ�ر����ӷ�ֹ������á�  
![ex7_2.png](./screenshots/ex7_2.png)  
  
** exercise8 �еĴ������  
![ex8.png](./screenshots/ex8.png)  
outputArtists()  
ͨ��PDOģʽ�õ����ݿ�Ķ��󣬽�LastName���óɳ����ӣ�href������ͨ��$_SERVER["SCRIPT_NAME"]ͳһ·������ͨ��id= $row['ArtistID']�����ָ���artist��ҳ�棨Ϊ֮��չʾpaintings���̵棩  
��չʾartists�б��ʱ�������$_GET['id'] == $row['ArtistID']�жϣ���Ϊ�����޸�class���ԣ��Ӷ�ʵ������ʽ�仯��  
outputPaintings()  
��������select * from Paintings where ArtistId=' . $_GET['id']  
ɸѡ����ҳ���ж�Ӧ��artist����Ʒ�����������֮ǰ������������id����Ҫ�ԡ�  
outputSinglePainting($row)  
�����������е���outputPaintings()������ĵĹ��ܲ��֡�������Ҫ�ǹ���html���ݣ���������ͼƬѰַ�в��ô����$row�������Ӷ��õ�$row['ImageFileName']��ֵ���ﵽ���ò�ͬ��ͼƬ��Ŀ�ġ�  
  
** exercise9 �ܽ�php��ִ��SQL���ķ���  
1��exec(string statement) ����Ϊsql��䣬����ֵΪִ��SQL���ʱ��Ӱ��������������� INSERT��DELETE��UPDATE����С�  
2��query(string statement) ����Ϊsql��䣬����ֵ��һ��PODStatement����  
  
query��exec������ִ�����е�sql��䣬ֻ�Ƿ���ֵ��ͬ���ѡ�query����ʵ��exec���еĹ��ܡ�  
  
3��Ԥ������䣺prepare()����execute()��䡣  
��exercise9����ʹ�õķ��������ȣ�ͨ��prepare()��������ѯ׼��������Ȼ��ͨ��execute()����ִ�в�ѯ�����һ�����ͨ��bindParam()�������󶨲�����execute()������  
Ԥ������ŵ㣺  
��ѯֻ��Ҫ����������׼����һ�Σ�����ʹ����ͬ��ͬ�Ĳ���ִ�ж�Ρ����Ҫ�ظ�ִ�������в�ͬ�����ĵ��ṹ��ͬ�Ĳ�ѯ��ͨ��ʹ��һ��Ԥ���������Ϳ��Ա����ظ����������롢�Ż��Ļ��ڡ�����˵��Ԥ�������ʹ�ø��ٵ���Դ��ִ���ٶ�Ҳ�͸��졣