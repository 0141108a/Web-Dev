# Library Management System

A Python project demonstrating Object-Oriented Programming concepts.

## Classes

**Item** (base class)
- Attributes: title, year, item_id, availability
- Methods: borrow(), return_item(), get_info()

**Book** (inherits from Item)
- Additional: author, pages
- Method: read_sample()

**Magazine** (inherits from Item)
- Additional: issue_number, publisher
- Method: browse()

**DVD** (inherits from Item)
- Additional: director, duration
- Method: play_trailer()

## OOP Concepts
- Inheritance
- Encapsulation
- Polymorphism
- Abstraction

## How to Run
python main.py

