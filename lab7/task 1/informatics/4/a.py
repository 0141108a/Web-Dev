a = int(input())
l = list(map(int,input().split()))
c = []
for i in range(0,a):
    if i % 2 == 0:
        c.append(l[i])
for i in c:
    print(i, end=" ")