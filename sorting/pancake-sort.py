from typing import List

# From Outco soluation For a leedcode
# https://leetcode.com/problems/pancake-sorting/

# Time O(N^2) Space O(1)


def pancakeSort(self, arr: List[int]) -> List[int]:
    if not arr:
        return None

    # Time O((j-i)//2) = O(N) Space O(1)
    def reverse(i, j):
        while i < j:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
            j -= 1

    #  array[::-1]     Space O(N)

    size = len(arr)
    max_value = size
    k_result = []

    # O(N)
    for end in range(size-1, 0, -1):

        # find cur max value in the array
        max_index = arr.index(max_value)

        # reverse the element to the fornt position
        if max_index != end:
            if max_index != 0:
                reverse(0, max_index)
                k_result.append(max_index+1)

            # reverse the element to the correct position
            reverse(0, end)
            k_result.append(end+1)

        max_value -= 1

    return k_result
