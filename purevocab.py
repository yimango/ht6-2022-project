myfile = open("vocabraw.txt", "r")
#wordlist=[]
linelist2=[]
frenchwords = []

for line in myfile:
    #testing1
    for char in line:
        #t, e, s, t, i, n, g, 1
        linelist2.append(char)
    del linelist2[0:5]
    del linelist2[-1:]
    
    linelist2 = ''.join(linelist2)
    linelist2 = linelist2.split()
    frenchwords.append(linelist2[0])

    linelist2=[]

print(frenchwords)
myfile.close()