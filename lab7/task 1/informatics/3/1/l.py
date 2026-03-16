a = int(input())
b = 0
cnt = 0
while a >= 1:
    if int(a % 10) == 1:
        b += pow(2,cnt)
    cnt += 1
    a = a / 10
print(b)