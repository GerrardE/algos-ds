# Calendar Application with React.js

## Introduction

You are asked to implement a calendar application for a client. Your colleague has already implemented some of the functionalities, but he has just been transferred to another project. Your task is to finish all of the required functionalities to meet the deadline.

The missing functionalities are:
* If a date is selected, the user should be able to add a note for that specific date. That note should be shown if the user selects this date again at some point.
* A selected month can be changed by clicking on the currently displayed month. Clicking on a month from a dropdown list should change the month that is currently displayed.
* A selected year can be changed by clicking on the currently displayed year. It can be incremented with input arrows, or the exact year can be written as an input.
* When the application starts, the selected date should be the current date, so if the user adds a note, it will be saved for the current date by default.

## Problem Statement

You are expected to implement:

### App component
* Pass the `note` string and the `onNoteInputChange` handler as a prop to the `Note` component.
* Pass the `onDayClick` handler and the `selectedDay` state property, which holds a string in the `DD-MM-YYYY` format of the currently selected date, to `Calendar` component.
* Implement the `onDayClick` handler in the `App` that will change the `note` property to the `notes` value if it exists for the selected date, otherwise it will show an empty string. Also, this handler should change the `selectedDate` to the date that has been clicked.
* Implement the `onNoteInputChange` in the `App` component to change the `note` state property and change the `notes` property to contain the note value and set the current date string as a key for it, so every day can have its note stored and shown when selected.

### Note component
* Set the `note` prop as a display value in the text area inside the `Note` component and invoke the parent prop in the `onNoteInputChange` handler that has the same name.

### Calendar component
* Pass down the `onDayClick` handler as a prop to the `Calendar` and invoke it inside `onDayClick` from the `Calendar` component.
* Return a list of month names using the `moment.js` in the `daysInMonth` function inside the `Calendar` component.
* Implement handlers `onYearChange` and `onMonthChange` that receive the year number and the month name respectively, and change the current `dateContext` of the `Calendar` component, thus rendering days for currently selected date.
* Pass the `dateContext` and appropriate change event handlers to `MonthNav` and `YearNav` components.

### MonthNav component
* Implement the `onToggleDropdown` method inside the `MonthNav` component that toggles the `showMonthPopup` state property every time the user clicks on the month label.
* Implement the `month` method in the `MonthNav` component that will display the currently selected month inside.

### YearNav component
* Call the appropriate handler passed as a prop inside the `onYearChange` handler.
* Implement the `showYearEditor` method that will change the `showYearNav` to `true` when the user double clicks on the year label.
* Implement the `year` method that returns the currently selected year.

### Input Handling
* Input year should be a valid number between 0 and 2100.

For more details, please run the task inside devskiller and see failing tests.

### Setup
1. Pass `yarn install` to get dependencies.
2. Start the app with `yarn start` and point the web browser to `http://localhost:8080/`.
3. Use `yarn test` to see the failing tests.
4. Fix the issues so that all tests pass.
5. Solve all issues mentioned here.
6. Commit the finished code to a GitHub public repository.

## Good Luck!
