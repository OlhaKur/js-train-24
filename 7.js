console.log("Завдання: 7 ==============================");

// Створюємо функцію task7, яка використовує setInterval та проміси.
function task7() {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      console.log(`Поточні секунди: ${seconds}`);
    });
  });
  // Створюємо новий проміс.
  // Використовуємо функцію setInterval, щоб виконати функцію кожну секунду.
  // Отримаємо поточну дату та час
  // Отримуємо секунди з поточної дати
  // Виводимо в консоль повідомлення `Поточні секунди: ${seconds}`
  // Якщо поточні секунди кратні 10, очищуємо інтервал та резолвимо проміс з рядком "Поточні секунди кратні 10!".
  // Якщо поточні секунди кратні 3, очищуємо інтервал та відхиляємо проміс з рядком "Поточні секунди кратні 3!".
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо в консоль `Проміс зарезолвився з значенням: ${value}` .
  // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо в консоль `Проміс відхилився з помилкою: ${error}`.
  // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо в консоль "Проміс завершено".
}

// Викликаємо функцію task7
task7();
