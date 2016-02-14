print("等级JS制作by:Magic雪飞");
//变量
var 经验=0;
var 积分=0
var 金钱=0;
var 等级=0;
var 进存档=0;
x=getPlayerX();
y=getPlayerY();
z=getPlayerZ();
称号="初入世界"
称号2="§a断剑魂残"
称号3="§b醉雨听月"
称号4="§c踏尽红尘"
称号5="§e夜涩无殇"
称号6="§7全面升仙"
称号7="§1蓦然魂伤"
称号8="§2渲染柔情"
称号9="§3虚妄浮生"
称号10="§4沦陷温柔"
称号11="§5不可一世"
称号12="§6空虚坟墓"
称号13="§7轻描淡写"
称号14="§8抹杀温存"
称号15="§9刺痛心扉"
称号16="§a若如初见"
称号17="§b花开半夏"
称号18="§a陌上花开"
称号19="§e素时锦年"
称号20="§f空城少年"
称号21="§c时光孤岛"
称号22="§1夕夏温存"
称号23="§2夜雨潇潇"
称号24="§3安然浅眠"
function destroyBlock(x,y,z,side)//破坏方块时触发
{
金钱+=1
经验+=600
}
//打死动物触发
function deathHook(m,v,x,y,z){
经验+=45
金钱+=45
clientMessage("§6<助手>打死动物，奖励经验45，金钱45。§a〖加成20%〗");

}
//每秒执行20次
function modTick(){
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号+"♞手持:"+Player.getCarriedItem()+"");
if(等级>4&&等级<9)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号2+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>8&&等级<17)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号3+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>16&&等级<21)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号4+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>20&&等级<25)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号5+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>24&&等级<=30)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号6+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>30&&等级<=40)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号7+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>40&&等级<=50)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号8+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>50&&等级<=60)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号9+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>60&&等级<=70)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号10+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>70&&等级<=80)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号11+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>80&&等级<=90)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号12+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>90&&等级<=100)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号13+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>100&&等级<=110)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号14+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>110&&等级<=120)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号15+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>120&&等级<=130)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号16+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>130&&等级<=140)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号17+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>140&&等级<=150)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号18+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>150&&等级<=160)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号19+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>160&&等级<=170)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号20+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>170&&等级<=180)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号21+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>170&&等级<=190)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号22+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>190&&等级<=200)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号23+"♞手持:"+Player.getCarriedItem()+"");
}
if(等级>200&&等级<=1000000000000000000)
{
ModPE.showTipMessage("§b经验值:"+经验+"§e♚金钱:"+金钱+"↹§a当前等级:"+等级+"\n§6★称号:"+称号24+"♞手持:"+Player.getCarriedItem()+"");
}
if(经验>699)
{
等级+=1
经验-=699
}

}
//商店部分开始	
function procCmd(S)
{
if(S=="关于")
{
clientMessage("<助手>§a此JS由雪飞制作\n<助手>雪飞QQ§c2290657746\n<助手>§7本JS拥有配套地图,请联系雪飞或者查看整合包")
}
if(S=="商店内容")
{
clientMessage("------商店内容1------\n钻石:500金币/2个\n铁剑:200金币/把\n药水效果:详情/商店\n木头:100金币/组\n鱼:25金币\n皮革:700金币/组\n治疗术:300金币\n购买钻石请输入/购买钻石;购买钻石/购买治疗术\n------还有更多敬请期待------")
}
if(S=="帮助")
{
clientMessage("<助手>§b此JS拥有等级和金钱系统,配套星炎地图\n<助手>§a请使用地图游戏或者生存游戏\n<助手>§e玩法:每700经验升1一级,称号会随着等级改变\n<助手>§d请公平游戏,不要开启任何外挂\n<助手>输入/关于,查看版权/商店查看商店出售");
}
if(S=="购买木头")
if(金钱>=100)
{
addItemInventory(5,64,0);
金钱-=100
print("购买成功")
}else{clientMessage("<助手>§c您的金钱不足")
}

if(S=="购买鱼")
if(金钱>=25)
{
addItemInventory(349,1,0);
金钱-=25
print("购买成功")
}else{clientMessage("<助手>§c您的金钱不足")
}

if(S=="购买皮革")
if(金钱>=700)
{
addItemInventory(334,64,0);
金钱-=700
print("购买成功")
}
else{clientMessage("<助手>§c您的金钱不足")
}

if(S=="购买钻石")
if(金钱>=500)
{
addItemInventory(264,2,0);
金钱-=500
print("购买成功")
}
else{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="购买铁剑")
if(金钱>=200)
{
addItemInventory(267,1,0);
金钱-=200
print("购买成功")
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="购买爆炸书")
if(金钱>=500)
{
addltemlnventory(340,1,0)
金钱-=500
print("购买成功")
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="治疗术")
if(金钱>=300)
{
Player.setHealth(30);
clientMessage("§b已过度治疗消耗金钱300");
金钱-=300
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="购买速度")
if(金钱>=50)
{
Entity.addEffect(Player.getEntity(),1,2*600,2,false,true);
金钱-=50
print("购买成功")
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="购买抗性")
if(金钱>=50)
{
Entity.addEffect(Player.getEntity(),11,2*600,2,false,true);
金钱-=50
print("购买成功")
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="购买跳跃")
if(金钱>=50)
{
Entity.addEffect(Player.getEntity(),8,2*600,1,false,true);
金钱-=50
print("购买成功")
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="购买生命恢复")
if(金钱>=50)
{
Entity.addEffect(Player.getEntity(),10,2*600,2,false,true);
金钱-=50
print("购买成功")
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="创造")
if(金钱>=600)
{
Level.setGameMode(1);
金钱-=600
 
clientMessage("购买成功输入/生存切换模式")
}
else
{
clientMessage("<助手>§c您的金钱不足")
}
if(S=="生存")
{
Level.setGameMode(0);
}
if(S=="保存数据")
{
ModPE.saveData(1,等级);
ModPE.saveData(2,金钱);
ModPE.saveData(3,进存档);
ModPE.saveData(4,称号);
ModPE.saveData(5,称号2);
ModPE.saveData(6,称号3);
ModPE.saveData(7,称号4);
ModPE.saveData(8,称号5);
ModPE.saveData(9,称号6);
print("保存成功")
}
if(S=="商店")
{
clientMessage("<助手>§d商店目前可以购买的东西有:钻石,铁剑,爆炸书,治疗,速度,抗性,跳跃,生命恢复,创造\n<助手>§9请输入购买<物品名>进行购买\n<助手>§b比如购买钻石输入/购买钻石;购买治疗术请输入/购买治疗术");
}
if(S=="变身")
if(等级>24&&等级<100000)
{
Entity.addEffect(Player.getEntity(),3,2*6000000,3,false,true)
Entity.addEffect(Player.getEntity(),5,2*6000000,2,false,true)
clientMessage("<助手>您已变身拥有效果\n§a<助手>如要消除效果请使用指令/移除效果");
}
else
{
clientMessage("<助手>您没有足够的等级");
}
if(S=="移除效果")
{
Entity.removeEffect(Player.getEntity(),5);
Entity.removeEffect(Player.getEntity(),3);
clientMessage("<助手>§c移除效果成功！");
}}
//进存档
function newLevel(){
if(进存档==0)
{
金钱+=100
积分++
print("首次进入获得100金币")
clientMessage("§a<助手>§a欢迎使用等级JS，输入/帮助查看用法。制作:Magic雪飞");
clientMessage("<助手>如果要保存游戏可以输入/保存数据");
clientMessage("§e<助手>满级25级输入/变身拥有特殊效果哦");
clientMessage("§7[等级JS]§c多玩将不会保存退出时的数据！");
clientMessage("§7[等级JS]§c您当然拥有积分:"+积分+"")
clientMessage("§7[等级JS]§c输入/商店内容->查看可以购买的东西")
}

}

//退出存档
function leaveGame()
{
ModPE.saveData(1,等级);
ModPE.saveData(2,金钱);
ModPE.saveData(3,进存档);
ModPE.saveData(4,称号);
ModPE.saveData(5,称号2);
ModPE.saveData(6,称号3);
ModPE.saveData(7,称号4);
ModPE.saveData(8,称号5);
ModPE.saveData(9,称号6);
print("正在保存数据！");
print("请不要禁用或删除此JS,否则可能会数据保存不了");
print("JS保存完毕,欢迎下次使用！");
}
        //中毒 ID 【19】
　　//速度 ID 【1】
　　//虚弱 ID 【18】
　　//饥饿 ID 【17】
　　//失明 ID 【15】
　　//夜视 ID【16】
　　//隐身 ID 【14】
　　//水下呼吸 ID 【13】
　　//缓慢 ID 【2】
　　//急迫 ID 【3】
　　//挖掘疲劳 ID【4】
　　//力量 ID 【5】
　　//瞬间治疗 ID 【6】
　　//瞬间伤害 ID 【7】
　　//跳跃提升 ID 【8】
　　//反胃 ID【9】
　　//生命恢复 ID 【10】
　　//抗性提升 ID 【11】
　　//防火 ID 【12】
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
//位置①
var win=new android.widget.PopupWindow();
//位置②
var layout=new android.widget.LinearLayout(ctx);
//位置③
var button=new android.widget.Button(ctx);
button.setText("时");//时间函数
button.setOnClickListener(new android.view.View.OnClickListener(){onClick:function(v){
Level.setTime(0);
}});
//位置④
layout.addView(button);
//位置⑤
win.setContentView(layout);
win.setWidth(100);
win.setHeight(100);
win.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0)))
win.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,0);
}}));
var of=0;
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get() 
var ad=android.app.AlertDialog.Builder
ctx.runOnUiThread(new java.lang.Runnable({ 
run: function(){ 
try{
var d=new ad(ctx)
d.setNegativeButton(">>>确定<<<",new android.content.DialogInterface.OnClickListener(){
onClick: function(dia,w){
}})
d.setTitle("等级配套③基本内容")
d.setMessage("更新了商店全部东西\n帮助菜单更加清晰易懂\n消除弹框提示,删除广告信息\n删除点击钻块,金块,铁块升级\n改造配套地图到网盘下载\n通知栏提示反馈网站\n加入更多称号和积分(无卵用)\nJS已授权多玩我的世界盒子禁止其他APP转载")
d.show()
}catch(e){print(e)}
}}))
//通知栏
function notify(main,title,content,http)
	{
		var hellomc=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		var intent=new android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(http))
		var pi=android.app.PendingIntent.getActivity(hellomc,0,intent,0)
		hellomc.runOnUiThread(new java.lang.Runnable()
			{
				run: function()
					{
						var nm=hellomc.getSystemService(hellomc.NOTIFICATION_SERVICE)
						var notify=new android.app.Notification(android.R.drawable.btn_dialog,main,0);
						notify.defaults=android.app.Notification.DEFAULT_SOUND
						notify.setLatestEventInfo(hellomc,title,content,pi);
						nm.notify(0,notify);
					}
			})
	}
//下面是使用方法示例，请打开游戏后运行
notify("1","点击进入雪飞JS反馈站","只为解答您的问题！","http://viewer.maka.im/k/74N0T5T5 ");






/*完成*/
