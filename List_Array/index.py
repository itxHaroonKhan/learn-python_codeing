# What are Lists in Python? List Methods in Python

# Lists are ordered collection of items.
# They are mutable.
# They are indexed.
# They are iterable.
# They are dynamic.






# Creating a list
fruits = ["apple", "banana", "cherry", "mango"]

# Accessing elements
print(fruits[0])   # Output: apple
print(fruits[-1])  # Output: mango

# Modifying a list
fruits[1] = "orange"
print(fruits)  # Output: ['apple', 'orange', 'cherry', 'mango']







 numbers = [1, 2, 3]
numbers.append(4)
print(numbers)  # Output: [1, 2, 3, 4]





list1 = [1, 2, 3]
list2 = [4, 5, 6]
list1.extend(list2)
print(list1)  # Output: [1, 2, 3, 4, 5, 6]




numbers = [1, 2, 3]
numbers.insert(1, 100)
print(numbers)  # Output: [1, 100, 2, 3]




fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")
print(fruits)  # Output: ['apple', 'cherry']



numbers = [10, 20, 30, 40]
numbers.pop(2)
print(numbers)  # Output: [10, 20, 40]

numbers.pop()  # Removes last item
print(numbers)  # Output: [10, 20]






fruits = ["apple", "banana", "cherry"]
print(fruits.index("banana"))  # Output: 1



numbers = [1, 2, 2, 3, 4, 2]
print(numbers.count(2))  # Output: 3




numbers = [4, 2, 9, 1]
numbers.sort()
print(numbers)  # Output: [1, 2, 4, 9]

# Sorting in descending order
numbers.sort(reverse=True)
print(numbers)  # Output: [9, 4, 2, 1]






numbers = [1, 2, 3, 4]
numbers.reverse()
print(numbers)  # Output: [4, 3, 2, 1]




fruits = ["apple", "banana", "cherry"]
fruits.clear()
print(fruits)  # Output: []




