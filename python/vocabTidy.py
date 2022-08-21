myfile = open("vocabraw.txt", "r")
#wordlist=[]
linelist2=[]
worddict = {}
biglist=[]

for line in myfile:
    #testing1
    for char in line:
        #t, e, s, t, i, n, g, 1
        linelist2.append(char)
    del linelist2[0:5]
    del linelist2[-1:]
    
    linelist2 = ''.join(linelist2)
    linelist2 = linelist2.split('\t')
    
    worddict['word'] = linelist2[0]
    worddict['trans'] = linelist2[1]
    worddict['use'] = linelist2[2]

    biglist.append(worddict)
    linelist2=[]
    worddict={}

print(biglist)
myfile.close()
