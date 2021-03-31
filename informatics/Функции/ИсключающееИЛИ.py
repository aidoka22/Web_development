def xor(x, y):
    if (x==True and y==False) or  (x==False and y==True):
        return 1
    return 0
x=int(input())
y=int(input())
print(xor(x,y))