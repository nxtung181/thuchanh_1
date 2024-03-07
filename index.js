const submitBtn = document.getElementById('submitBtn');
//kiem tra thong tin nhap cua nguoi dung    
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('name').value;
        const dob = document.getElementById('day').value;
        const cccd = document.getElementById('cccd').value;
        const address = document.getElementById('address').value;

        if (!fullName || !dob || !cccd || !address) {
            const errorElement = document.getElementById('error');
            errorElement.textContent = 'Vui lòng điền đầy đủ thông tin.';
        } else {
  
            window.location.href = 'khaosat.html';
        }
    });