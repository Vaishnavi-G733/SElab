const http = require('http');
const readline = require('readline');

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to start the server
function startServer(port) {
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    });

    server.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}/`);
    });

    server.on('error', (err) => {
        console.error(`Error starting server: ${err.message}`);
    });
}

// Prompt user for port number
rl.question('Enter the port number to run the server: ', (port) => {
    const portNumber = parseInt(port, 10);
    startServer(portNumber);
    rl.close();
});
