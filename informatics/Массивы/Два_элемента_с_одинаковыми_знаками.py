n=int(input())
spisok = []
cnt=0
for i in range(0,n):
    l=int(input())
    spisok.append(l)
for i in range(0,n-1):
    if(spisok[i]>0 and spisok[i+1]>0) or (spisok[i]<0 and spisok[i+1]<0):
        cnt+=1
if(cnt>=1):
    print("Yes")
else:
    print("No")

