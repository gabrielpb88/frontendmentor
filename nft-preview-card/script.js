function generateRandomValueForCrypto() {
    return Math.random() * 3000 + 1000;
}

document.getElementById('eth-label').textContent = generateRandomValueForCrypto().toFixed(2) + ' ETH';