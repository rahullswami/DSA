def fact(n): # recursion function
    if(n == 1): # base case
        return 1
    return n*fact(n-1) # call it's self
print(fact(5),'python')


# Itrative working
fac = 1
n = 5
for i in range(1,n+1):
    fac = fac*i
print(fac,'itrative')