def func(a,b):
    return int(a ^ b)
l = list(map(int,input().split()))
print(func(l[0],l[1]))