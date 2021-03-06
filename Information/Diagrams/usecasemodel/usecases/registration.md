# Сценарій реєстрування нового користувача

#### Участники: Користувач, cистема
#### Передумови: Експерт отримав запрошення на реєстрацію і проходження опитування
#### Результат: Створення нового облікового запису користувача
#### Виключні ситуації: Експерт відхилив запрошення на участь

#### Основний сценарій: 
1. Користувач натискає кнопку [Реєстрація].
2. Система пропонує форму «Реєстрація нового користувача».
3. Користувач заповнює поля:
логін, пароль, прізвище, ім’я, email, сфера діяльності, рівень обізнаності.
4. Користувач підтверджує правильність введених даних.
5. Система перевіряє введені дані.
6. На електронну пошту, вказану користувачем при реєстрації, система посилає листа з посиланням для підтвердження адреси електронної пошти.
7. Після проходження за посиланням користувач стає повноправним користувачем системи.

![ModelView](http://www.plantuml.com/plantuml/proxy?idx=0&src=https://raw.githubusercontent.com/teramont/databaseQuestioning/master/Information/Diagrams/usecasemodel/usecases/registration.pu)

[Код plantUML](https://github.com/teramont/databaseQuestioning/blob/master/Information/Diagrams/usecasemodel/usecases/registration.pu)

## [Повернутися до списку діаграм можливих випадків використання](https://github.com/teramont/databaseQuestioning/blob/master/Information/Diagrams.md)
## [Повернутися до навігації](https://github.com/teramont/databaseQuestioning/blob/master/Information/navigation.md)
