def xor(x, y,z):
    if (x==True and y==True) or  (z==True and y==True) or (x==True and z==True):
        return 1
    return 0
x=int(input())
y=int(input())
z=int(input())
print(xor(x,y,z))