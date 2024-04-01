function generateTruthTable() {
    let elem = document.getElementById("table-true");
    var a = 0;
    var b = 0;
    var c = 0;
    for(var a = 0; a < 2; a++){
        for(var b = 0; b < 2; b++){
            for(var c = 0; c < 2; c++){
                let tr = document.createElement('tr');
                let tdA = document.createElement('td');
                let tdB = document.createElement('td');
                let tdC = document.createElement('td');

                let td1 = document.createElement('td');
                let td2 = document.createElement('td');
                let td3 = document.createElement('td');

                let td4 = document.createElement('td');
                let td5 = document.createElement('td');
                let td6 = document.createElement('td');

                let td7 = document.createElement('td');
                let td8 = document.createElement('td');
                let td9 = document.createElement('td');

                tdA.innerText = a;
                tdB.innerText = b;
                tdC.innerText = c;

                td1.innerText = a && b;
                td2.innerText = a || b;
                td3.innerText = !a ? 1 : 0;
                td4.innerText = !a || b ? 1 : 0;
                td5.innerText = a == b ? 1 : 0;
                td6.innerText = a^b ? 1 : 0;
                td7.innerText = (!b || a) && (b || c) ? 1 : 0;
                td8.innerText = !(a || b) ? 1 : 0;
                td9.innerText = !(a && b) ? 1 : 0;

                td1.align = "center";
                td2.align = "center";
                td3.align = "center";
                td4.align = "center";
                td5.align = "center";
                td6.align = "center";
                td7.align = "center";
                td8.align = "center";
                td9.align = "center";


                tr.appendChild(tdA);
                tr.appendChild(tdB);
                tr.appendChild(tdC);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tr.appendChild(td8);
                tr.appendChild(td9);

                elem.appendChild(tr);
            }
        }
    }

}
generateTruthTable();

function bubbleSort(arr) {
 
                        var len = arr.length;

                        var isSwapped = true;
                        var i = 0;
                        while (isSwapped) {

                            isSwapped = false;

                            for (var j = 0; j < (len - i - 1); j++) {
                                if (arr[j] > arr[j + 1]) {
                                    var temp = arr[j];
                                    arr[j] = arr[j + 1];
                                    arr[j + 1] = temp;
                                    isSwapped = true;
                                }
                            }

                            if (!isSwapped) {
                                break;
                            }
                            i++;
                        }
                        return arr;
                        }

function sortPuzirek(){
    let inputText = document.getElementById("_input");

    var positiveArr = inputText.value.split(",").map(function(number) {
        return parseInt(number);
    });
    let arr = bubbleSort(positiveArr);
    let outputText = document.getElementById("arr");
    outputText.value = arr;
}

function shakerSort(arr) {
    var control = arr.length - 1;
    var left = 0, right = control;
    do {
        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                control = i;
            }
        }
        right = control;
        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                var temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                control = i;
            }
        }
        left = control;
    } while (left < right);

    return arr;
}

function sortShaiker(){
    let inputText = document.getElementById("_inputShaik");

    var positiveArr = inputText.value.split(",").map(function(number) {
        return parseInt(number);
    });
    let arr = shakerSort(positiveArr);
    let outputText = document.getElementById("arrShaik");
    outputText.value = arr;
}


function rasheskaSort(arr)
{
    var factor = 1.25; // фактор уменьшения
    var step = arr.length - 1; // шаг сортировки
    
    while (step >= 1)
    {
        for (var i = 0; i + step < arr.length; i++)
        {
            if (arr[i] > arr[i + step])
            {   
                var temp = arr[i];
                arr[i] = arr[i + step];
                arr[i + step] = temp;
            }
        }
        step /= factor;
    }
}

function sortRasheska() {
    let inputText = document.getElementById("_inputRasheska");

    var positiveArr = inputText.value.split(",").map(function(number) {
        return parseInt(number);
    });
    let arr = shakerSort(positiveArr);
    let outputText = document.getElementById("arrRasheska");
    outputText.value = arr;
}

function insertSort(arr) // data — название вектора  (передаём по ссылке, чтобы вызов comb(array) менял вектор array)
{
    for(var j = 1; j < arr.length; j++){
        var key = arr[j]
        var i = j - 1
        while ((i >= 0) && (arr[i] > key)){
            arr[i + 1] = arr[i]
            i = i - 1
        }
        arr[i+1] = key
    }
    return arr;
}

function sortInsert() {
    let inputText = document.getElementById("_inputInsert");

    var positiveArr = inputText.value.split(",").map(function(number) {
        return parseInt(number);
    });
    let arr = insertSort(positiveArr);
    let outputText = document.getElementById("arrInsert");
    outputText.value = arr;
}


function QuickSort(arr) {
   if (arr.length <= 1) {
       return arr;
   }

   const pivot = arr[arr.length - 1];
   const leftList = [];
   const rightList = [];

   for (let i = 0; i < arr.length - 1; i++) {
       if (arr[i] < pivot) {
           leftList.push(arr[i]);
       }
       else {
           rightList.push(arr[i])
       }
   }

   return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
}

function sortQuick() {
    let inputText = document.getElementById("_inputQuick");

    var positiveArr = inputText.value.split(",").map(function(number) {
        return parseInt(number);
    });
    let arr = QuickSort(positiveArr);
    let outputText = document.getElementById("arrQuick");
    outputText.value = arr;
}






