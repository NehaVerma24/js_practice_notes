const obj = [
    { id: 1,
     book: "book1" ,
     price: 300
    
    },
     { id: 2,
        book: "book2" ,
        price: 1300
    },
        { id: 3,
            book: "book3" ,
            price: 700
        },
            { id: 4,
                book: "book4" ,
                price: 400},
    ];
    
    // basic for
    for(let i = 0;i<obj.length;i++ ){
        console.log(obj[i]);  
                                         
    }

    // for-each
    obj.forEach((bk)=>{
        console.log(bk);
    })

    /*output : [for each and basic for loop]
                                         { id: 1, book: 'book1', price: 300 }
                                         { id: 2, book: 'book2', price: 1300 }
                                         { id: 3, book: 'book3', price: 700 }
                                         { id: 4, book: 'book4', price: 400 }*/


    // use-of-filter
    const filter = obj.filter((tittle)=>(tittle.book=='book3'));
    console.log('filter------- ', filter); //output: filter-------  [ { id: 3, book: 'book3', price: 700 } ]


    // use-of-map
    const map = obj.map((m)=> ((m.book)=="book2"));
     console.log(map); //output: [ false, true, false, false ]


     // use-of-reduce
     const reduce = obj.reduce((acc,currt_val)=> acc+currt_val.price , 0)
     console.log("price_to_pay :",reduce); //output: price_to_pay : 2700


     //use-of-map-map
     const red = obj.filter((p)=>(p.id) >2).map((pc)=>(pc.price)*10);
     console.log('Map to Map :',red); //output : Map to Map : [ 7000, 4000 ]
