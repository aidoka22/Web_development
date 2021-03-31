n=int(input())
a=0
while(n!=1):
    if n%2==0:
        n=n//2
        a+=1
    else:
        n=n-1
s=1
for i in range(0,a):
    print(s)
    s=s*2