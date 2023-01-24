
module.exports = function toReadable (num) {
    let str = '';
    const a = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let arr = ('000' + num).substr(-3).match(/^(\d{1})(\d{2})$/);
    if (!arr) return;
    if (num === 0) return 'zero';
    str += (arr[1] != 0) ? (a[Number(arr[1])] || b[arr[1][0]]) + ' ' + 'hundred ' : '';
    str += (arr[2] != 0) ? ((str != '') ? '' : '') + (a[Number(arr[2])] || b[arr[2][0]] + ' ' + a[arr[2][1]]): '';
    return str.trim();    
    }
