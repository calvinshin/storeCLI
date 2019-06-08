# storeCLI
A command line interface that uses SQL to interact with a database of items. 

A video is available for download here: 
https://github.com/calvinshin/storeCLI/blob/master/assets/sample/Customer%20Video.mp4

## General Architecture
The application uses modules to separate functionality into different javascript files. The intention is to be able to connect to the application with different types of logins. 

The application currently has a customer interface. The customer can do the following:
- Browse through inventory
- Purchase items

## Login

![Password Code](/assets/sample/PasswordCheck.png)

The user is first prompted to log into the application. The prompts are established using inquirer, and the responses are used to query the SQL database for passwords.
If the user selects the correct password, the user is stored and is redirected to an interface dependent on their user profile. 

## SQL Tables

There are three tables for the application
- Item List
-- This stores all items used in the application.
- Accounts
-- This stores the usernames, passwords, and profile details for the application.
- Transactions
-- When an item is purchased, a transaction is created to store the purhcase.

## Customer Interface

### Product List

![Product Example](/assets/sample/productList.png);

The customer is shown a list of available items in the store and prompted if they want to buy an item. This functionality is done using console.table.

### Buying an Item

A customer is allowed to choose the item number of type in the name of the product they wish to buy. 

![Item purchased](/assets/sample/purchase.png);
