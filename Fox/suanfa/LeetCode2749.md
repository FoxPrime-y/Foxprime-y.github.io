# LeetCode2749
```
给你两个整数：num1 和 num2 。
在一步操作中，你需要从范围 [0, 60] 中选出一个整数 i ，并从 num1 减去 2i + num2 。
请你计算，要想使 num1 等于 0 需要执行的最少操作数，并以整数形式返回。
如果无法使 num1 等于 0 ，返回 -1 。
```

```
  public int makeTheIntegerZero(int num1, int num2) {
        int ci=0;
        for(int i=0;i<=60;i++){
           long target = num1-1L*i*num2;
           if (target<0){
               break;
           }
            int count = Long.bitCount(target);
           if (count<=i&&i<=target){
               return i;
           }
       }
        return -1;
    }
```