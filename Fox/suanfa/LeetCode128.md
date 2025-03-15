# LeetCode128
```
这道题的核心思路是利用哈希集合（HashSet）来实现O(n)的时间复杂度算法，以找出给定数组中数字连续的最长序列的长度。
首先检查输入的数组是否为空或长度为0，如果是，则直接返回0，因为没有数字就没有连续序列。
将所有数组中的数字加入一个HashSet中。这样做的目的是为了能够在O(1)的时间复杂度内检查某个数字是否存在。
遍历数组中的每一个数字num，检查num-1是否不在集合中。如果num-1不存在，这说明num可能是某个连续序列的起点。这是因为连续序列中的每个数字k都满足k-1和k+1至少有一个在序列中，而num-1不在集合中，表明num是一个起点。
对于每一个可能的起点num，从num开始，依次检查num+1、num+2...是否存在于集合中。如果存在，继续检查，直到找不到为止。在这个过程中，计算出以num为起点的连续序列的长度。
在计算出每个可能的连续序列的长度后，更新最长的连续序列长度。
返回结果：最后返回最长连续序列的长度。
```

```
  public int longestConsecutive(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
//        if (nums.length == 1) {
//            return 1;
//        }
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        int dks=0;
        for (int num : nums) {
            //检查当前数字是否连续序列的起点
            if (!set.contains(num-1)) {
                int k=num;
                int current=1;
                //找到以当前数字为起点的最长连续序列
                while (set.contains(k+1)){
                    k++;
                    current++;
                }
                //更新最长连续序列的长度
                dks=Math.max(dks,current);
            }
        }
        return  dks;
    }
```