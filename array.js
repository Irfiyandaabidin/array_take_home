let hewan = ['Ayam', 'Kambing', 'Cicak'];

const tambahData = (nameArray, value) => {
    nameArray.push(value);
}

const ambilData = (nameArray, index) => {
    return nameArray[index];
}

const modifyData = (nameArray, index, value) => {
    nameArray[index] = value;
}

tambahData(hewan,'kucing')
console.log('Ambil index ke-2 : ',ambilData(hewan, 2));
modifyData(hewan, 1, 'Burung')

console.log('Array yang sudah dimodifikasi : ', hewan);