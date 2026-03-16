def func(a,b):
    return float(pow(a,b))
l = list(map(float,input().split()))
print(func(l[0],l[1]))