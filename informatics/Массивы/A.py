n=int(input())
spisok = []
for i in range(0,n):
    l=input()
    spisok.append(l)
spisok2 = spisok[::2] 
print(*spisok2) 

