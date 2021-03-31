n=int(input())
spisok = []
for i in range(0,n):
    l=int(input())
    spisok.append(l)
count=0
for i in spisok:
    if(i>0):
        count+=1
print(count)

