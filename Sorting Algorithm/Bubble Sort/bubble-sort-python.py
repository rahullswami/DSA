# create a list!!
lst = [23,7,89,78,5,4,1,0,5,44,3,78,8,54,3,9,3,11,12,89]
# list length
n = len(lst)
# create loop
for i in range(n):
    # create inner loop
    for j in range(n-i-1):
        # apply conditions
        if lst[j] > lst[j+1]:
            # value swap this syntext look like tuple
            lst[j], lst[j+1] = lst[j+1], lst[j]
# print terminal
print(lst)