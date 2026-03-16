def swap_case(s):
    t = ""
    for i in range(0,len(s)):
        if s[i] >= 'a' and s[i] <= 'z':
            t += s[i].upper()
        else:
            t += s[i].lower()
    return t
s = input()
result = swap_case(s)
print(result)