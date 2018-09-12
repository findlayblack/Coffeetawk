console.log('hello world');
//CoffeTawk - by 'Findlay Black' - applab, lab 1, 2018
/*Challenge 1: Assumptions
	1. Larger Demand in Shanghai
	2. The lines are long
	3. takes a minute or more to order
	4. takes 5 minutes to walk out the door
	5. payment is quick
	6. Order-taking process is slow
	7. baristas are fast
	8. most people know what they want
	9. people hold up the line asking questions
	10. losing random customers
Challenge 2: Pseudocode
	1. Measuring demand:
	 have sensors that measure customrs entering the store per day and per week
	2.Wait time
	have two lines: one for customers with questions, one for order-ready customers
	have sensors for each line that measure amount of customers in each line every 20 seconds
	if qustion line has more than five people, send manager alert
	if order-ready line has more than 8 people, send alert for additional help for volume
	always record numbers into file that visualizes data by time waited by number of customers
	3.Walk-out time
	have button that customer has to press to recieve drink or QR code that is given with order scaned
	have sensors on exit door
	record time from button/scan to exit
	if time exceeds 5 minutes, record under potential alert
	confermation to send alert if time reaches 8 minutes
	4. App
	creat app with easy ordering
	when order is placed send customer alert
	alert says 'Your order has been placed, Reccomened pick up time is  current time + 5 if normal wait time
	else add to time time betwween order placed and button/scan - 5 minutes
	After button/scan by customer send alert
	Alert says Thank you for your purchase, you wait time was (recorded time from order placed to scan/button)
	below alert show sad face button, normal face button, and happy face button
	below say 'Please let us know how our service was!'
	record responses per day
Challenge 3: Create a working function */


let Ordered = true;
let Received = true;

if (Ordered === true) {
    console.log (`Thank You for your purchase, Recommened Pick-up time is &{time + 5}.`)

}
if (Received ===true) {
    console.log (`Thank You for your Purchase!
 Please email us with any complaints
-email here-`);

}

