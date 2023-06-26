window.addEventListener('load', function() {
    // Lấy danh sách chats từ Local Storage
    var chatHistory = localStorage.getItem('chats');
    if (chatHistory) {
      // Tạo một đối tượng HTML tạm thời để lưu trữ danh sách chats
      var tempElement = document.createElement('div');
      tempElement.innerHTML = chatHistory;
      // Lấy danh sách tất cả các .user-chats trong đối tượng HTML tạm thời
      var userChats = tempElement.getElementsByClassName('user-chats');
      // Lấy số lượng .user-chats
      var numberOfUserChats = userChats.length;
      // In ra số lượng .user-chats
      console.log('Số lượng .user-chats đã lưu:', numberOfUserChats);

    } else {
      console.log('Không có chats nào được lưu.');
    }   
});
/* 
dataSize = (chatHistory.length * 2) / 1024; // Đổi kích thước thành kilobytes (KB)
console.log('Dung lượng của dữ liệu chats trong Local Storage:', dataSize.toFixed(2), 'KB');
//xóa toàn bộ
localStorage.clear();

localStorage.removeItem('chats');
alert('Đã xóa tất cả các chats trong Local Storage!');
*/

