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
      ref: 'Users',
    },
    lastUpdatedBy: {
      type: String,
      ref: 'Users',
    },
    assignee: {
      type: String,
      ref: 'Users',
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
