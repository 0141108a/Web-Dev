def combo_string(a, b):
  return min(a,b,key= len) + max(a,b,key=len) + min(a,b,key=len)