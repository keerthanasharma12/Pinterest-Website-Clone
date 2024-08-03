document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById('uploadForm');
    const imagesContainer = document.getElementById('imagesContainer');
    const searchBar = document.getElementById('searchBar');

    let images = [
        { title: 'Beautiful Nature', url: './images/n1.jpg' },
        { title: 'Calming Nature', url: './images/n2.jpg' },
        { title: 'Peaceful Nature', url: './images/n3.jpg' },
        { title: 'Surrounded by Nature', url: './images/n4.jpg' },
        { title: 'Tanjiro', url: './images/huh.png' },
        { title: 'Serene', url: './images/uff.png' },
        { title: 'Breeze', url: './images/oho.png' },
        { title: 'Brothers', url: './images/brotha.png' },
        { title: 'Majestic-Horse', url: './images/horse-1.jpg' },
        { title: 'Royal-Horse', url: './images/horse-2.jpg' },
        { title: 'Black-Horse', url: './images/horse-3.jpg' },
        { title: 'White-Horse', url: './images/horse-4.jpg' },
        { title: 'Cold', url: './images/cold.png' },
        { title: 'Half-Half', url: './images/shoo.png' },
        { title: 'Friends', url: './images/tomodachi.png' },
        { title: 'Archery', url: './images/archery.png' },
        { title: 'Party_Gown_Dress', url: './images/gown-1.jpg' },
        { title: 'Vintage-Gown_Dress', url: './images/gown-2.jpg' },
        { title: 'Gown_Dress_Long', url: './images/gown-3.jpg' },
        { title: 'Dress-Dark-Gown', url: './images/gown-4.jpg' },
        { title: 'Party-Dress', url: './images/d1.jpg' },
        { title: 'Short_Dress', url: './images/d2.jpg' },
        { title: 'Pretty_Dress_Long', url: './images/d3.jpg' },
        { title: 'Dress_Shining-Short', url: './images/d4.jpg' },
        { title: 'Cute-Cat_Animal', url: './images/cat1.jpg' },
        { title: 'Little_Kitten-Funny Animal', url: './images/cat2.jpg' },
        { title: 'Cat-cute_Aniaml', url: './images/cat3.jpg' },
        { title: 'Painted cute Cat Animal', url: './images/cat4.jpg' },
        { title: 'Fantasy_Dragon', url: './images/ryu1.jpg' },
        { title: 'Flying_Dragon', url: './images/ryu2.jpg' },
        { title: 'Water_Dragon', url: './images/ryu3.jpg' },
        { title: 'Serene Dragon', url: './images/ryu4.jpg' },
        { title: 'Cute-Dog_Animal', url: './images/up3.jpg' },
        { title: 'Little_doggy-Funny Animal', url: './images/up4.jpg' },
        { title: 'Dog-cute_Aniaml', url: './images/dog3.jpg' },
        { title: 'Puppy-Doggy Animal', url: './images/dog4.jpg' },

    ];

    function displayImages() {
        imagesContainer.innerHTML = '';
        images.forEach(img => {
            if (img.title.toLowerCase().includes(searchBar.value.toLowerCase())) {
                const imgCard = document.createElement('div');
                imgCard.className = 'image-card';
                imgCard.innerHTML = `
                    <img src="${img.url}" alt="${img.title}">
                    <div class="title">${img.title}</div>
                `;
                imagesContainer.appendChild(imgCard);
            }
        });
    }

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            images.push({ title, url: reader.result });
            fileInput.value = '';
            document.getElementById('title').value = '';
            displayImages();
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });
    displayImages();

    searchBar.addEventListener('input', displayImages);

    window.searchImages = displayImages;

    window.uploadImage = () => {
        const title = document.getElementById('title').value;
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            images.push({ title, url: reader.result });
            displayImages();
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    window.openLoginPopup = () => {
        document.getElementById('loginPopup').style.display = 'block';
    };

    window.closeLoginPopup = () => {
        document.getElementById('loginPopup').style.display = 'none';
    };

    window.login = (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        // For simplicity, no password validation in this example
        document.getElementById('welcomeMessage').innerText = `Welcome, ${username}`;
        closeLoginPopup();
    };
});
