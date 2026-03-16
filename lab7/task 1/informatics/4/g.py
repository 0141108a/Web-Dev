a = int(input())
l = list(map(int,input().split()))
l.reverse()
for i in range(0,a):
    print(l[i], end=" ")