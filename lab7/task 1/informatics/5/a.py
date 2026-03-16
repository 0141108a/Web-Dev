def func(a,b,c,d):
    return min(a,b,c,d)
l = list(map(int,input().split()))
print(func(l[0],l[1],l[2],l[3]))