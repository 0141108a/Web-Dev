def cigar_party(cigars, is_weekend):
  if (is_weekend and cigars >= 40) or (cigars >= 40 and cigars <= 60):
    return True
  else:
    return False