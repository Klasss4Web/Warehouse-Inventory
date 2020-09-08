function Commodities(col1,col2,col3,col4,col5,col6,col7){
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;
        this.col4 = col4;
        this.col5 = col5;
        this.col6 = col6;
        this.col7 = col7;
    }


    //UI Elements
let goldOp = document.getElementById('goldOpening'),
goldInf = document.getElementById('goldInflow'),
goldOut = document.getElementById('goldOutflow'),
goldClos = document.getElementById('goldClosing'),
goldAct = document.getElementById('goldActual'),
silverOp = document.getElementById('silverOpening'),
silverInf = document.getElementById('silverInflow'),
silverOut = document.getElementById('silverOutflow'),
silverClos = document.getElementById('silverClosing'),
silverAct = document.getElementById('silverActual'),
steelOp = document.getElementById('steelOpening'),
steelInf = document.getElementById('steelInflow'),
steelOut = document.getElementById('steelOutflow'),
steelClos = document.getElementById('steelClosing'),
steelAct = document.getElementById('steelActual'),
mercuryOp = document.getElementById('mercuryOpening'),
mercuryInf = document.getElementById('mercuryInflow'),
mercuryOut = document.getElementById('mercuryOutflow'),
mercuryClos = document.getElementById('mercuryClosing'),
mercuryAct = document.getElementById('mercuryActual'),
copperOp = document.getElementById('copperOpening'),
copperInf = document.getElementById('copperInflow'),
copperOut = document.getElementById('copperOutflow'),
copperClos = document.getElementById('copperClosing'),
copperAct = document.getElementById('copperActual');

//Form Elements
//Input Elements
let itemsName = document.getElementById('item-name'),
    inFlow = document.getElementById('in-flows'),
    open = document.getElementById('openingStock'),
    outFlow = document.getElementById('out-flows'),
    closed = document.getElementById('closingStock'),
    act = document.getElementById('actualStock'),
    itemAdd = document.getElementById('add-item');

//Items
//let itemGold = document.getElementById('gold');

//Submit Elements
let submitItem = document.getElementById('itemSubmit'),
    submitOpening = document.getElementById('openingSubmit'),
    submitInflow = document.getElementById('inflowSubmit'),
    submitOutflow = document.getElementById('outflowSubmit'),
    submitClosing = document.getElementById('closingSubmit'),
    submitActual = document.getElementById('actualSubmit'),
    submitAdd = document.getElementById('addSubmit');

//Add Event Listeners For the Submit Buttons
//Opening
submitOpening.addEventListener('click', enter);
submitInflow.addEventListener('click', inflows);
submitOutflow.addEventListener('click', Outflows);


function enter(e){
    if(itemsName.value == 'Gold'){
        goldOp.textContent = open.value;
    }else if(itemsName.value == 'Silver'){
        silverOp.textContent = open.value;
    }else if(itemsName.value == 'Steel'){
        steelOp.textContent = open.value;
    }else if(itemsName.value == 'Mercury'){
        mercuryOp.textContent = open.value;
    }else if(itemsName.value == 'Copper'){
        copperOp.textContent = open.value;
    }else if(open.value == "" || itemsName.value == ''){
        errorMessage.appendChild(document.createTextNode(errorMes()));
    }
    setTimeout(clearError,3000)
    
    console.log('entering');
    e.preventDefault();
}
function inflows(e){
    if(itemsName.value == 'Gold'){
        goldInf.textContent = inFlow.value;
    }else if(itemsName.value == 'Silver'){
        silverInf.textContent = inFlow.value;
    }else if(itemsName.value == 'Steel'){
        steelInf.textContent = inFlow.value;
    }else if(itemsName.value == 'Mercury'){
        mercuryInf.textContent = inFlow.value;
    }else if(itemsName.value == 'Copper'){
        copperInf.textContent = inFlow.value;
    }else if(inFlow.value == "" || itemsName.value == ''){
        errorMessage.appendChild(document.createTextNode(errorMes()))
    } 
    
    setTimeout(clearError,3000)

    console.log('entering');
    e.preventDefault();
}
  


function Outflows(e){
    if(itemsName.value == 'Gold'){
        goldOut.textContent = outFlow.value;
        goldClos.textContent = parseInt(goldOp.textContent) + parseInt(goldInf.textContent) - parseInt(outFlow.value); 
    }else if(itemsName.value == 'Silver'){
        silverOut.textContent = outFlow.value;
        silverClos.textContent = parseInt(silverOp.textContent) + parseInt(silverInf.textContent) - parseInt(outFlow.value);
    }else if(itemsName.value == 'Steel'){
        steelOut.textContent = outFlow.value;
        steelClos.textContent = parseInt(steelOp.textContent) + parseInt(steelInf.textContent) - parseInt(outFlow.value);
    }else if(itemsName.value == 'Mercury'){
        mercuryOut.textContent = outFlow.value;
        mercuryClos.textContent = parseInt(mercuryOp.textContent) + parseInt(mercuryInf.textContent) - parseInt(outFlow.value);
    }else if(itemsName.value == 'Copper'){
        copperOut.textContent = outFlow.value;
        copperClos.textContent = parseInt(copperOp.textContent) + parseInt(copperInf.textContent) - parseInt(outFlow.value);
    }else if(outFlow.value == "" || itemsName.value == ''){
        errorMessage.appendChild(document.createTextNode(errorMes()))
    }
   // else{
     
     
     
     console.log('enetring...');
    //}
    e.preventDefault();
}

let errorMessage = document.getElementById('errorMessage');

function errorMes(){
    return "please enter a valid figure"
    
}

// Clear Error Message After a Specified Time
function clearError(){
    document.getElementById('errorMessage').remove();
};



// Add Tables/additional Rows

addTab = document.getElementById('addTable');


//Add Event Listener for the Add Row Button
addTab.addEventListener('click',additionalTabs)
    function additionalTabs(e){

    const serialNo = document.getElementById('serial-no').value,
        itemNames = document.getElementById('item-name').value,
        opening = document.getElementById('openingStock').value,
        inflow = document.getElementById('in-flows').value,
        outflow = document.getElementById('out-flows').value,
        closing = document.getElementById('closingStock').value,
        actual = document.getElementById('actualStock').value;


         //instatiate commodities Object
         const newAddition = new Commodities(serialNo,itemNames,opening,inflow,outflow,closing,actual);
         console.log(newAddition);

    //Table Element
    let tables =document.getElementById('tabElement');

    
    
    let newTab = document.createElement('tr');
    newTab.className = 'itemRow';

    newTab.innerHTML = `<th class="serialClass">${serialNo}</th><th class="itemsname">${itemNames}</th><th>${opening}</th><th>${inflow}</th><th>${outflow}</th><th>${closing}</th><th>${actual}</th>`
    
    console.log(newTab); 
    tables.appendChild(newTab);

   

    let th = document.querySelector('th');
    
e.preventDefault();
}
;



