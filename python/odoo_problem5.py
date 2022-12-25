# Problem 5:
# Write a regular expression to find any word between 4 and 9 letters long and containing either “odoo”, “code” or “work”?

# import random
import string
import rstr

key_words = ["odoo", "code", "work"]

reg_ex = "[a-z]{4,9}"
# reg_ex = "[A-Za-z]{4,9}"

# print(rstr.xeger(reg_ex))


# def random_string(length=4, chars=string.ascii_lowercase):
#     return "".join(random.choice(chars) for letter in range(length))


def find_random_word(keys):
    # word_length = random.randint(4, 9)
    while True:
        # word = random_string(word_length)
        word = rstr.xeger(reg_ex)
        for key in keys:
            if key in word:
                return word


print(find_random_word(key_words))
