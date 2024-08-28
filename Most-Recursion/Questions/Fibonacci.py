def fib(n): # recursion function
    if(n == 0 or n == 1): # base case
        return n
    return fib(n-1)+fib(n-2) # recursion reletion

for i in range(1,11):
    print(fib(i))

'''
Output= v
        v

        1
        1
        2
        3
        5
        8
        13
        21
        34
        55
'''