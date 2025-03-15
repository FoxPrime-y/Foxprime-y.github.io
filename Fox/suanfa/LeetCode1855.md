# LeetCode1855
```
给你两个 非递增 的整数数组 nums1​​​​​​ 和 nums2​​​​​​ ，数组下标均 从 0 开始 计数。
下标对 (i, j) 中 0 <= i < nums1.length 且 0 <= j < nums2.length 。如果该下标对同时满足 i <= j 且 nums1[i] <= nums2[j] ，则称之为 有效 下标对，该下标对的 距离 为 j - i​​ 。​​
返回所有 有效 下标对 (i, j) 中的 最大距离 。如果不存在有效下标对，返回 0 。
一个数组 arr ，如果每个 1 <= i < arr.length 均有 arr[i-1] >= arr[i] 成立，那么该数组是一个 非递增 数组。
思路:
先对nums1进行排序，然后遍历nums2，找到第一个大于等于nums2[j]的元素nums1[i]，
然后更新maxDistance，并将i--，继续遍历nums2，直到遍历完nums2。
```

```
 public static int maxDistance(int[] nums1, int[] nums2) {
        int maxDistance = 0;
        // 初始化两个指针，分别指向nums1和nums2的末尾
        int i = nums1.length - 1;
        int j = nums2.length - 1;
        // 使用双指针法遍历两个数组
        while (i >= 0 && j >= 0) {
            if (nums1[i] <= nums2[j] && i <= j) {// 如果nums1[i] <= nums2[j]且i <= j，更新最大距离，并移动i指针
                maxDistance = Math.max(maxDistance, j - i);
                i--;
            } else { // 否则，移动j指针
                j--;
            }
        }
        return maxDistance;
    }
```