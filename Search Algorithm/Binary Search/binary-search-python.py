lst = [0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 9, 21, 52]
key = 0
found = False
end = len(lst)-1
start = 0
while start<=end:
    mid = (start+end)//2
    if lst[mid] == key:
        found = True
        print(key,'key find it index at',mid)
        break
    elif lst[mid] < key:
        start = mid + 1
    else:
        end = mid -1

if found == False:
    print('not found!!')