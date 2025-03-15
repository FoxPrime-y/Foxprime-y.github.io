# 第15届蓝桥杯A题

```
 public static void main(String[] args) {
        long a=7385137888721L;
        long b=10470245;

        long lift=1;
        long right=(long)Math.sqrt(a*4+b);
        while(lift<right){
            long mid =(lift+right+1)/2;
            long x=mid*mid;
            long y=Math.min(b,x/4);
            long r=x-a*4;
            if (r<b){
                lift=mid;
            }else if (r==b){
                System.out.println(lift);
                break;
            }else {
                lift=mid-1;
            }
        }
        System.out.println(lift);
    }
```