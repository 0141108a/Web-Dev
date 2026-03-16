def lone_sum(a, b, c):
  if a == b == c:
    return 0
  if a == b:
    a = 0
    b = 0
  if a == c:
    a = 0
    c = 0
  if b == c:
    b = 0
    c = 0
  return a + b + c