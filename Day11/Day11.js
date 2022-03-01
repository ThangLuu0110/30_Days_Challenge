const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successButton = $('.success-button');
const warningButton = $('.warning-button');
const errorButton = $('.error-button');
const listNotifications = $('.notification-group');



function statusNotification(status) {
    switch (status) {
        case 'success':
            var html = `
                
                    <span class="notification-icon">
                        <i class="bi bi-check-circle-fill"></i>
                    </span>
                    <span class="notification-text"> This is a success message !</span>
                    <div class="bottom-line success"></div>
                
            `
            break;
        case 'warning':
             var html = `
                 
                    <span class="notification-icon">
                        <i class="bi bi-exclamation-circle-fill"></i>
                    </span>
                    <span class="notification-text"> This is a warning message !</span>
                    <div class="bottom-line warning"></div>
                
            `
             break;
        case 'error':
             var html =`
                    <span class="notification-icon">
                        <i class="bi bi-exclamation-triangle-fill"></i>
                    </span>
                    <span class="notification-text"> This is a error message !</span>
                    <div class="bottom-line error"></div>  
            `
             break;
    }
    return html;
}

function showNotifications(status){
    var notification = document.createElement('div')
    notification.classList.add('notification')
    notification.classList.add(status)
    notification.innerHTML = statusNotification(status)
    listNotifications.appendChild(notification)
    setTimeout(() => {
        notification.classList.add('toast_hide')
    }, 4000)
    setTimeout(() => {
        notification.remove();
    }, 6000)
}

successButton.addEventListener('click', function (e) {
    showNotifications('success')
})
warningButton.addEventListener('click', function (e) {
    showNotifications('warning')
})
errorButton.addEventListener('click', function (e) {
    showNotifications('error')
})