// Closure example
function createTicketBooker(availableTickets) {
  return function (ticketsToBook) {
    if (availableTickets >= ticketsToBook) {
      availableTickets -= ticketsToBook;
      console.log(`${ticketsToBook} ticket(s) booked successfully!`);
    } else {
      console.log(`Sorry, only ${availableTickets} ticket(s) are available.`);
    }
  };
}

const bookTicket = createTicketBooker(5);
bookTicket(2); // 2 ticket(s) booked successfully!
bookTicket(4); // Sorry, only 3 ticket(s) are available.

// Higher-order function example
function withLogging(func) {
  return function (...args) {
    console.log(`Function ${func.name} called with arguments:`, ...args);
    const result = func(...args);
    console.log(`Function ${func.name} returned:`, result);
    return result;
  };
}

function calculateTotalPrice(price, taxRate) {
  return price * (1 + taxRate);
}

const calculateTotalPriceWithLogging = withLogging(calculateTotalPrice);
calculateTotalPriceWithLogging(100, 0.1); 

// Logs: "Function calculateTotalPrice called with arguments: 100 0.1", "Function calculateTotalPrice returned: 110"

// Currying example
function add(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

const addWithCurrying = add(2)(3);
addWithCurrying(4); // 9
