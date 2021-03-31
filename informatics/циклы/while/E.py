n=int(input())
a=0
while(n!=0):
    if n%2==0:
        n=n//2
        a+=1
    else:
        n=n+1
print(a)