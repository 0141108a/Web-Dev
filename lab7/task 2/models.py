from abc import ABC, abstractmethod
from datetime import datetime


class Item(ABC):
    def __init__(self, title: str, year: int, item_id: str):
        self.title = title
        self.year = year
        self.item_id = item_id
        self._is_available = True
        self._borrow_date = None

    @abstractmethod
    def get_info(self) -> str:
        pass

    def borrow(self) -> str:
        if self._is_available:
            self._is_available = False
            self._borrow_date = datetime.now()
            return f"'{self.title}' successfully borrowed"
        return f"'{self.title}' is currently unavailable"

    def return_item(self) -> str:
        self._is_available = True
        self._borrow_date = None
        return f"'{self.title}' returned"

    def __str__(self) -> str:
        status = "available" if self._is_available else "borrowed"
        return f"{self.title} ({self.year}) - {status}"


class Book(Item):
    def __init__(self, title: str, year: int, item_id: str, author: str, pages: int):
        super().__init__(title, year, item_id)
        self.author = author
        self.pages = pages

    def get_info(self) -> str:
        return f"Book: {self.author} - {self.title}, {self.pages} pages"

    def read_sample(self) -> str:
        return f"Reading a sample from '{self.title}'..."

    def __str__(self) -> str:
        return f"Book: {super().__str__()}, author: {self.author}"


class Magazine(Item):
    def __init__(self, title: str, year: int, item_id: str, issue_number: int, publisher: str):
        super().__init__(title, year, item_id)
        self.issue_number = issue_number
        self.publisher = publisher

    def get_info(self) -> str:
        return f"Magazine: {self.title} #{self.issue_number}, {self.publisher}"

    def browse(self) -> str:
        return f"Browsing '{self.title}' magazine"

    def __str__(self) -> str:
        return f"Magazine: {super().__str__()}, issue #{self.issue_number}"


class DVD(Item):
    def __init__(self, title: str, year: int, item_id: str, director: str, duration: int):
        super().__init__(title, year, item_id)
        self.director = director
        self.duration = duration

    def get_info(self) -> str:
        return f"DVD: {self.director} - '{self.title}', {self.duration} min"

    def play_trailer(self) -> str:
        return f"Playing trailer for '{self.title}'"

    def __str__(self) -> str:
        return f"DVD: {super().__str__()}, director: {self.director}"