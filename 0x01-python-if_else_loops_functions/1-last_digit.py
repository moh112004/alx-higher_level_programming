#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
if number >= 0:
    last_number = number % 10
else:
    last_number = int("-"+str(number)[-1])
text = "Last digit of " + str(number) + " is " + str(last_number)
if last_number > 5:
    text += " and is greater than 5"
elif last_number == 0:
    text += " and is 0"
else:
    text += " and is less than 6 and not 0"
print(text)
