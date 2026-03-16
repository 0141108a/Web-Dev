def max_end3(nums):
  max1 = max(nums[0], nums[len(nums) - 1])
  for i in range(len(nums)):
    nums[i] = max1
  return nums