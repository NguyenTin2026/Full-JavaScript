# ## Decomposition, Abstraction ##
def is_even(i):
    '''Assumes: i, a positive int
    Return True if i is even, otherwise False'''
    if i%2 == 0:
        return True
    else:
        return False
    
    
# ## How to Write a Function ##
def is_even ( i ):
   ''' 
   Input: i, a positive int
   Returns True if i is even, otherwise False
   '''
   if i%2 == 0:
            return True
   else:
           return False

        

# ## Another example of writing a function ##
def div_by(n, d):
    ''' n and d are ints > 0
    Return True if d divides n evenly and False
    '''
    # Your code here #
    if n%d == 0:
        return (True)
    else: 
        return (False)
    # return d%n == 0
    
# ## For example ##
    print (div_by(10, 3))   # print False 
    print (div_by(195, 13))   # return True
    


# ## ZOOMING OUT (NO FUNCTIONS) ##
def is_even (i):
    print ('inside is_even')
    return i%2 == 0



# ## INSERTING FUNCTIONS IN CODE ##
print ('Number between 1 and 10: even or odd')
for i in range (1,10):
    if is_even (i):
        print (i, 'even')
    else:
        print (i, 'odd')


## ANOTHER EXAMPLE: Suppose we want to add all the odd integerr ## 
## between(and including) a and b. What is the input? ##
## What is the output? ##




# ## for LOOP ##
def sum_odd(a, b):
   sum_of_odds = 0
for i in range(a, b):
   sum_of_odds += i
return sum_of_odds
    print (sum_odds(2,4))
 
   
    
# ## while LOOP ##
def sum_odd(a, b):
    sum_of_odds = 0
    i = a
    while i <= b:
        sum_of_odds += i
        i += 1
        return sum_of_odds
    print (sum_odd(2,4))

    
    
    



