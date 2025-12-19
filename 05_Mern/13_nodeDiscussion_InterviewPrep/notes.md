## Asynchronous I/O Operations

1. Non-Blocking Nature: In Node.js, operations like reading from a file,
querying a database, or making an HTTP request are typically
I/O-bound and are handled asynchronously. This means the Node.js
event loop can start an I/O operation, and while waiting for the result,
continue to execute other parts of the code or handle new requests.


2. Event-Driven Architecture: When an asynchronous I/O operation is
completed, Node.js uses events or callbacks to signal the completion.
The result of the operation is then processed in a non-blocking way,
ensuring that the server remains responsive to other incoming
requests.

3. Concurrency: This model allows Node.js to handle a large number of
concurrent operations efficiently, as it does not have to create new
threads for each I/O request. The server remains responsive even
under a high load of asynchronous tasks.

## CPU-Intensive Tasks

Blocking Nature: CPU-bound tasks, like complex calculations (e.g.,
recursive Fibonacci, prime number calculation), require significant CPU time and are
processed in the main thread. This type of task blocks the event loop,
preventing Node.js from handling any other task or request until the
computation is complete.

Impact on Performance: When the main thread is busy with a
CPU-heavy task, it can't process new requests, read from a file, or
handle any I/O operations. This leads to a bottleneck, resulting in slow
response times and potentially causing the server to become
unresponsive.

## Child Process
Child processes in Node.js allow you to perform operations in
separate processes, which can be useful for CPU-intensive tasks
or when you need to interact with the system at a lower level.

# With a child process , we can do 4 type of things

1. Exec -> can run any shell command
2. execFile -> run any compiled file
3. spawn -> create a new process and run a different programs 
     c.1 -> stream the output and error stream of that process
     c.2 -> generally used for long lived process
4. fork -> create a new node process and run a different node program
    d.1 -> copy of parent node process
    d.2 -> communication between parent and child process
    d.3 IPC -> inter process communication

link: https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/


## Multi Thread:
The Thread Pool can run tasks in parallel and therefore takes care of more cumbersome tasks such as access to the file system and very demanding processes such as for example video conversions or cryptography.

Full-featured event loop backed by epoll, kqueue, IOCP, event ports.
    - Libuv's event loop is like a control center that manages different tasks efficiently, depending on what OS we are using
    - epoll, kqueue, IOCP, and event ports are all mechanisms provided by different operating systems to handle asynchronous I/O operations.
    - Epoll used by linux
    - Iocp - microsoft
    - Kqueue is found in BSD systems, including macOS
    - Libuv provides a robust event loop mechanism that is compatible with various system-level asynchronous I/O operations ( reading / writing files, database operations , etc)

## When can Nodejs said to be multithreaded or when does libuv offer multithreading support to node

    - While Node.js's main execution thread is single-threaded, it offloads certain I/O-intensive and CPU-intensive tasks to a thread pool managed by Libuv.
    - This allows operations like DNS lookups, file system processing, cryptographic computations, and zlib compression to be processed in parallel, without blocking the main event loop.
    - For the mentioned tasks, Node.js uses its worker pool to behave in a multi-threaded manner
    - The threads that we see in the activity monitor are part of Node.js's internal thread pool, which it uses to perform various tasks that are offloaded from the main thread

## Order of execution:

    - Application Code Execution: You write JavaScript code that is executed by the V8 engine.
    - V8 Engine: It compiles JavaScript into machine code.
    - Node Bindings: These serve as a bridge between your JavaScript code and Node.js's C/C++ core functionalities.
    - Libuv & Other C/C++ Modules: If the JavaScript code requires it, Node.js will use Libuv for handling I/O tasks or other C/C++ libraries for things like cryptographic functions.
    - Callback to V8: Once the I/O or other operations are complete, the results are passed back to V8, often through callbacks.
    - Application Code: Finally, the callback or result is returned to your application code for further processing or response to the client.


## The Node.js Event Loop:
- https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
