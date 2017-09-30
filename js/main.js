function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
	xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		xhr = null;
	}
	return xhr;
}
function createBookItems(books)
{
	var library = document.getElementById("library");
	//for each entry in our JSON
		books.forEach(function(book, i, value) {
			var bookToAdd = "<div class=\"col-sm-3\" id=\"book" + i + "\"></div>";
			var portfolioGalleryItem = "<div class=\"portfolio-gallery-item text-center\" id=\"galleryItem" + i + "\"></div>";
			var book_name = "<h4>" + book.book_name + "</h1>";
			var author = "<h5>" + book.author + "</h2>";
			var isbn = "<h6> ISBN " + book.isbn + "</h3>";
			var image = "<img class=\"img-responsive img-square\" src=\"" + book.image + "\" alt=\"logo\">";
			$("#library").append(bookToAdd);
			$("#book"+i).append(portfolioGalleryItem);
			$("#galleryItem"+i).append(book_name);
			$("#galleryItem"+i).append(author);
			$("#galleryItem"+i).append(isbn);
			$("#galleryItem"+i).append(image);
			// console.log(book);
			console.log(book);
		});
	//build html
	//put title in H4
	// put Author in H5
	//put ISBN in H6
	//add img with class responsive and src = img link
}
var url = "https://217syr9910.execute-api.us-west-2.amazonaws.com/prod/books";
var xhr = createCORSRequest('GET', url);

xhr.onerror = function() {
console.log('There was an error!');
};

xhr.onload = function() {
var responseText = xhr.responseText;
	// console.log(responseText);
	var books = JSON.parse(responseText);
	createBookItems(books['books']);
};

xhr.send();
