const express = require("express");
const {
  getAllTickets,
  getTicketById,
  updateTicketById,
  createTicket,
  deleteTicket,
} = require("../Controller/ticket.controller");

const ticketRouter = express.Router();

ticketRouter.post("/create-ticket", createTicket);

ticketRouter.get("/findAll", getAllTickets);

ticketRouter.get("/find-ticket/:id", getTicketById);

ticketRouter.put("/update-ticket/:id", updateTicketById);

ticketRouter.delete("/delete-ticket", deleteTicket);

module.exports = ticketRouter;
