from abc import ABC, abstractmethod

class Vehicle(ABC):
    def __init__(self, brand: str, model: str, year: int):
        self.brand = brand
        self.model = model
        self.year = year
        self._mileage = 0
    
    @abstractmethod
    def start_engine(self) -> str:
        pass
    
    def drive(self, distance: float) -> str:
        self._mileage += distance
        return f"Проехали {distance} км. Общий пробег: {self._mileage} км"
    
    def get_info(self) -> str:
        return f"{self.brand} {self.model}, {self.year} года выпуска"
    
    def __str__(self) -> str:
        return f"{self.brand} {self.model} ({self.year})"


class Car(Vehicle):
    def __init__(self, brand: str, model: str, year: int, fuel_type: str, doors: int = 4):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type
        self.doors = doors
    
    def start_engine(self) -> str:
        return f"Автомобиль {self.brand} {self.model} завелся. Двигатель на {self.fuel_type}"
    
    def honk(self) -> str:
        return "Бип-бип!"
    
    def __str__(self) -> str:
        return f"Автомобиль: {super().__str__()}, {self.fuel_type}, {self.doors} двери"


class Motorcycle(Vehicle):
    def __init__(self, brand: str, model: str, year: int, engine_volume: int, has_sidecar: bool = False):
        super().__init__(brand, model, year)
        self.engine_volume = engine_volume
        self.has_sidecar = has_sidecar
    
    def start_engine(self) -> str:
        sound = "Брум-брум!" if self.engine_volume > 500 else "Врум-врум!"
        return f"Мотоцикл {self.brand} {self.model} завелся. {sound}"
    
    def wheelie(self) -> str:
        if not self.has_sidecar:
            return f"{self.brand} {self.model} делает вили!"
        return "С коляской вили сделать невозможно"
    
    def __str__(self) -> str:
        sidecar_text = "с коляской" if self.has_sidecar else "без коляски"
        return f"Мотоцикл: {super().__str__()}, {self.engine_volume}cc, {sidecar_text}"


class ElectricScooter(Vehicle):
    def __init__(self, brand: str, model: str, year: int, battery_capacity: int, max_speed: int):
        super().__init__(brand, model, year)
        self.battery_capacity = battery_capacity
        self.max_speed = max_speed
        self._battery_level = 100
    
    def start_engine(self) -> str:
        if self._battery_level > 10:
            return f"Электросамокат {self.brand} {self.model} готов к поездке. Заряд: {self._battery_level}%"
        else:
            return f"Электросамокат {self.brand} {self.model} разряжен, поставьте на зарядку"
    
    def drive(self, distance: float) -> str:
        self._mileage += distance
        self._battery_level -= int(distance * 2)
        if self._battery_level < 0:
            self._battery_level = 0
        
        return f"Проехали {distance} км на самокате. Заряд: {self._battery_level}%, пробег: {self._mileage} км"
    
    def charge(self, minutes: int) -> str:
        self._battery_level += minutes // 10
        if self._battery_level > 100:
            self._battery_level = 100
        return f"Самокат заряжен до {self._battery_level}%"
    
    def __str__(self) -> str:
        return f"Электросамокат: {super().__str__()}, {self.battery_capacity}Wh, {self.max_speed}км/ч"