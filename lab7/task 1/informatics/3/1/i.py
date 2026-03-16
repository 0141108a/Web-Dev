import math
n = int(input())
if n == 1:
    print(1)
    exit()
i = 2
if n**0.5 % 1 == 0:
    i += 1
    q = int(n**0.5) - 1
else:
    q = int(n**0.5)
for a in range(2, q + 1):
    if n % a == 0:
        i += 2
print(i)