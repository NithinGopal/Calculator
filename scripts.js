// Body and calc window

const body = document.querySelector('body');
const mainBox = document.createElement('div');
const heading = document.createElement('h2');

heading.textContent = 'Calculator';
body.appendChild(heading);
mainBox.setAttribute('id', 'mainBox')
body.appendChild(mainBox);

//Populate num, operator and clear keys, and result screen

build();

function build () {
    //make main containers
    for (i=0 ; i < 3 ; i ++) {
        let container = document.createElement('div');
        container.setAttribute('id', 'container' + (i+1));
        mainBox.appendChild(container);
    }

    // Select the main containers that were built above
    let screenContainer = document.querySelector('#container1');
    let clearContainer = document.querySelector('#container2');
    let keyContainer = document.querySelector('#container3');
    //add classes to main containers
    screenContainer.classList.add('resultPlay');
    clearContainer.classList.add('resetbtn');
    keyContainer.classList.add('keyContainer');
    //add result to screenContainer
    let resultText = document.createElement('p');
    screenContainer.appendChild(resultText);
    //populate clear and delete buttons in clearContainer 
    for (j=1; j<3; j++){
        let btn = document.createElement('button');
        btn.classList.add('clearBtn');
        if ( j === 1) {
            btn.textContent = 'Clear';
        } else if ( j === 2) {
            btn.textContent = 'Delete'
        }
        clearContainer.appendChild(btn);
    }
    //populate nummber and operation keys into keyContainer
    //declare/create num,operate elements 
    let numContainer = document.createElement('div');
    let operateContainer = document.createElement('div');
    let zeroDotEqualContainer = document.createElement('div');
    let numKeyContainer = document.createElement('div');
    //add classes to them
    numContainer.classList.add('numContainer');
    operateContainer.classList.add('operateContainer');
    zeroDotEqualContainer.classList.add('zeroDotEqualContainer');
    numKeyContainer.classList.add('numKeyContainer');
    //add to num keys and 0/./= keys to numcontainer
    numContainer.appendChild(zeroDotEqualContainer);
    numContainer.appendChild(numKeyContainer);
    //add numContainer and operateContainer to main keyContainer
    keyContainer.appendChild(numContainer);
    keyContainer.appendChild(operateContainer);
    //populate number keys and add to numkeycontainer
    for (k=9; k>=1; k--) {
        let numKeys = document.createElement('button');
        numKeys.classList.add('numKeys');
        numKeys.textContent = +k;
        numKeyContainer.appendChild(numKeys);
    }
    //populate 0/./= keys and add to zeroDotEqualContainer
    for (l=0; l<3; l++) {
        let zeroDotEqualKeys = document.createElement('button');
        zeroDotEqualKeys.classList.add('numKeys');
        //assign text content
        if (l === 0 ) {
                zeroDotEqualKeys.textContent = '.';
            } 
        else if (l === 1) {
             zeroDotEqualKeys.textContent = 0;
        }else if (l === 2) {
             zeroDotEqualKeys.textContent = '=';
         }
        zeroDotEqualContainer.appendChild(zeroDotEqualKeys);
    }
    //populate operation keys and add to operateContainer
    for (m=0; m<4; m++){
        let operateKey = document.createElement('button');
        operateKey.classList.add('numKeys');
        //assign text content
        if (m === 0) {
            operateKey.textContent = '/';
        } else if (m === 1) {
            operateKey.textContent = '*';
        } else if (m === 2) {
            operateKey.textContent = '-';
        } else if (m === 3) {
            operateKey.textContent = '+';
        }
        operateContainer.appendChild(operateKey);
    }
}
