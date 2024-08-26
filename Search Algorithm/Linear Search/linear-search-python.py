lst = [0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 9, 21, 52]
found = False
key = 0
n = len(lst)
for i in range(n):
    if lst[i] == key:
        found = True
        print(key,'find key index at',i)

if found == False:
    print('not found!!')