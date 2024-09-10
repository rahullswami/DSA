def subSet(arr,i,curr,powerSet):
    if(i == len(arr)):
        powerSet.append(curr.copy())# Corrected to copy the current subset
        return

     # Exclude the current element and move to the next
    subSet(arr,i+1,curr,powerSet)

    # Include the current element
    curr.append(arr[i])
    subSet(arr,i+1,curr,powerSet)

    # Backtrack to remove the current element
    curr.pop()

lst = [1,2,3]
powerSet = []
subSet(lst,0,[],powerSet)
print(powerSet)