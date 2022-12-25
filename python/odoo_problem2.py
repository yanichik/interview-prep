# Problem 2:
# Given the deck ['A',1,2,3,4,5,6,7,8,9,10,'J','K','Q'], write a function that shuffles the deck using the randint function.
# The random module includes a basic function randint(a, b) that returns a uniformly random integer from a to b (including both endpoints).

# length of array
# randint to determine location of each element
# create swap function
# whatever randint returns, you swap elements with that index
# return shuffled


import random

input = ["A", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q"]


def swap(my_list, pos1, pos2):
    my_list[pos1], my_list[pos2] = my_list[pos2], my_list[pos1]
    return my_list


def shuffle_deck(deck):
    rand_len = len(deck) - 1
    for ind, item in enumerate(deck):
        rand_pos = random.randint(0, rand_len)
        swap(deck, ind, rand_pos)
    return deck


shuffle_deck(input)
