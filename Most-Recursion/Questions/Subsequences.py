def sub(s,i,curr):
    if(i == len(s)):
        print(f'python method print {curr}')
        return
    sub(s,i+1,curr+s[i])
    sub(s,i+1,curr)
indx = 0
s = 'abc'
curr = ''
sub(s,indx,curr)