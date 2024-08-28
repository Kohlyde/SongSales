document.querySelectorAll('.song-card-color').forEach(card => {
    card.addEventListener('mouseover', function() {
        try {
            let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            this.style.boxShadow = `0px 40px 1920px 8858px ${randomColor}`;
        } catch (error) {
            console.error('Error applying random color to box-shadow:', error);
        }
    });

    card.addEventListener('mouseout', function() {
        try {
            this.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.2)';
        } catch (error) {
            console.error('Error resetting box-shadow:', error);
        }
    });
});
document.querySelectorAll('.audio-card-color').forEach(card => {
    card.addEventListener('mouseover', function() {
        try {
            let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            this.style.boxShadow = `0px 40px 1920px 8858px ${randomColor}`;
        } catch (error) {
            console.error('Error applying random color to box-shadow:', error);
        }
    });

    card.addEventListener('mouseout', function() {
        try {
            this.style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.2)';
        } catch (error) {
            console.error('Error resetting box-shadow:', error);
        }
    });
});
function openLightbox(event) {
    event.preventDefault();
    if (document.getElementById('customLightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'customLightbox';
    Object.assign(lightbox.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center',
        alignItems: 'center', zIndex: '1000'
    });

    const content = document.createElement('div');
    Object.assign(content.style, {
        backgroundColor: '#fff', padding: '20px', borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', textAlign: 'center', color: '#000'
    });

    const message = document.createElement('p');
    message.textContent = 'Sorry, transactional is not set up yet.';
    message.style.color = '#000'; // Dark font color
    content.appendChild(message);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => document.body.removeChild(lightbox);
    closeButton.style.marginTop = '10px';
    content.appendChild(closeButton);

    lightbox.appendChild(content);
    document.body.appendChild(lightbox);
}

document.querySelectorAll('.paypal-add-cart').forEach(anchor => {
    anchor.addEventListener('click', openLightbox);
});
