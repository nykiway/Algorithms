def get_grade(s1, s2, s3):
    mean = (s1 + s2 + s3) / 3;
    if (mean >= 90):
        return 'A'
    elif (mean >= 80 and mean < 90):
        return 'B'
    elif (mean >= 70 and mean < 80):
        return 'C'
    elif (mean >= 60 and mean < 70):
        return 'D'
    else:
        return 'F'


get_grade(95, 90, 93)
get_grade(70, 70, 100)
