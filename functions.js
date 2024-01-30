const kuvat = [
    '1.png', '2.png', '3.png', '4.png', '5.png','6.png'
]
function getRandomImage() {
    return Math.floor(Math.random() * 6) + 1;
  }

document.querySelector('button').addEventListener('click',() => {
    const numero = getRandomImage()
    if(numero === 1)
    document.getElementById('kuva').src='./kuvat/1.png'
    if(numero === 2)
    document.getElementById('kuva').src='./kuvat/2.png'
    if(numero === 3)
    document.getElementById('kuva').src='./kuvat/3.png'
    if(numero === 4)
    document.getElementById('kuva').src='./kuvat/4.png'
    if(numero === 5)
    document.getElementById('kuva').src='./kuvat/5.png'
    if(numero === 6)
    document.getElementById('kuva').src='./kuvat/6.png'
  })