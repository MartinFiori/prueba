
function togglePopup() {
    document.getElementById('popup').classList.toggle('active')
}

document.getElementById('coupon-list').addEventListener('click', togglePopup)
document.getElementById('btn-close').addEventListener('click', togglePopup)