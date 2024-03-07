const soCauDungEl = document.getElementById("so-cau-dung");
const tongSoCauEl = document.getElementById("tong-so-cau");
const diemSoEl = document.getElementById("diem-so");
const xemChiTietEl = document.getElementById("xem-chi-tiet");
const chiTietEl = document.getElementById("chi-tiet");

// Dữ liệu bài thi
const data = {
    soCauDung: 39,
    tongSoCau: 40,
    danhSachCauHoi: [
        {
            cauHoi: "1",
            dapAnNguoiDung: "False",
        },
        {
            cauHoi: "2",
            dapAnNguoiDung: "False",
        },
        {
            cauHoi: "3",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "4",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "5",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "6",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "7",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "8",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "9",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "10",
            dapAnNguoiDung: "True",
        },
        {
            cauHoi: "11",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "12",
            dapAnNguoiDung: "B",
        },
        {
            cauHoi: "13",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "14",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "15",
            dapAnNguoiDung: "C",
        },
        {
            cauHoi: "16",

            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "17",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "18",
            dapAnNguoiDung: "A",
        },
        {
            cauHoi: "19",
            dapAnNguoiDung: "C",
        },
        {
            cauHoi: "20",
            dapAnNguoiDung: "D",
        },
        {
            cauHoi: "21",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "22",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "23",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "24",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "25",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "26",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "27",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "28",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "29",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "30",
            dapAnNguoiDung: "A, B",
        },
        {
            cauHoi: "31",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "32",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "33",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "34",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "35",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "36",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "37",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "38",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "39",
            dapAnNguoiDung: "rat hay",
        },{
            cauHoi: "40",
            dapAnNguoiDung: "rat hay",
        },
        // ...
    ],
};

// Hiển thị kết quả

function ketqua(){
    chiTietEl.style.display = "block";
    const danhSachCauHoiEl = chiTietEl.querySelector("table");
    danhSachCauHoiEl.innerHTML = `            
                    <tr>
                        <th>Câu hỏi</th>
                        <th>Đáp án của bạn</th>
                    </tr>`;
    
    for (const cauHoi of data.danhSachCauHoi) {
        const trEl = document.createElement("tr");
        trEl.innerHTML = `
            <td class="cau-hoi">${cauHoi.cauHoi}</td>
            <td class="dap-an">${cauHoi.dapAnNguoiDung}</td>
            `;

        danhSachCauHoiEl.appendChild(trEl);
    }
};
ketqua();