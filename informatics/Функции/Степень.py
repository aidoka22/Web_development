def power(a,b):
    s=1
    for i in range(1,b):
        s=s*a
    return s
a=int(input())
b=int(input())
print(power(a,b))