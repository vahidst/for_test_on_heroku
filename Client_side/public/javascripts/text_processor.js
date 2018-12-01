

var text_processor={


get_eq_degree:  function(eq) {

    var patt1 = /([^\((A-Z)&(a-z))]diff\([^,]+,[^,]+,\d+\))|(^diff\([^,]+,[^,]+,\d+\))/gm;
    var patt2 = /\d+(?=\))/gm;


    var match1,match2;
    var arr1 = [];
    var arr2 = [];

    while ((match1 = patt1.exec(eq)) != null) {
      //console.log(match1[0]);
      arr1= arr1.concat(match1[0]);
    }

   var str=arr1.join();

    while ((match2 = patt2.exec(str)) != null) {
      arr2= arr2.concat(match2[0]);
    }

    //console.log(arr2);

    // console.log(arr_of_matches);
    var degree_of_eq=Math.max.apply(null,arr2);
    // console.log(degree_of_eq);

    return (Number.isInteger(degree_of_eq) ?   degree_of_eq : 0);
}

}

module.exports= text_processor;