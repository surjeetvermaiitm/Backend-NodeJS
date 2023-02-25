Promise.resolve("foo")
  .then(function p1(string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        string += "bar"; //foobar
        resolve(string);
      });
    });
  })
  .then(function p2(string) {
    setTimeout(() => {
      string += "baz"; //foobarbaz
      console.log(string);
    }, 1000);
    return string; //foobar
  })
  .then(function p3(string) {
    console.log(string); //foobar
  });
