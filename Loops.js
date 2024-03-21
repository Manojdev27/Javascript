const blogPosts = [
    {
    title:"What is Javascript",
    author: "Zach Gollwitzer",
    publishDate: "Dec 20 2020",
    content:"some post content here"
    },

    {
        title:"How do arrays work",
        author: "Zach Gollwitzer",
        publishDate: "Jan 1 2021",
        content:"some post content here"
    },
    {
            title:"How long does it take to learn javascript",
            author: "Zach Gollwitzer",
            publishDate: "Jan 20 2021",
            content:"some post content here"
    }
        
]

for(let i=0; i< blogPosts.length;i++){
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;

    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}

// Output:
// What is Javascript 
// Zach Gollwitzer 
// Dec 20 2020 
// some post content here 
// How do arrays work 
// Zach Gollwitzer
// Jan 1 2021
// some post content here
// How long does it take to learn javascript 
// Zach Gollwitzer
// Jan 20 2021
// some post content here

const arr = ["A String", "Strings", "Objects", "Zach", 20, 30, 40, 50 ];

for(let i=0; i< arr.length; i++){
    if(typeof arr[i] === 'number'){
      console.log(arr[i]);
    }
  }

//   Output
//   20 
//   30 
//   40
//   50

for(let i = 1; i<1000; i++){
    console.log(i);
  }

//   Output
// will display the numbers from 1 to 999