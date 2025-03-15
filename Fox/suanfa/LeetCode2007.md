# LeetCode2007
```
一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。
给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。
```

```
  public int[] findOriginalArray(int[] changed) {
        int n = changed.length;
        if (n % 2 != 0) {
            return new int[0]; // 如果数组长度为奇数，直接返回空数组
        }

        Arrays.sort(changed); // 对数组进行排序

        Map<Integer, Integer> countMap = new HashMap<>();
        for (int num : changed) {
            countMap.put(num, countMap.getOrDefault(num, 0) + 1);
        }

        List<Integer> originalList = new ArrayList<>();
        for (int num : changed) {
            if (countMap.get(num) == 0) {
                continue; // 如果该数字的出现次数为0，跳过该数字
            }

            originalList.add(num); // 将该数字加入原数组
            countMap.put(num, countMap.get(num) - 1); // 将该数字的出现次数减1

            int doubleNum = num * 2;
            if (countMap.getOrDefault(doubleNum, 0) > 0) {
                countMap.put(doubleNum, countMap.get(doubleNum) - 1); // 将该数字的两倍数的出现次数减1
            } else {
                return new int[0]; // 如果无法找到匹配的两倍数，返回空数组
            }
        }

        // 将原数组列表转换为数组并返回
        int[] originalArray = new int[n / 2];
        for (int i = 0; i < n / 2; i++) {
            originalArray[i] = originalList.get(i);
        }
        return originalArray;
    }
```