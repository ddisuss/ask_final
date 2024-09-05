const TOKEN = "7528590869:AAH9jLKektpgqmofEnzwLYBnODryePqCtmE";
const CHAT_ID = "-1002151959503";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b> ${ this.name.value }\n`;
    message += `<b>Номер телефона: </b> ${ this.email.value }`;


    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.email.value = "";
        success.innerHTML = "Сообщение отправлено! Мы с Вами свяжемся в ближайшее время.";
        success.style.display = "block";

    })
    .catch((err) => {
        console.warn('err');
    })
    .finally(() => {
        console.log('Конец');
        
    })

})

