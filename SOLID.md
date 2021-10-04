# SOLID Design Principles

An overview of the SOLID design principles introduced by Robert C. Martin (Uncle Bob)

## Single Responsibility Principle

Each **class** should have a single primary job/piece of data and all methods within the class should should focus only on tasks around that one job/piece of data.

If a method can be reused in multiple classes (on different data) it should probably be in its own class, some kind of utility class where the data can be passed in. This principle promotes a loosely coupled system reducing the risk of side effects as the system grows.

## Open Close Principle

Objects are open for extension but closed for modification. Once on object is in production use it is better to clone the existing object and all its properties, methods and prototypes before then making changes to the copy. This is done by creating a new class and extending it from the existing class.

This ensures that existing code that is dependent on the existing class is not effected by any future changes as this is done on the new class that does not mutate the source class.

## Liskov Substitution Principle

A method that can take a base type should also be able to take a derived type.

## Interface Segregation Principle

## Dependency Inversion Principle

High level modules should not directly depend on low level modules as this creates a tightly coupled system
