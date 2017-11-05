function selectionSort(values) {
    
    var min;
    var tempIndex;
    for (a = 0; a < values.length; a++) {
        min = values[a];
        for (b = a; b < values.length; b++) {
            if (values[b] < min) {
                min = values[b];
                tempIndex = b;
            }
        }
        if (values[a] > min) {
            temp = values[a];
            values[a] = values[tempIndex];
            values[tempIndex] = temp;
        }
    }
    return values;
}

function bubbleSort(values) {
}

function insertionSort(values) {
}

function ....
