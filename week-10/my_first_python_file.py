print "hi"

# Arrays
x = [1, 2, 3, 4]
print x

for number in x:
  print number

#Function
'''In JS: function someFunction(parameter1, parameter2) {}
'''

def someFunction(param1, param2):
  print param1
  print param2

someFunction("param1", "param2")

myDictionary = {
  'apple': 'definition for apple',
  'banana': 'def for banana'
}

#JS Equivalent: myDictionary = {apple: 'def for apple'}

print myDictionary['apple']

for fruit in myDictionary:
  print fruit
  print myDictionary[fruit]