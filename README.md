# Звіт з практичної роботи: Робота з Git та GitHub

**Студент / Користувач:** qavalliere  
**Email:** qavalliere04@gmail.com  
**Публічний репозиторій:** [https://github.com/qavalliere/ppprrr111](https://github.com/qavalliere/ppprrr111)  
**Хост GitHub Pages:** [https://qavalliere.github.io/ppprrr111/](https://qavalliere.github.io/ppprrr111/)  
**Форк репозиторію:** [https://github.com/qavalliere/petclinic-spinnaker-jenkins](https://github.com/qavalliere/petclinic-spinnaker-jenkins)  

---

## Хід виконання роботи

### 1. Створення акаунту на GitHub
* Було використано обліковий запис GitHub: **[qavalliere](https://github.com/qavalliere)**.

---

### 2. Створення публічно доступного репозиторію
* Створено публічний репозиторій з назвою **`ppprrr111`**.
* URL репозиторію: `https://github.com/qavalliere/ppprrr111`

---

### 3. Встановлення локально git клієнта
* Встановлено Git на локальному комп'ютері.
* Перевірка версії через термінал:
```bash
git --version
```
* **Результат:** `git version 2.56.0.windows.2`

---

### 4. Налаштування git користувача
* Встановлено ім'я користувача та електронну пошту для глобальної конфігурації:
```bash
git config --global user.name "qavalliere"
git config --global user.email "qavalliere04@gmail.com"
```
* Перевірка конфігурації:
```bash
git config --list
```
* Параметри `user.name` та `user.email` успішно встановлені та відображаються у списку конфігурацій.

---

### 5. Клонування репозиторію
* Клоновано вихідний навчальний репозиторій за посиланням:
```bash
git clone https://github.com/sviatoslavem/mnau.git
```
* Отримано файлову структуру:
  * `index.html`
  * `script.js`
  * `style.css`

---

### 6. Модифікація файлів, підключення JavaScript та відправка змін
1. **Підключення JavaScript:**
   У файлі `index.html` підключено файл скрипта:
   ```html
   <script src="script.js" defer></script>
   ```
2. **Внесення змін у файли:**
   * **`index.html`**: додано адаптивну структуру, інтерактивну картку, кнопку перевірки скрипта `<button id="interactiveBtn">` та блок виводу інформації.
   * **`script.js`**: реалізовано інтерактивний лічильник натискань кнопки, зміну стану тексту та повідомлення в консолі (`console.log`).
   * **`style.css`**: оновлено стилі — додано приємний градієнтний фон, стилізовану картку з тінню, ефекти при наведенні на кнопку.
3. **Фіксація та відправка змін (Commit & Push):**
   * Додавання змінених файлів до індексу:
     ```bash
     git add .
     ```
   * Створення коміту з детальним описом:
     ```bash
     git commit -m "Підключено script.js до index.html та оновлено стилі"
     ```
   * Прив'язка віддаленого репозиторію:
     ```bash
     git remote set-url origin git@github.com:qavalliere/ppprrr111.git
     ```
   * Відправка змін у віддалену гілку `main`:
     ```bash
     git push -u origin main
     ```

---

### 7. Налаштування хостингу GitHub Pages
* Перейдено у налаштування репозиторію: `Settings` -> `Pages` (`https://github.com/qavalliere/ppprrr111/settings/pages`).
* У пункті **Build and deployment -> Source** вибрано:
  * Джерело: `Deploy from a branch`
  * Гілка: `main`
  * Папка: `/ (root)`
* Збережено налаштування (кнопка `Save`).
* Веб-сторінка успішно опублікована та доступна за адресою:
  **[https://qavalliere.github.io/ppprrr111/](https://qavalliere.github.io/ppprrr111/)**

---

### 8. Створення форку (Fork) репозиторію
* Відкрито репозиторій: `https://github.com/ibuchh/petclinic-spinnaker-jenkins`.
* Натиснуто кнопку **Fork** у верхньому правому куті сторінки.
* Форк успішно створено у власному профілі:
  **[https://github.com/qavalliere/petclinic-spinnaker-jenkins](https://github.com/qavalliere/petclinic-spinnaker-jenkins)**

---

## Висновки
У ході виконання практичної роботи було освоєно базові та ключові навички роботи з розподіленою системою контролю версій Git та хмарним сервісом GitHub: налаштування глобальних параметрів користувача, клонування репозиторіїв, внесення змін у код, створення комітів, публікація змін на сервері, розгортання статичного сайту через GitHub Pages та створення форків відкритих проєктів.
