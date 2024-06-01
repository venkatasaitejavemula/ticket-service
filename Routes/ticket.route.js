const express = require("express");
const {
  getAllTickets,
  getTicketById,
  updateTicketById,
  createTicket,
} = require("../controller/ticket.controller");

const ticketRouter = express.Router();

ticketRouter.post("/create-ticket", createTicket);

ticketRouter.get("/findAll", getAllTickets);

ticketRouter.get("/find-ticket/:id", getTicketById);

ticketRouter.put("/update-ticket/:id", updateTicketById);

module.exports = ticketRouter;
