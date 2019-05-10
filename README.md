# Arrays of Objects

### So far, we've spent some time working with objects and also with arrays. We've looped through both of them individually, but now let's put them together. 

- If you look in the script.js file, you'll see there are 4 objects already created for you. These objects represent companies currently trading in the stock market. 

1. Create a new variable called `companies` and set it equal to an array containing all the objects. 

1. Write a for-loop that loops through the `companies` array console logging each company's `ticker` symbol. 

1. Write a for-loop that loops through the `companies` array console logging each company's share price. 

1. There are other ways to write for-loops in JavaScript. Check out the [for-each loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) and see if you can write a for-each loop to print out the names of the CEOs of every company. 

1. Write a for-each loop to calculate the average share price of the 4 companies. Set this value equal to a variable called `avgSharePrice`; 

1. Write a for-loop (either way we've learned) to calculate the profit of each company (revenue - costs). While still inside the for-loop, add the property `profit` to each company and set it equal to that company's profit. Then, `console.log` all the companies to make sure your code worked!

1. UH OH! The stock market is crashing! Revenues have dropped by 50% overnight! Write a for-loop to reduce the revenue of each company by 50%. Print out all the companies again and make sure their revenues have declined. Sometimes it's helpful to add separators to our `console.log` statements so we can read them more easily. Adding a statement like this: `console.log("*********");` will give us a reference point when looking at the console.

1. Write a for-loop to print out the profit of each company. Are these profits still accurate? They probably aren't, but don't go back and change our objects! 

1. Instead, what we need to do is make the `profit` property a function that calculates the value at the exact moment we need the information. Take a look at what is called an [anonymous function](https://www.w3schools.com/js/js_function_definition.asp) – read the section called **"Function Expressions"** to see how we can save our functions in a variable. Next, create an anonymous function called `calculateProfit` as shown below. This will be the function that dynamically calculates our profit (set the return value as 0 for now). 
		```
			var calculateProfit = function() {
				return 0;
			};
		```

1. We'll be attaching this function to our `profit` property, so write a for-loop that sets the value of our `profit` property to our `calculateProfit` function. Loop through all the companies and `console.log` their profits. Each company should print out a profit of 0 since we hard-coded 0 in our `calculateProfit` function. 

1. Now, let's build out the correct calculation for our profit (revenue - costs). *Hint* You will need to use JavaScript's `this` function to get the revenue/costs of each company in our `calculateProfit` function. 

1. Loop through our companies again and print out their newly-generated profits. Change the revenue or costs for a couple of companies and see if their profits change as well. 

