# Problem 3:
# Given a string s, return the sum of the vowels in the string if each vowel's weight increases by 1 according to the vowels order.


# Example:
# Input=  s: "Welcome to Indonesia", Vowels weight: a = 1, e = 2, i = 3, o = 4, u = 5
# Output = 22 (1 a's = 1*1 = 1 +  3 e's = 3*2 = 6 +  1 i's = 1*3 = 3 + 3 o's = 3*4 = 12)

vowels = {"a": 1, "e": 2, "i": 3, "o": 4, "u": 5}


def sum_of_vowels_by_weight(input_string, vowel_weights):
    total = 0
    for letter in input_string:
        if letter in vowel_weights:
            total += vowel_weights[letter]
    return total


print(sum_of_vowels_by_weight("Welcome to Indonesia", vowels))
