const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Form verilerini depodan alma
const savedData = localStorage.getItem(STORAGE_KEY);
let formData = savedData ? JSON.parse(savedData) : {};

// Formu kaydedilen verilerle doldur
if (formData.email) form.elements.email.value = formData.email;
if (formData.message) form.elements.message.value = formData.message;

// Input alanında değişiklik olduğunda veriyi depoya kaydet
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Form gönderildiğinde
form.addEventListener('submit', event => {
  event.preventDefault();

  // Email ve mesaj boş değilse
  if (form.elements.email.value && form.elements.message.value) {
    console.log(formData);

    // Depoyu ve formu temizle
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = {};
  } else {
    alert('Lütfen tüm alanları doldurun.');
  }
});
