def recursion(count): # <== recursion function
    print('Python')
    if count == 5: # base case
        return
    recursion(count+1) # call it's self
recursion(1)