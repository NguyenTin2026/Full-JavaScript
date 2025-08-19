# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

a ='me'
b ='myself'
c = a + b
d = a +" " + b
e = "lovemyself"
silly = a * 3

s = "abc" 
print(len(s))


s = "abc"
s[0]
s[1]
s[2]

s[-1]
s[-2]
s[-3]


s = "abcdefgh"

# ## PRINTING ##
a ="the"
b = 3
c = "musketeers"

print (a + str(b) + c)

question = input('choose a verb: run run run run run')
print ('I can',question, 'better than you')
print (question*5)
print ((question+' ')*10)


## FINDING ROOTS OF A POLYNOMIAL##
x = int(input('what x to find the cube of root'))
g = int(input('what guess to start with'))
print ('current estimate cubed = ', g**3)
next_g = g - ((g**3 -x) / (3*g**2))
print (' Next guess to try = ', next_g)

# ## COMPARISON EXAMPLE ##
pset_time = 15
sleep_time = 8
print(sleep_time > pset_time)
derive = True
drink = False
both = drink and derive
print (both) 

# ## COMPARISON EXAMPLE 2 ##
pset_timne = 15
sleep_time = 8
print (sleep_time > pset_time)
derive = True
drink = False
both = drink or derive
print (both)

# ## MY EXAMPLE ABOUT GUESS SECRET HAVE == ##
secret = 5
guess = int(input('please guess a number:'))
print (secret == guess)


# ## MY EXAMPLE ABOUT GUESS SECRET HAVE != ##
secret = 10
guess = int(input('please guess a number exxactly:'))
print (guess != secret)


# ## MY EXAMPLE ABOUT GUESS SECRET HAVE == WAY 2 ##
secret = 5
guess = int(input('please guess a number:'))
equal = (secret == guess)
print (equal)


# ## MY EXAMPLE ABOUT GUESS SECRET HAVE != WAY 2 ##
secret = 10
guess = int(input('please guess a number exxactly:'))
equal = (guess != secret)
print (equal)


# ## ANOTHER EXAMPLE ABOUT GUESS AND SECRET ##
secret = 5
guess = int(input('guess a num:'))
if guess > secret:
    print ("too high")
elif guess == secret:
    print ('equal')
else:
    print('too low')
    
    
# ## BRANCHING EXAMPLE ##
pset_time = 22
sleep_time = 8
if (pset_time + sleep_time) > 24:
    print ('impossible!')
elif (pset_time + sleep_time) >=24:
    print ('full schedule!')
else:
    leftover = abs(24-pset_time - sleep_time)
    print (leftover,'h of free time!')
    print ('end of day')
    
# ## BRANCHING EXAMPLE 2 ##
x = float (input('Enter a number for x'))
y = float (input('Enter the number for y')) 
if x == y:
    print ('x and y are equal')    
elif x < y:
    print ('x is smaller')
elif x > y:
    print ('x is larger')    
else:
    print ('y is smaller')
    print ('y is larger')
    print ('thanks!')
    
    
# ## while LOOPS ##
  
    
    