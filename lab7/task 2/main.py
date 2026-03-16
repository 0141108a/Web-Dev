from models import Car, Motorcycle, ElectricScooter

def demonstrate_polymorphism(vehicles):
    print("\nДемонстрация полиморфизма")
    print("="*30)
    
    for vehicle in vehicles:
        print(f"\nТранспорт: {vehicle}")
        print(f"Запуск: {vehicle.start_engine()}")
        print(f"Инфо: {vehicle.get_info()}")
        
        if hasattr(vehicle, 'honk'):
            print(f"Сигнал: {vehicle.honk()}")
        if hasattr(vehicle, 'wheelie'):
            print(f"Трюк: {vehicle.wheelie()}")
        if hasattr(vehicle, 'charge'):
            print(f"Зарядка: {vehicle.charge(20)}")


def main():
    print("Создание транспортных средств")
    print("="*30)
    
    car1 = Car("Toyota", "Camry", 2022, "бензин", 4)
    car2 = Car("Tesla", "Model 3", 2023, "электричество", 4)
    bike1 = Motorcycle("Harley-Davidson", "Street 750", 2021, 750, False)
    bike2 = Motorcycle("Ural", "Gear Up", 2022, 750, True)
    scooter1 = ElectricScooter("Xiaomi", "Mi Pro 2", 2023, 12400, 25)
    
    vehicles = [car1, car2, bike1, bike2, scooter1]
    
    for vehicle in vehicles:
        print(f"\nСоздан: {vehicle}")
    
    print("\nДемонстрация работы методов")
    print("="*30)
    
    print(f"\n--- Тестируем автомобиль: {car1}")
    print(car1.start_engine())
    print(car1.drive(150))
    print(car1.honk())
    
    print(f"\n--- Тестируем мотоцикл: {bike1}")
    print(bike1.start_engine())
    print(bike1.wheelie())
    print(bike1.drive(50))
    
    print(f"\n--- Тестируем мотоцикл с коляской: {bike2}")
    print(bike2.start_engine())
    print(bike2.wheelie())
    
    print(f"\n--- Тестируем электросамокат: {scooter1}")
    print(scooter1.start_engine())
    print(scooter1.drive(5))
    print(scooter1.drive(10))
    print(scooter1.charge(30))
    print(scooter1.start_engine())
    
    demonstrate_polymorphism(vehicles)
    
    print("\nКоллективная поездка")
    print("="*30)
    
    for vehicle in vehicles:
        print(f"\n{vehicle} отправляется в путь:")
        print(vehicle.start_engine())
        print(vehicle.drive(100))


if __name__ == "__main__":
    main()