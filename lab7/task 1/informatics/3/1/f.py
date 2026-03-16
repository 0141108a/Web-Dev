a = input()
b = a[::-1]
ok = False
for i in b:
    if i == '0' and ok == False:   
        continue
    else:
        ok = True
        print(i,end='')