console.log('API tem um limite de 20 requisições')
console.log('API has a limit of 20 requests')

const bookName = document.querySelector('#book-name')
const bookChapter = document.querySelector('#book-number-chapter')
const bookVerseNumber = document.querySelector('#book-verse-number')
const bookText = document.querySelector('#book-text')

const getRandomVerses = async () => {
    const getVerse = await fetch('https://www.abibliadigital.com.br/api/verses/nvi/random');
    const response = await getVerse.json();

    return response;
}

const renderVerses = async (name, chapter, number, verseText) => {
    bookName.textContent = name;
    bookChapter.textContent = chapter;
    bookText.textContent = verseText;
    bookVerseNumber.textContent = number;
}

const generateVerses = async () => {
    const verse = await getRandomVerses()
    renderVerses(verse.book.name, verse.chapter, verse.number, verse.text)
}

window.onload = () => {
    generateVerses()
}