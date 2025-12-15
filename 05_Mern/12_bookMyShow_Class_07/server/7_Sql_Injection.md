## Explanation of SQL Injection.
SQL Injection is a code injection technique that exploits a security vulnerability in an application's software by manipulating the SQL queries made to the database. It typically occurs when user input is improperly sanitized and then included in SQL queries, allowing attackers to execute arbitrary SQL commands.

# Consider a login system where user input directly constructs a SQL query:
Imagine you have a form on your website where users can log in by entering their username and password. In an SQL injection attack, instead of typing a regular username, an attacker types in a sneaky piece of SQL code

# Example Attack Scenario:
const user = await Users.findOne({ username: req.body.username, password: req.body.password });
If no input sanitization is applied, an attacker might send a payload like:
{
  "username": { "$gt": "" },
  "password": { "$gt": "" }
}
In this case, MongoDB will interpret the $gt (greater than) operator as part of the query. As a result, the query will return any user in the database whose username and password are greater than an empty string, effectively bypassing authentication.



## link:
1. https://stackoverflow.com/questions/24843689/whats-the-meaning-of-admin-or-1-1
2. https://portswigger.net/web-security/nosql-injection#:~:text=NoSQL%20operator%20injection,-NoSQL%20databases%20often&text=Examples%20of%20MongoDB%20query%20operators,values%20specified%20in%20an%20array 