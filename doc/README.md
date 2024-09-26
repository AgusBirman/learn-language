# Cool Steps

This is an innovative web application designed to enhance the educational experience for both students and teachers by facilitating interactive learning and effective progress tracking. This platform offers a range of functionalities tailored to the unique needs of each user, whether they are a student engaging with activities and exercises or a teacher managing classes and monitoring student progress.

![](https://media.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif?cid=790b76113mh6b84ipv717z0td948janjwj2kjb2kmduqfrpe&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Functional

### Use Cases

Student 

- Share ID with teacher (view QR ID)
- List activities
- View activity
- Submit exercise answer
- Delete progress
- View stats

Teacher

- Add student (scan QR ID)
- List students
- List activities
- Add activity
- Edit activity
- Delete activity
- Add exercise to activity
- Remove exercise from activity
- Edit exercise from activity

### UI Design

[Figma](https://www.figma.com/proto/vbDoKuXDsMhDnv7HAxdCP0/Untitled?node-id=0-1&t=0natvqji95DQWTBD-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A16&show-proto-sidebar=1)

## Technical

### Data Model

User
- id (auto)
- name (string)
- surname (string)
- email (string)
- password (string)
- role (string, enum: teacher| student)
- student: [User.id]

Activity
- id (auto)
- teacher (User.id)
- title (string)
- description (string, optional)

Exercise
- id (auto)
- activity (Activity.id)
- type:

CompleteSentence
- sentence (string)
- answer (string)
    
OrderSentence
- sentence (string)
- translate (string)

Vocabulary
- word (string)
- answer [string]

Answer
- id (auto)
- student (User.id)
- activity (Activity.id)
- exercise (Exercise.id)
- answer (string)