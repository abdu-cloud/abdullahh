
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let mood = 'create';
let temp;




function getTotal(){
    if (price.value!=""){let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
                            total.innerHTML = result;
                            total.style.background="green";} 
    else {total.innerHTML =""; total.style.background="#ed563b"}};


    let dataPro;
    if (localStorage.product !=null) {dataPro = JSON.parse(localStorage.product)} 
    else {dataPro=[]}

    // create
    function creatData() 
{   let newPro = {
    title:title.value.toLowerCase(),
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value.toLowerCase(),
    };
    if (title.value!='' && price.value!='' && category.value!='' && newPro.count < 1000){
if(mood === 'create'){
    if (newPro.count>1){
        for (let i=0 ; i<newPro.count ; i++)
        {dataPro.push(newPro)}
    } else {dataPro.push(newPro)}
} else {
    dataPro[temp] = newPro ;
     mood ='create';
     count.style.display='block';
     submit.innerHTML='Create';
     }
     clearData();
    
    }else {window.alert('Some Fields Are Empty')};

    localStorage.setItem('product', JSON.stringify(dataPro));
    showData()
    };
    function clearData(){
        title.value='';
        price.value='';
        taxes.value='';
        ads.value='';
        discount.value='';
        total.innerHTML='';
        count.value='';
        category.value='';
    };

    function showData () {
        let table = '' ;
        for (let i=0; i<dataPro.length ; i++) {
        table += 
        `
                        <tr>
                            <td>${i+1}</td>
                            <td>${dataPro[i].title}</td>
                            <td>${dataPro[i].price}</td>
                            <td>${dataPro[i].taxes}</td>
                            <td>${dataPro[i].ads}</td>
                            <td>${dataPro[i].discount}</td>
                            <td>${dataPro[i].total}</td>
                            <td>${dataPro[i].category}</td>
                             <td>
                        <button class="btn btn-outline-warning" onclick=" updateData(${i})">
                          Update
                        </button>
                      </td>
                             <td>
                        <button
                          class="btn btn-outline-danger"
                          onclick=" deleteData(${i})"
                        >
                          Delete
                        </button>
                      </td>
                        </tr>
        `}
        document.getElementById('tbody').innerHTML = table;
        let btnDelete = document.getElementById('deleteAll');
        if (dataPro.length>0){
            btnDelete.innerHTML = `<button onclick="deleteAll()" style="width:100%; margin:20px 0;">Delete All (${dataPro.length})</button>`
        } else {btnDelete.innerHTML ='';};
        getTotal();
        }
        
        showData ();

        function deleteData(i){
            dataPro.splice(i,1);
            localStorage.product = JSON.stringify(dataPro);
            showData();
        };
        function deleteAll(){
            dataPro.splice(0);
            localStorage.clear(); 
            showData();
        }
        
        function updateData(i) {
            title.value = dataPro[i].title;
            price.value = dataPro[i].price;
            taxes.value = dataPro[i].taxes;
            ads.value = dataPro[i].ads;
            discount.value = dataPro[i].discount;
            getTotal();
            count.style.display='none';
            category.value = dataPro[i].category;
            submit.innerHTML='Update';
            mood ='update'
            temp = i ;
            scroll({top:0 , behavior: 'smooth'});

        }

    // search
    let searchMood = 'title';
    function getSearchMood(id){
        let search = document.getElementById('search');
            if (id == 'searchTitle') {searchMood = 'title'; search.placeholder = 'Search By Title'}
            else {searchMood= 'category'; search.placeholder = 'Search By Category'};
            search.focus();
            search.value='';
            showData();
        }

        function searchData(value){
            let table='';
        if (searchMood == 'title') {for (let i=0;i<dataPro.length;i++){ 
        if (dataPro[i].title.includes(value.toLowerCase()))
        {table += 
    `
                    <tr>
                        <td>${i}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                          <td>
                        <button class="btn btn-outline-warning" onclick=" updateData(${i})">
                          Update
                        </button>
                      </td>
                             <td>
                        <button
                          class="btn btn-outline-danger"
                          onclick=" deleteData(${i})"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
    `;}} }
    else {for (let i=0;i<dataPro.length;i++){ 
        if (dataPro[i].category.includes(value.toLowerCase()))
        {table += 
    `
                    <tr>
                        <td>${i}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                          <td>
                        <button class="btn btn-outline-warning" onclick=" updateData(${i})">
                          Update
                        </button>
                      </td>
                             <td>
                        <button
                          class="btn btn-outline-danger"
                          onclick=" deleteData(${i})"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
    `;}}}
    document.getElementById('tbody').innerHTML = table;
    };
    function resetData() {
        title.value = '';
        price.value = '';
        taxes.value = '';
        ads.value = '';
        discount.value = '';
        total.innerHTML = '';
        count.value = '';
        category.value = '';
        getTotal(); 
    }