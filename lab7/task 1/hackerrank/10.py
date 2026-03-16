N = int(input())
l = []
for i in range(0,N):
    a = input().split()
    if a[0] == "insert":
        b = int(a[1])
        c = int(a[2])
        l.insert(b,c)
    if a[0] == "print":
        print(l)
    if a[0] == "remove":
        b = int(a[1])
        l.remove(b)
    if a[0] == "append":
        b = int(a[1])
        l.append(b)
    if a[0] == "sort":
        l.sort()
    if a[0] == "pop":
        if len(l) != 0:
            l.pop()
    if a[0] == "reverse":
        l.reverse()