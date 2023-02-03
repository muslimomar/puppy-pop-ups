window.onload = async () => {

    const toggleElement = (elem) => elem.classList.toggle('d-none');

    const fetchRandomDogImage = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        return data.message;
    }

    const loadingSpinner = document.getElementById('loading-spinner');
    const errorMessage = document.getElementById('error-message');
    const dogImg = document.getElementById('dog-img');

    toggleElement(loadingSpinner);

    try {
        const imageURL = await fetchRandomDogImage();
        dogImg.src = imageURL;
        dogImg.onload = () => {
            toggleElement(loadingSpinner);
            toggleElement(dogImg);
        };

    } catch (error) {
        console.error(error);
        toggleElement(loadingSpinner);
        toggleElement(errorMessage);
    }

};