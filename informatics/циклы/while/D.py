n=int(input())
a=0
while(n!=1):
    if n%2==0:
        n=n//2
    else:
        n=n-1
        a+=1
if(n==1 or a==0):
    print("Yes")
else:
    print("No")