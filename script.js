const NAME = document.querySelector('.name');
const ROLE = document.querySelector('.role');
const QUOTE = document.querySelector('.quote');
const IMG = document.querySelector('.person');

const BTNS = document.querySelectorAll('.btn');

const people = [
    {
        'index': 0,
        'name': 'Tanya Sinclair',
        'role': 'UX Engineer',
        'quote': '“I’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future.”',
        'imgSrc': 'images/image-tanya.jpg'
    },
    {
        'index': 1,
        'name': 'John Tarkpor',
        'role': 'Junior Front-end Developer',
        'quote': '“If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”',
        'imgSrc': 'images/image-john.jpg'
    }
]

let index = 0; // Initial value (Tanya)

function changeTestimonial() {
    // Check which btn is pressed
    if (this.id === 'prev') {
        index--;
        if (index < 0) index = people.length - 1;
    } else if (this.id === 'next') {
        index++;
        if (index === people.length) index = 0;
    }

    // Add details depending on index
    NAME.textContent = people[index].name;
    ROLE.textContent = people[index].role;
    QUOTE.textContent = people[index].quote;
    IMG.src = people[index].imgSrc;
    IMG.alt = people[index].name;

    // Reset animation
    BTNS.forEach(btn => btn.addEventListener('click', function() {
    document.body.classList.remove("animate");
    void this.offsetWidth;
    document.body.classList.add("animate");
    }, false));
}

BTNS.forEach(btn => btn.addEventListener('click', changeTestimonial));


window.addEventListener('load', () => document.body.classList.add("animate"));

changeTestimonial();