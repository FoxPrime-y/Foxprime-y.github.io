# LeetCode1980
```
给你一个字符串数组 nums ，该数组由 n 个 互不相同 的二进制字符串组成，且每个字符串长度都是 n 。请你找出并返回一个长度为 n 且 没有出现 在 nums 中的二进制字符串。如果存在多种答案，只需返回 任意一个 即可。
```

```
 public String findDifferentBinaryString(String[] nums) {
        StringBuilder SrBu = new StringBuilder();
        for (int i = 0; i < nums.length; i++) {
            if (nums[i].charAt(i) == '0') { // 如果当前位是 '0'，则添加 '1'；否则添加 '0'
                SrBu.append('1');
            } else {
                SrBu.append('0');
            }
        }
        return SrBu.toString();
    }
```