# Week Ten: Day Two Assignment

---

## 🧠 Learning Objectives

Today, you’re teaching _yourself_ some key JavaScript concepts by building a fun dog quiz project that pulls live data from an API. Before diving into code, go through the following slides:

1. **Destructuring**  
   👉 [anjana.dev slide #8](https://anjana.dev/javascript-first-steps/3-slides.html#/8)

2. **Async Functions & `fetch()`**  
   👉 [anjana.dev slide #9](https://anjana.dev/javascript-first-steps/3-slides.html#/9)

3. **Async Programming with APIs ("Doggos to Bed")**  
   👉 [anjana.dev slide #10](https://anjana.dev/javascript-first-steps/3-slides.html#/10)

4. Bonus (Optional, but helpful):  
   📺 [The Net Ninja – Promises & Async Tutorial](https://www.youtube.com/watch?v=ZcQyJ-gxke0&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu)

---

## 🚀 Your Task – Build a Doggo Quiz Game

You’ll be building a web-based quiz where users try to guess a dog breed based on a random image. The image and data come from the [Dog CEO API](https://dog.ceo/dog-api/).

You’re learning to:

- Fetch data using `fetch()` and `async/await`
- Use destructuring
- Manipulate the DOM dynamically
- Work with external APIs
- Handle events and user input

---

## 🗂 Starter Code & Setup

You’ll find the project starter template here:

```
/week-ten/day-two/template
```

Copy the contents of this template folder to a folder with your full name and work inside your folder.
Example:

```bash
week-ten/day-two/Blessing-Nnah
```

**DO NOT EDIT THE CONTENTS OF THE TEMPLATE FOLDER**

### File structure:

```
week-ten/day-two/
 ├── template (do not modify this)
 ├── Blessing-Nnah/  # your working folder
      ├── index.html
      ├── doggoFetch.css
      ├── doggoFetch.js
```

---

## ✍️ Coding Tasks

Open `doggoFetch.js` and complete the following TODOs:

### TODO 1: `getMultipleChoices(n, correctAnswer, array)`

- Already implemented for you!

### TODO 2: `getBreedFromURL(url)`

- Extract the dog breed from an image URL and format it to match the entries in the `BREEDS` array.

### TODO 3: `fetchMessage(url)`

- Fetch data from the API and return the `message` property from the JSON.

### TODO 4: `renderButtons(choicesArray, correctAnswer)`

- Render multiple-choice buttons for breed guesses.
- Use the `buttonHandler` to apply “correct” or “incorrect” classes.

### TODO 5:

- Call `loadQuizData()` and then pass the data to `renderQuiz()`.

---

## ✅ Completion Checklist

- [ ] Game works: loads a dog image, renders multiple breed buttons
- [ ] Buttons show feedback: green for correct, red for wrong
- [ ] You used `async/await` and destructuring in your code
- [ ] You **did not modify** the original template folder.
- [ ] Deployed to Vercel with a working live link
- [x] A `README.md` in your folder includes:
  - Your name
  - Project title + short description
  - Features you implemented
  - Live site link

---

## 🌐 Deployment Instructions

1. Push your completed project to **your GitHub fork**.
2. Deploy your `Blessing-Nnah` folder using [Vercel](https://vercel.com/).
3. Add your Vercel link to your `README.md`.

---

## 📤 Submission Instructions

### GitHub Workflow

```bash
# From inside week-ten/day-two/
cp -r template Blessing-Nnah
# This copies the content of template folder to a new folder called Blessing-Nnah
cd Blessing-Nnah
# Work on your files.

# Then commit and push
git add .
git commit -m "Add Week Ten Doggo Quiz Project for Blessing Nnah"
git push origin main
```

### Create a Pull Request:

- Title it:
  ```
  Add Week Ten Doggo Quiz Project for Blessing Nnah
  ```

---

## ⏰ Deadline

Deadline is 8pm on Friday (tomorrow).

Make sure your code works, your README is tidy, and your site is live on Vercel.
Happy Coding!