# Object-Oriented Programming in Python - Транспортные средства

## Описание проекта
Проект демонстрирует основы объектно-ориентированного программирования в Python на примере иерархии классов транспортных средств.

## Структура классов
- **Vehicle** (абстрактный базовый класс)
  - Атрибуты: brand, model, year, mileage
  - Методы: start_engine(), drive(), get_info()
  
- **Car** (дочерний класс)
  - Доп. атрибуты: fuel_type, doors
  - Методы: honk()
  
- **Motorcycle** (дочерний класс)
  - Доп. атрибуты: engine_volume, has_sidecar
  - Методы: wheelie()
  
- **ElectricScooter** (дочерний класс)
  - Доп. атрибуты: battery_capacity, max_speed, battery_level
  - Методы: charge()

## Демонстрируемые концепции OOP
1. **Наследование** - все классы наследуются от Vehicle
2. **Полиморфизм** - метод start_engine() по-разному работает в разных классах
3. **Инкапсуляция** - защищенные атрибуты (_mileage, _battery_level)
4. **Абстракция** - абстрактный метод start_engine() в базовом классе

## Запуск проекта
```bash
python main.py