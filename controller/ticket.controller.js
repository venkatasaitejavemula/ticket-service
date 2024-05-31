const TicketsModel = require("../Models/ticket.model");

const getAllTickets = async (req, res) => {
  try {
    const tickets = await TicketsModel.find({});
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await TicketsModel.findById(id);
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await TicketsModel.findByIdAndUpdate(id, req.body);
    if (!ticket) {
      res.status(400).json({ message: "Ticket not Found" });
    } else {
      let updatedTicket = await TicketsModel.findById(id);
      res.status(200).json(updatedTicket);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTicket = async (req, res) => {
  try {
    const ticket = await TicketsModel.create(req.body);
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTickets,
  getTicketById,
  updateTicketById,
  createTicket,
};
