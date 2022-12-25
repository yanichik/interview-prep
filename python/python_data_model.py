from collections import namedtuple

Card = namedtuple("Card", ["rank", "suit"])


class FrenchDeck:
    ranks = [str(rank) for rank in range(2, 11)] + list("JQKA")
    suits = ["spades", "diamonds", "hearts", "clubs"]

    def __init__(self):
        self._cards = [Card(rank, suit) for suit in self.suits for rank in self.ranks]

    def __getitem__(self, ind):
        return self._cards[ind]

    def __len__(self):
        return len(self._cards)


myDeck = FrenchDeck()
# for card in myDeck:
#     print(card)
print(Card("Q", "hearts") in myDeck)
