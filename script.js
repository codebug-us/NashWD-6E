$(document).ready(function(){

	var tesla = {
		ticker: "TSLA",
		ceo: "Elon Musk",
		revenue: 4.54, //in billions
		costs: 5.02,
		sharePrice: 255.0,
		numShares: 183439248
	}

	var lulu = {
		ticker: "LULU",
		ceo: "Calvin McDonald",
		revenue: 2.8,
		costs: 1.2,
		sharePrice: 178.64,
		numShares: 12439248
	}

	var apple = {
		ticker: "AAPL",
		ceo: "Tim Cook",
		revenue: 58.1,
		costs: 35.2,
		sharePrice: 211.75,
		numShares: 203439248
	}

	var amazon = {
		ticker: "AMZN",
		ceo: "Jeff Bezos",
		revenue: 60.7,
		costs: 45.2,
		sharePrice: 1962.46,
		numShares: 123839868
	}

	// Your code goes below: 
	// Make your companies array
	var companies=[tesla, lulu, apple, amazon];


	// Print each company's ticker symbol
	for(var i=0;i<companies.length;i++){
		console.log(companies[i].ticker);
	}




	// Print each company's share price
	for(i=0;i<companies.length;i++){
		console.log(companies[i].sharePrice);
	}




	// Print each company's CEO (using a forEach loop)
	companies.forEach(function(company){
		console.log(company.ceo);
	});



	
	// Calculate the average share price (forEach)
	var avgSharePrice=0;
	companies.forEach(function(company){
		avgSharePrice=avgSharePrice+company.sharePrice;
	});
	avgSharePrice=avgSharePrice/4;
	console.log(avgSharePrice);




	// Calculate the profit
	companies.forEach(function(company){
		company.profit=(company.revenue-company.costs);
	});
	companies.forEach(function(company){
		console.log(company.profit);
	});

	console.log("above is profit***********below is rev");


	// The stock market is crashing! Lower revenues by 50%. 
	companies.forEach(function(company){
		company.revenue=company.revenue*.5;
	});
	companies.forEach(function(company){
		console.log(company.revenue);
	});

	console.log("above rev**********below is incorrect profit");

	companies.forEach(function(company){
		//print each profit
		console.log(company.profit);
	});

	console.log("above is wrong profit**********below is good profit");

	// Make the profit calculation dynamic
	var calculateProfit=function(){
		return (this.revenue-this.costs);
	}
	companies.forEach(function(company){
		company.profit=calculateProfit;
		console.log(company.profit());
	});

	// console.log("REV & COST************");

	// companies.forEach(function(company){
	// 	console.log(company.revenue+" & "+company.costs);
	// });

	console.log("~~~~~~~~~~~~~~");

	//test the profits with changed rev and costs
	companies.forEach(function(company){
		company.revenue=100;
		company.costs=70;
		console.log(company.profit());
	});







});