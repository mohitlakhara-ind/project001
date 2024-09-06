<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Game README</title>
</head>
<body>
    <h1>Memory Game</h1>

    <h2>Description</h2>
    <p>The Memory Game is a fun and interactive card-matching game designed with HTML, CSS, and JavaScript. It offers a variety of features, including customizable emoji sizes, multiple difficulty levels, and different themes. Players can enjoy the game in both classic and timed modes, with responsive layouts that adapt to different screen sizes.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Multiple Levels</strong>: Choose from Easy (4x4), Medium (6x6), and Hard (8x8) grids.</li>
        <li><strong>Classic and Timed Modes</strong>: Play at your own pace or challenge yourself with a countdown timer.</li>
        <li><strong>Customizable Emoji Size</strong>: Adjust the emoji size for a more personalized experience.</li>
        <li><strong>Thematic Cards</strong>: Choose between fun themes like Animals, Space, and Food.</li>
        <li><strong>Responsive Design</strong>: The game layout adjusts seamlessly to various screen sizes.</li>
        <li><strong>Animated Card Flip</strong>: Smooth animations enhance the gaming experience.</li>
        <li><strong>Match Notifications</strong>: Get immediate feedback when you match two cards.</li>
    </ul>

    <h2>Screenshots</h2>
    <p>Include screenshots of the game in action here (optional).</p>

    <h2>Installation</h2>
    <h3>Requirements</h3>
    <ul>
        <li>A modern web browser (Chrome, Firefox, Safari, Edge)</li>
        <li>Basic understanding of HTML, CSS, and JavaScript to tweak the game settings (optional)</li>
    </ul>

    <h3>Steps</h3>
    <ol>
        <li>Clone the repository:</li>
        <pre><code>git clone https://github.com/mohitlakhara-ind/project001/blob/main/README.md</code></pre>
        <li>Navigate to the project directory:</li>
        <pre><code>cd memory-game</code></pre>
        <li>Open the <code>index.html</code> file in your browser:</li>
        <pre><code>open index.html</code></pre>
        <li>Alternatively, you can host the project on a web server.</li>
    </ol>

    <h2>How to Play</h2>
    <ol>
        <li>Select the <strong>level</strong> (Easy, Medium, Hard) and <strong>game mode</strong> (Classic or Timed) from the dropdown menus.</li>
        <li>Customize the emoji size using the <strong>emoji size slider</strong>.</li>
        <li>Choose a <strong>theme</strong> (Animals, Space, Food) to change the style of the cards.</li>
        <li>Click on a card to flip it and reveal the emoji underneath.</li>
        <li>Match pairs of cards by clicking on them. If the two cards match, they will stay flipped. If not, they will flip back after a short delay.</li>
        <li>The game ends when all cards are successfully matched, or the timer runs out in timed mode.</li>
        <li>Track your score and time using the counters provided at the top of the game.</li>
    </ol>

    <h2>Game Settings</h2>
    <ul>
        <li><strong>Level</strong>:
            <ul>
                <li>Easy: 4x4 grid (16 cards)</li>
                <li>Medium: 6x6 grid (36 cards)</li>
                <li>Hard: 8x8 grid (64 cards)</li>
            </ul>
        </li>
        <li><strong>Mode</strong>:
            <ul>
                <li>Classic: No time limit</li>
                <li>Timed: You have 60 seconds to match all the cards</li>
            </ul>
        </li>
        <li><strong>Emoji Size</strong>: Use the range slider to adjust the size of the emojis (2x to 5x).</li>
        <li><strong>Themes</strong>: Choose from Animals, Space, or Food.</li>
    </ul>

    <h2>Customization</h2>
    <p>You can easily modify the game to suit your needs:</p>
    <ul>
        <li><strong>Add More Themes</strong>: Update the <code>themes</code> object in <code>script.js</code> to add more themes.</li>
        <li><strong>Change Grid Sizes</strong>: Modify the CSS grid properties in <code>style.css</code> to adjust the card layout.</li>
        <li><strong>Adjust Timer</strong>: Change the time limit for the timed mode in <code>script.js</code>.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>HTML</strong>: Provides the structure of the game.</li>
        <li><strong>CSS</strong>: Adds styling and animations to make the game visually appealing.</li>
        <li><strong>JavaScript</strong>: Handles the game logic, including card matching, score tracking, and customizations.</li>
    </ul>

    <h2>Contribution</h2>
    <p>Contributions are welcome! If you have any ideas or improvements, feel free to fork the repository and submit a pull request.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

    <h2>Acknowledgments</h2>
    <ul>
        <li>Special thanks to the open-source community for inspiration and guidance in building this project.</li>
        <li>Emoji icons used in the game are sourced from standard Unicode emoji.</li>
    </ul>
</body>
</html>
