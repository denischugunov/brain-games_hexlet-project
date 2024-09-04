### Hexlet tests and linter status:
[![Actions Status](https://github.com/denischugunov/js-starter-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/denischugunov/js-starter-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/4ca37c223ca5d8269ff9/maintainability)](https://codeclimate.com/github/denischugunov/js-starter-project-44/maintainability)

### **Игры разума (JavaScript)**
***
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

* Калькулятор. Арифметические выражения, которые необходимо вычислить.
* Прогрессия. Поиск пропущенных чисел в последовательности чисел.
* Определение четного числа.
* Определение наибольшего общего делителя.
* Определение простого числа.

## Установка и подготовка зависимостей
***
```
$ sudo npm link 
npm ci
```

## Игра: "Проверка на четность"
***
Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить \`yes\`, если число чётное, или \`no\` — если нечётное.

### Запуск игры
```
$ brain-even
```

### Пример игры
[![asciicast](https://asciinema.org/a/cUOyQPUgPN8mBNbdf2DLjHhOu.svg)](https://asciinema.org/a/cUOyQPUgPN8mBNbdf2DLjHhOu)

## Игра: "Калькулятор"
***
Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

### Запуск игры
```
$ brain-calc
```

### Пример игры
[![asciicast](https://asciinema.org/a/leb1RR5hpIb6U7Ly7ah95lZ4d.svg)](https://asciinema.org/a/leb1RR5hpIb6U7Ly7ah95lZ4d)

## Игра "НОД"
***
Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

### Запуск игры
```
$ brain-gcd
```

### Пример игры
[![asciicast](https://asciinema.org/a/CasjlNULfj2rgn1mlMQr5POeQ.svg)](https://asciinema.org/a/CasjlNULfj2rgn1mlMQr5POeQ)

## Игра "Арифметическая прогрессия"
***
Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

### Запуск игры
```
$ brain-progression
```

### Пример игры
[![asciicast](https://asciinema.org/a/zCRd40Zs3UDrSJmabXJz94UVL.svg)](https://asciinema.org/a/zCRd40Zs3UDrSJmabXJz94UVL)

## Игра "Простое ли число?"
***
Показываем игроку число. Игрок же должен определить это число простое или нет.

### Запуск игры
```
$ brain-prime
```

### Пример игры
[![asciicast](https://asciinema.org/a/89po39w3dOqdPkgeubvg6RpPa.svg)](https://asciinema.org/a/89po39w3dOqdPkgeubvg6RpPa)
"""