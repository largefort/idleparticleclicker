let score = 0;
let passivePointsPerSecond = 0;
let clickValue = 1;
let energy = 0;
let prestigeMultiplier = 1;

function formatNumber(num) {
    if (num < 1000) return num.toString();
    if (num < 1000000) return (num / 1000).toFixed(1) + 'K';
    if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M';
    if (num < 1000000000000) return (num / 1000000000).toFixed(1) + 'B';
    return (num / 1000000000000).toFixed(1) + 'T';
}

function displayClickValue(event) {
    increaseScoreByClick();
    const x = event.clientX;
    const y = event.clientY;
    const clickValueElement = document.createElement('div');
    clickValueElement.classList.add('click-value');
    clickValueElement.textContent = `+${formatNumber(clickValue)}`;
    document.body.appendChild(clickValueElement);
    clickValueElement.style.left = `${x}px`;
    clickValueElement.style.top = `${y}px`;
    requestAnimationFrame(() => {
        clickValueElement.style.opacity = 1;
        clickValueElement.style.transform = 'translateY(-50px)';
    });
    setTimeout(() => {
        clickValueElement.remove();
    }, 800);
}

function increaseScoreByClick() {
    score += clickValue;
    updateUI();
    saveGame();
}

function buyAutoGenerator() {
    if (score >= 100) {
        score -= 100;
        passivePointsPerSecond += 1;
        updateUI();
        saveGame();
    }
}

function buyClickUpgrade() {
    if (score >= 50) {
        score -= 50;
        clickValue += 1;
        updateUI();
        saveGame();
    }
}

function updateUI() {
    document.getElementById('score-display').innerText = `Score: ${formatNumber(score)}`;
    document.getElementById('auto-score-display').innerText = `Passive Points/Sec: ${passivePointsPerSecond}`;
    document.getElementById('click-power-display').innerText = `Score Per Click: ${clickValue}`;
    document.getElementById('auto-generator').disabled = score < 100;
    document.getElementById('click-upgrade').disabled = score < 50;
}

function showPrestigeModal() {
    document.getElementById('prestige-modal').style.display = "block";
}

function closePrestigeModal() {
    document.getElementById('prestige-modal').style.display = "none";
}

function confirmPrestige() {
    energy += score; // Consider a conversion formula here
    score = 0;
    prestigeMultiplier += 1;
    clickValue = 1 * prestigeMultiplier;
    closePrestigeModal();
    updateUI();
    saveGame();
}

function saveGame() {
    const gameData = {
        score,
        passivePointsPerSecond,
        clickValue,
        energy,
        prestigeMultiplier
    };
    localStorage.setItem('particleClickerGame', JSON.stringify(gameData));
}

function loadGame() {
    const savedGame = localStorage.getItem('particleClickerGame');
    if (savedGame) {
        const gameData = JSON.parse(savedGame);
        score = gameData.score;
        passivePointsPerSecond = gameData.passivePointsPerSecond;
        clickValue = gameData.clickValue;
        energy = gameData.energy;
        prestigeMultiplier = gameData.prestigeMultiplier;
        updateUI();
    }
}
