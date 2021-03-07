function rotLeft(a, d) {
    var arr = [];

      for (var i = 1; i <= a; i++){
        arr.push(i)
      };
      for (var j = 1; j <= d; j++){
          arr.shift(arr.push(j))
      }
      console.log(arr.toString()); // <-- this will print the desired output.
      return arr.toString(); // <-- no return from this.
  }


  rotLeft(5, 4)