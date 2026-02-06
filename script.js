let positions = [0,0,0,0,0];
let finished = [];
let intervals = [];

function toggleDashboard() {
    document.getElementById("dashboard").classList.toggle("open");
}

function startRace() {
    finished = [];
    positions = [0,0,0,0,0];

    for (let i = 0; i < 5; i++) {
        const horse = document.getElementById(`horse${i}`);

        intervals[i] = setInterval(() => {
            positions[i] += Math.random() * 8;
            horse.style.left = positions[i] + "px";

            if (positions[i] >= 820 && !finished.includes(i)) {
                finished.push(i);
                clearInterval(intervals[i]);

                if (finished.length === 2) {
                    showResults();
                }
            }
        }, 50);
    }
}

function showResults() {
    const first = finished[0];
    const second = finished[1];

    const bet1 = Number(document.getElementById(`bet${first}`).value);
    const bet2 = Number(document.getElementById(`bet${second}`).value);

    const win1 = bet1 * 2;
    const win2 = bet2 * 1.5;

    document.getElementById("resultText").innerHTML = `
        🥇 Caballo ${first + 1}: $${win1}<br>
        🥈 Caballo ${second + 1}: $${win2}
    `;

    document.getElementById("popup").classList.remove("hidden");
}

function resetRace() {
    for (let i = 0; i < 5; i++) {
        document.getElementById(`horse${i}`).style.left = "10px";
        clearInterval(intervals[i]);
    }
    finished = [];
}

function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}
