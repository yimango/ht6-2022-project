myfile = open("vocab.txt", "r")
linelist=[]
linelist2=[]

for line in myfile:
    #testing1
    for char in line:
        #t, e, s, t, i, n, g, 1
        linelist2.append(char)
    del linelist2[0:5]
    linelist2 = ''.join(linelist2)
    linelist.append(linelist2)
    linelist2=[]
print(linelist)

myfile.close()