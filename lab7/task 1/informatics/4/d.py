a = int(input())
l = list(map(int,input().split()))
c = []
for i in range(0,a - 1):
    if l[i] < l[i + 1]:
        c.append(l[i + 1])
print(len(c))