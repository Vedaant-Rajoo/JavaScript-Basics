function reverse(array) {
    for (i = array.length; i > 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    for (i = 0; i < array.length; i++) {
        if (array[0] === array[i]) {
            console.log("true");
            continue;


        } else {
            console.log("false");
            break;
        }
    }
}

function sumArray(array) {
    count = 0;


    for (i = 0; i < array.length; i++) {
        count += array[i];

    }
    return count;
}

function max(array) {
    max = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];

        } else
            continue;
    }
}