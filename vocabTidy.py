myfile = open("vocabraw.txt", "r")
#wordlist=[]
linelist2=[]
worddict = {}

for line in myfile:
    #testing1
    for char in line:
        #t, e, s, t, i, n, g, 1
        linelist2.append(char)
    del linelist2[0:5]
    del linelist2[-1:]
    
    linelist2 = ''.join(linelist2)
    linelist2 = linelist2.split('\t')
    #wordlist.append(linelist2)
    

    worddict['word'] = linelist2[0]
    worddict['trans'] = linelist2[1]
    worddict['use'] = linelist2[2]

    print(worddict)

    linelist2=[]

myfile.close()
