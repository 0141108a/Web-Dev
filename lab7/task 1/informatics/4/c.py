a = int(input())
l = list(map(int,input().split()))
c = []
for i in l:
    if i > 0:
        c.append(i)
print(len(c))