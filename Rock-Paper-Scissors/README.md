## Rock Paper Scissors Hand Game

The Rock Paper Scissors Hand Game is an interactive Python application that allows users to play the game of rock-paper-scissors using hand gestures captured through their webcam. This project demonstrates the integration of computer vision techniques with game logic to create a gaming experience.

### Features

- Real-time hand gesture recognition using OpenCV.

- Simple user interface displaying live webcam feed and game interface.

- Computer opponent with randomized moves.

- Score tracking for multiple rounds of gameplay.

- Easy-to-use keyboard controls to start and exit the game.


### Technologies Used

* Python: The core programming language used for developing the application.

* OpenCV: OpenCV (Open Source Computer Vision Library) is utilized for capturing webcam input, hand tracking and processing hand gestures.

* cvzone: The cvzone library is employed for simplified hand tracking and finger counting.

* GitHub: Hosting platform for storing the project repository and source code.

* GitHub Copilot: GitHub Copilot, an AI-powered coding assistant, provided suggestions and code completions throughout the development process, aiding in code generation and optimization.


### Installation

Clone this repository to your local machine:

```
git clone https://github.com/GChukwudi/GHW-Games.git
```

Navigate to the project directory:

```
cd Rock-Paper-Scissors
```

#### Install the required dependencies:

```
pip install cv2
pip install cvzone
```

### How to Play
Run the program by executing the main.py file:

```
python main.py
```

* The program will display the live webcam feed along with the game interface.

* Press the 's' key on your keyboard to start the game.

* Make hand gestures in front of the webcam to represent your choice (rock, paper, or scissors).

* The computer will randomly select its move.

* The winner of each round will be determined based on the gestures, and the scores will be updated accordingly.

* Continue playing until you decide to exit the game by pressing the 'Esc' key.
