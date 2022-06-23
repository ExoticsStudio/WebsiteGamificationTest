const myURL = new URL("http://127.0.0.1:5500/index.html");
            myURL.searchParams.append('x',42);
            console.log(myURL.search);
