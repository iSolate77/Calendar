# Dynamic Calendar App
## Project goal
I'm creating a solution to improve academic calendars, allowing institutions to adjust their schedules for unforeseen events and optimize staff time. The solution also enables staff to choose and display different information to customize the calendar for their institution's unique requirements.
## Brief Summary
The Academic Calendar is a web application that displays a calendar view of the academic year, with the ability to toggle between different types of events, such as syllabus, exams, and timetables. The application has three types of users: admin, teachers, and students. Admin users have the ability to manage user privileges and make changes to the data available to be displayed. Teachers can request changes that are subject to admin's approval, and students can view the information on the calendar.

The front-end of the application is built using the React library, with a custom Navbar component, Semester component, Week component, Day component, and Box component(so far). The back-end is built using the Firebase platform, which provides secure authentication and a real-time database.

The data for the application is structured as a collection of documents in the Firestore database, with each document representing a week in the academic year. The documents contain the start and end dates for the week, as well as the events for that week, such as syllabus, exams, and timetables. The application uses a configuration file to dynamically generate the necessary data based on the current academic year, making it easier to update the dates for each academic year.

In addition to the core features, the application also includes a Trello board integration in the Box component, which displays data in the style of a Trello board lists.
## Screenshots
Input box:
![input_box](/assets/input_box.png)

Initial stage:
![calendar](/assets/Calendar.png)

