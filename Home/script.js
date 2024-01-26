// var favChannel = [              //THis is an Array
//     {img_url: "Home/img/channels/Discovery.jpg"},
//     {img_url: "Home/img/channels/Docubay.jpg"},
//     {img_url: "Home/img/channels/Erosnow.jpg"},
//     {img_url: "Home/img/channels/Hayu.jpg"},
//     {img_url: "Home/img/channels/hoichoi.jpg"},
//     {img_url: "Home/img/channels/LionsgatePlay.jpg"},
//     {img_url: "Home/img/channels/MANORAMAMAX.jpg"},
//     {img_url: "Home/img/channels/Mubi.jpg"},
//     {img_url: "Home/img/channels/ShortsTV.jpg"},
// ];



var favChannel = [
    {img_url: "Home/img/channels/Discovery.jpg", link: "http://www.discovery.com"},
    {img_url: "Home/img/channels/Docubay.jpg", link: "http://www.docubay.com"},
    {img_url: "Home/img/channels/Erosnow.jpg", link: "http://www.erosnow.com"},
    {img_url: "Home/img/channels/Hayu.jpg", link: "http://www.hayu.com"},
    {img_url: "Home/img/channels/hoichoi.jpg", link: "http://www.hoichoi.com"},
    {img_url: "Home/img/channels/LionsgatePlay.jpg", link: "http://www.lionsgateplay.com"},
    {img_url: "Home/img/channels/MANORAMAMAX.jpg", link: "http://www.manoramamax.com"},
    {img_url: "Home/img/channels/Mubi.jpg", link: "http://www.mubi.com"},
    {img_url: "Home/img/channels/ShortsTV.jpg", link: "http://www.shortstv.com"},
];


var channelBtn = document.querySelector(".channelBtn"); // initializing it outside the loop, helps us to minimizes DOM queries

favChannel.map(function (elem){ // map function is used to go through each element of the array, its like for loop for every item
    var div = document.createElement("div"); // here a new <div> is created for every new image
    div.setAttribute("class","channelDiv"); // class name is set as channelDiv

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    var a = document.createElement("a");
    a.setAttribute("href", elem.link);

    a.setAttribute("target", "_blank"); // This makes the link open in a new tab
    
    // Optionally, for security reasons, when you use target="_blank", 
    // it's recommended to add this attribute as well
    a.setAttribute("rel", "noopener noreferrer");

    a.append(image);

    div.append(a);

    // div.querySelector(".channelBtn").append(div); -> Not working

    channelBtn.append(div);
    // document.body.appendChild(div); // it appends the newly created div to the container
    }
);

localStorage.setItem("favChannel",JSON.stringify(favChannel)); // here, the array is converted to a JSON string and stored as a cache memory

//It is converted into JSON String, in order to preserve the Data Structure & also because its compatible in String Format
