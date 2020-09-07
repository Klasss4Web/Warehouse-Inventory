function Commodities(col1,col2,col3,col4,col5,col6,col7){
        this.col1 = col1;
        this.col2 = col2;
        this.col3 = col3;
        this.col4 = col4;
        this.col5 = col5;
        this.col6 = col6;
        this.col7 = col7;
    }




// UI Values
addTab = document.getElementById('form-element');

//Add Event Listener
addTab.addEventListener('submit',function(e){

    const serialNo = document.getElementById('serial-no').value,
        itemNames = document.getElementById('item-name').value,
        opening = document.getElementById('openingStock').value,
        inflow = document.getElementById('in-flows').value,
        outflow = document.getElementById('out-flows').value,
        closing = document.getElementById('closingStock').value,
        actual = document.getElementById('actualStock').value;


         //instatiate commodity
         const newAddition = new Commodities(serialNo,itemNames,opening,inflow,outflow,closing,actual);
         console.log(newAddition);

    //Table Element
    let tables =document.getElementById('tabElement');

    
    
    let newTab = document.createElement('tr');
    newTab.className = 'itemRow';

    newTab.innerHTML = `<th>${serialNo}</th><th>${itemNames}</th><th>${opening}</th><th>${inflow}</th><th>${outflow}</th><th>${closing}</th><th>${actual}</th>`
    console.log(newTab); 
    tables.appendChild(newTab);
    
    

    let th = document.querySelector('th');
    
    console.log(th)
e.preventDefault()
}
);
