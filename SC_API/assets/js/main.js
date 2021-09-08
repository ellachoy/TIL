// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//   newsAPI
// 67833ec7649a4b6fab36f8b90c9d5bf2

// --------------------------------------------------
//2. class bestimmen
class News{
    constructor(author, title, description,date, img){
      this.author= author
      this.title= title
      this.description= description
      this.date= date
      this.img= img
    }
    pushNews(){ //4. form/container für  in HTML zeigen lassen
     document.querySelector('article').innerHTML+=`<section> 
     <h1>${this.author}</h1>
    <h2>${this.title}</h2>
    <p>${this.description}</p>
    <p>${this.date}</p>
    <img src="${this.img}" alt="">
     </section>` 

    }
}

function openNews(){
   document.querySelector('article').innerHTML=''

    // 1. 
    let keyNews=document.querySelector('input').value
    console.log(keyNews)

    fetch(`https://newsapi.org/v2/everything?q=${keyNews}&from=2021-08-08&sortBy=publishedAt&apiKey=67833ec7649a4b6fab36f8b90c9d5bf2`)
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(data =>{
        console.log(data);
        let newsArticle = data.articles
        console.log(newsArticle);
              
        // 3.einzelne info ausgeben bekommen
        newsArticle.forEach(newData=>console.log(newData));
        // newsArticle.forEach(newData=>console.log(newData.autor));
        newsArticle.forEach(newData=>{
          let author= newData.author
        //   console.log(author);
          let date=newData.publishedAt
        //   console.log(date);
         let title=newData.title
         let description=newData.description
        //  console.log(description);     
        let newsImg= newData.urlToImage

        let newNews1=new News(author,title, description, date, newsImg)

         //5. mit push in HTML 
         newNews1.pushNews()

        })
      
    })
}






