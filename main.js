var listDanhSachMang = [1,2,3,4];
    getEle("info_Mang").innerHTML = listDanhSachMang
function getEle(id) {
    return document.getElementById(id)
}

function nhapMang() {

    var mang = getEle("inputMang").value * 1;
    listDanhSachMang.push(mang);
    getEle("info_Mang").innerHTML = listDanhSachMang;
}

function tongCacSoDuong() {

    var tongSoDuong = 0;
    for (var i = 0; i <= listDanhSachMang.length; i++) {
        if (listDanhSachMang[i] > 0) {
            tongSoDuong += listDanhSachMang[i];
        }
    }
    getEle("info_tongSoDuong").innerHTML = tongSoDuong

}

function demSoDuongTrongMang() {
    var dem = 0;
    for (var i = 0; i <= listDanhSachMang.length; i++) {
        if (listDanhSachMang[i] > 0) {
            dem++;
        }
    }
    getEle("info_demSoDuong").innerHTML = "Mảng có " + dem + " số dương";
}


function soNhoNhat() {
    var smallNumber = listDanhSachMang[0];
    for (i = 0; i < listDanhSachMang.length; i++) {
        if (smallNumber > listDanhSachMang[i]) {
            smallNumber = listDanhSachMang[i]
        }
    }
    getEle("info_soNhoNhat").innerHTML = smallNumber + " là số nhỏ nhất"
}

function soDuongNhoNhat() {
    var smallNumberPlus = listDanhSachMang[0];

    for (var i = 0; i < listDanhSachMang.length; i++) {

        if (smallNumberPlus > listDanhSachMang[i] && listDanhSachMang[i] != 0 && listDanhSachMang[i] > 0) {
            smallNumberPlus = listDanhSachMang[i];
        }

    }

    getEle("info_soDuongNhoNhat").innerHTML = smallNumberPlus + " là số dương nhỏ nhất"
}


function test_SoChanCuoiMang() {
    var test_soChan = 0;
    for (var i = 0; i < listDanhSachMang.length; i++) {
        test_soChan = listDanhSachMang[i]
    }
    if (test_soChan % 2 === 0) {
        getEle("info_kiemSoChan_CuoiMang").innerHTML = test_soChan + " là số chẵn"
    }
    if (listDanhSachMang = []) {
        getEle("info_kiemSoChan_CuoiMang").innerHTML = -1
    }
}

function doiViTriHaiSo() {
    var viTri_1 = getEle("inputViTri1").value * 1
    var viTri_2 = getEle("inputViTri2").value * 1
    var empty = 0;
    viTri_1--
    viTri_2--
    empty = listDanhSachMang[viTri_1]
    listDanhSachMang[viTri_1] = listDanhSachMang[viTri_2]
    listDanhSachMang[viTri_2] = empty
    getEle("info_doiViTriHaiSo").innerHTML = listDanhSachMang
}

function sapXep_NhoDenLon() {
    var empty = 0;
    for (var i = 0; i < listDanhSachMang.length; i++) {
        for (var j = i + 1; j < listDanhSachMang.length; j++) {
            if (listDanhSachMang[j] < listDanhSachMang[i]) {
                empty = listDanhSachMang[j];
                listDanhSachMang[j] = listDanhSachMang[i];
                listDanhSachMang[i] = empty

            }
        }
    }

    getEle("info_sapXep_NhoDenLon").innerHTML = listDanhSachMang
}

function demo() {
    flat = true;

    for (var i = 0; i < listDanhSachMang.length; i++) {
        for (var number = 2; number < listDanhSachMang[i]; number++) {
            if (listDanhSachMang[i] % number == 0) {
                flat = false
                getEle("info_soNguyenTo_DauTien").innerHTML = -1
                // nếu tất cả các số trong mảng khi chia cho number có số dư =0  
                //thì khi đó máy vẫn giữ nguyên kết quả là -1 [ getEle("info_soNguyenTo_DauTien").innerHTML = -1]
                break // break được dùng để ngắt/ ngưng vòng lặp
            }
            else {
                flat = true
                break
            }

        }

        if (flat === true) {

            //xuất ra số nguyên tố
            getEle("info_soNguyenTo_DauTien").innerHTML = listDanhSachMang[i]
            // return được dùng để trả về kết quả và thoát / kết thúc hoàn toàn khỏi function / hàm
            //Để lấy được số nguyên tố đầu tiên ta sử dụng lệnh return ngưng function / hàm 
            // khi đó mấy mới chỉ kiểm và xuất ra đúng 1 só nguyên tố
            break
        }
        //xét nếu listDanhSachMang[i] % number != 0
        // 9 % 2 dư 1  không dư 0 | 
        // number++; number = 2 + 1 = 3;
        // và nếu listDanhSachMang[i] % number == 0
        // 9 % 3 dư 0
        //flat = false
        //getEle("info_soNguyenTo_DauTien").innerHTML = -1
        // break


        // nếu quá trình listDanhSachMang[i] % number !=0 thì
        //flat = true 

    }


}



function test_soNguyenTo_DauTien() {
    // flat = true;

    // for (var i = 0; i < listDanhSachMang.length; i++) {
    //     for (var number = 2; number < listDanhSachMang[i]; number++) {
    //         if (listDanhSachMang[i] % number == 0) {


    //             // listDanhSachMang[i] = 4 number = 2
    //             // nếu listDanhSachMang[i] % number === 0 | 4 chia hết cho 2 dư 0
    //             flat = false
    //             //flat = false  và break vì 4 còn chia hết cho 2 và xuất ra -1
    //             getEle("info_soNguyenTo_DauTien").innerHTML = -1
    //             // nếu tất cả các số trong mảng khi chia cho number có số dư =0  
    //             //thì khi đó máy vẫn giữ nguyên kết quả là -1 [ getEle("info_soNguyenTo_DauTien").innerHTML = -1]
    //             break// break được dùng để ngắt/ ngưng vòng lặp
    //         }
    //         //xét nếu listDanhSachMang[i] % number != 0
    //         // 9 % 2 dư 1  không dư 0 | 
    //         // number++; number = 2 + 1 = 3;
    //         // và nếu listDanhSachMang[i] % number == 0
    //         // 9 % 3 dư 0
    //         //flat = false
    //         //getEle("info_soNguyenTo_DauTien").innerHTML = -1
    //         // break
    //         if (listDanhSachMang[i] % number != 0) {

    //             number++;
    //             if (listDanhSachMang[i] % number == 0) {
    //                 flat = false
    //                 getEle("info_soNguyenTo_DauTien").innerHTML = -1
    //                 break
    //             }
    //         }

    //         // nếu quá trình listDanhSachMang[i] % number !=0 thì
    //         //flat = true 
    //         if (flat = true) {

    //             //xuất ra số nguyên tố
    //             getEle("info_soNguyenTo_DauTien").innerHTML = listDanhSachMang[i]
    //             // return được dùng để trả về kết quả và thoát / kết thúc hoàn toàn khỏi function / hàm
    //             //Để lấy được số nguyên tố đầu tiên ta sử dụng lệnh return ngưng function / hàm 
    //             // khi đó mấy mới chỉ kiểm và xuất ra đúng 1 só nguyên tố
    //             return
    //         }
    //     }


    // }
    // Cách 2: gọi thêm hàm isprime(n)
    if (listDanhSachMang = []) {
        getEle("info_soNguyenTo_DauTien").innerHTML = -1
    }
    for (let i = 0; i < listDanhSachMang.length; i++) {
        if (isprime(listDanhSachMang[i]) == 1) {
            getEle("info_soNguyenTo_DauTien").innerHTML = listDanhSachMang[i]
            break
        };

        if (isprime(listDanhSachMang[i]) == 0) {
            getEle("info_soNguyenTo_DauTien").innerHTML = -1

        };
    }

}

/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isprime(n) {
    //flag = 0 => không phải số nguyên tố
    //flag = 1 => số nguyên tố

    let flag = 1;

    if (n < 2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/

    /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
    let i = 2;

    while (i < n) {
        if (n % i == 0) {
            flag = 0;
            break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
        }
        i++;
    }

    return flag;
}

/*Tìm và liệt kê các số nguyên tố trong mảng*/
// for (let i = 0; i < listDanhSachMang.length; i++){
//   if (isprime(listDanhSachMang[i]) == 1) {
//     getEle("info_soNguyenTo_DauTien").innerHTML = listDanhSachMang[i]
//   };
// }



function test_demSoNguyen() {
    //Cách 1:
    // var dem = " "
    // // số nguyên là số khác 0 và chia hết cho số khác như 1, 2,3 , vv  = 0
    // for (var i = 0; i < listDanhSachMang.length; i++) {
    //     for (var j = 1; listDanhSachMang[i] != 0 || listDanhSachMang[i] == 0; j++) {
    //         if (listDanhSachMang[i] % j == 0) {
    //             dem++
    //             break
    //         }
    //         else if (listDanhSachMang[i] % j != 0) {
    //             j++;
    //             if (listDanhSachMang[i] % j == 0)
    //                 dem++
    //             break
    //         }


    //     }
    // }
    // getEle("info_demSoNguyen").innerHTML = "Có " + dem + " số nguyên"

    //Cách 2:
    var dem = " "
    // số nguyên là số khác 0 và chia hết cho số khác như 1, 2,3 , vv  = 0
    for (var i = 0; i < listDanhSachMang.length; i++) {
        if (Number.isInteger(listDanhSachMang[i]) == true) {
            dem++
        }
    }

    getEle("info_demSoNguyen").innerHTML = "Có " + dem + " số nguyên"
}


function soSanhSoLuong_soAmsoDuong() {
    var soAm = 0
    var soDuong = 0
    for (i = 0; i < listDanhSachMang.length; i++) {
        if (listDanhSachMang[i] > 0) {
            soDuong++
        }
        if (listDanhSachMang[i] < 0) {
            soAm++
        }
    }
    if (soAm < soDuong) {
        getEle("info_soSanhSoLuong").innerHTML = "Số âm: " + soAm + "<br>Số dương: " + soDuong + "<br> Số âm < Số dương"
        return
    }

    if (soAm > soDuong) {
        getEle("info_soSanhSoLuong").innerHTML = "Số âm: " + soAm + "<br>Số dương: " + soDuong + "<br> Số âm > Số dương"
        return
    }
    if (soAm == soDuong) {
        getEle("info_soSanhSoLuong").innerHTML = "Số âm: " + soAm + "<br>Số dương: " + soDuong + "<br> Số âm = Số dương"
        return
    }
}
