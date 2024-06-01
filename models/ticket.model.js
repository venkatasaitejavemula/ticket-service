const mongoose = require("mongoose");

const TicketsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Ticket Name is Mandatory"],
    },
    type: {
      type: String,
      required: [true, "Type is Mandatory"],
    },
    priortiy: {
      type: String,
      required: [true, "Priortiy is Mandatory"],
    },
    description: {
      type: String,
    },
    createdBy: {
      type: String,
    },
    lastUpdatedBy: {
      type: String,
    },
    assignee: {
      type: String,
    },
    status: {
      type: String,
      required: [true],
      default: "Todo",
    },
  },
  { timestamps: true }
);

const TicketsModel = mongoose.model("Tickets", TicketsSchema);

module.exports = { TicketsModel };
