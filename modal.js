const Modal = document.querySelector('.js-modal')
const ModalClose = document.querySelector('.js-modal-close')
const Showsoft = document.querySelector('.soft')
Showsoft.addEventListener('click', async e => {
  Modal.classList.add('open')
})
ModalClose.addEventListener('click', async e => {
  Modal.classList.remove('open')
})

const getLocalChatHistory = localStorage.getItem('chats');
const LocalKb = document.querySelector('.see-localstorage')
const clearLocal = document.querySelector('.clear-localstorage')

LocalKb.addEventListener('click', e => {
  if (getLocalChatHistory) {
    dataSize = (getLocalChatHistory.length * 2) / 1024;
    //console.log('Dung lượng của dữ liệu chats trong Local Storage:', dataSize.toFixed(2), 'KB');
    alert('Dung lượng của dữ liệu chats trong Local Storage: ' + dataSize.toFixed(2) + ' KB');
  }
  else {
    alert('Lỗi, Vui lòng reload/F5 lại trang')
  }
 
})

clearLocal.addEventListener('click', e => {
  localStorage.removeItem('chats');
  alert('Đã xóa tất cả các chats trong Local Storage!');
  location.reload();
})