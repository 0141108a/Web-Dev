a = int(input())
l = list(map(int,input().split()))
c = []
for i in range(1,a - 1):
    if l[i] > l[i - 1] and l[i] > l[i + 1]:
        c.append(l[i])
print(len(c))