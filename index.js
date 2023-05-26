//!c использованием пакета yargs
// const contacts = require("./contacts");
// const argv = require("yargs").argv;

// const invokeAction = async ({ action, name, email, phone, id }) => {
//   switch (action) {
//     case "list":
//       const allContacts = await contacts.listContacts();
//       console.log("allContacts", allContacts);
//       break;
//     case "get":
//       const oneContact = await contacts.getContactById(id);
//       console.log("oneContact", oneContact);
//       break;
//     case "add":
//       const newContact = await contacts.addContact(name, email, phone);
//       console.log("newContact", newContact);
//       break;
//     case "remove":
//       const deleteContact = await contacts.removeContact(id);
//       console.log("deleteContact", deleteContact);
//       break;
//     default:
//       console.warn("\x1B[31m Unknown action type");
//   }
// };

// invokeAction(argv);
//! c использованием пакета commander
const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, name, email, phone, id }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log("allContacts", allContacts);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log("oneContact", oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      console.log("newContact", newContact);
      break;
    case "remove":
      const deleteContact = await contacts.removeContact(id);
      console.log("deleteContact", deleteContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type");
  }
};

invokeAction(argv);
