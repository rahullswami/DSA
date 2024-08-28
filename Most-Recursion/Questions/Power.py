def pow(n,x): # recursion function
    if(x == 0): # base case
        return 1
    if(x < 0): # nagetive situation
        return 1/pow(n,-x)
    return n*pow(n,x-1) # rucursion reletion

print(pow(2,5))