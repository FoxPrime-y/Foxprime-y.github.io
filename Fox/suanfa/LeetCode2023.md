# LeetCode2023
```
给你一个 数字 字符串数组 nums 和一个 数字 字符串 target ，请你返回 nums[i] + nums[j] （两个字符串连接）结果等于 target 的下标 (i, j) （需满足 i != j）的数目。
思路:
首先，使用一个 HashMap 来记录数组 nums 中每个字符串出现的次数。这样可以在后续查找时快速判断某个字符串是否存在以及存在多少次。
然后，遍历数组 nums 中的每一个字符串 num，检查 num 是否是目标字符串 target 的前缀。
如果 num 是 target 的前缀，则计算 target 剩余的后缀部分 temp，即 target 去掉 num 后剩下的部分。
检查后缀部分 temp 是否存在于 HashMap 中。如果存在，说明找到了一个可能的配对。
如果找到了配对，增加计数。需要注意的是，如果 num 和 temp 是同一个字符串（即 target 可以由两个相同的字符串组成），则需要减去一次自身配对情况，因为题目要求 i != j。
最后，返回满足条件的配对数目 count。
以下代码时间复杂度主要取决于数组 nums 的长度 n 以及目标字符串 target 的长度 m，总体复杂度为 O(n * m)，因为对于每个字符串 num，可能需要检查 target 的每个子串。空间复杂度为 O(n)，因为我们使用了一个 HashMap 来存储数组中每个字符串的出现次数。
```

```
 public int numOfPairs(String[] nums, String target) {
        Map<String, Integer> map = new HashMap<String, Integer>();
        for (String num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);//记录每个数字出现的次数
        }
        int count = 0;
        for (String num : nums) {
            if (target.startsWith(num)) {// 检查当前字符串是否是目标字符串的前缀
                int ide = target.length() - num.length();
                String temp = target.substring(num.length());// 获取剩余部分
                if (map.containsKey(temp)) { // 检查剩余部分是否在哈希表中
                    count += map.get(temp);//增加计数
                    if (num.equals(temp)) {// 如果当前字符串和剩余部分相同，则减少自身配对情况
                        count--;
                    }
                }
            }
        }
        return count;
    }
```