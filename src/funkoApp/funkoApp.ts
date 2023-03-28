import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  addFunko,
  updateFunko,
  removeFunko,
  listFunkos,
  showFunko,
} from "./funkoCommands";

yargs(hideBin(process.argv))
  .command(
    "add",
    "Add a funko",
    {
      user: {
        description: "User's name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Funko name",
        type: "string",
        demandOption: true,
      },
      type: {
        description: "Funko type",
        type: "string",
        demandOption: true,
      },
      genre: {
        description: "Funko genre",
        type: "string",
        demandOption: true,
      },
      description: {
        description: "Funko description",
        type: "string",
        demandOption: false,
      },
    },
    addFunko
  )
  .command(
    "update",
    "Update a funko",
    {
      user: {
        description: "User's name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
      name: {
        description: "Funko name",
        type: "string",
        demandOption: false,
      },
      type: {
        description: "Funko type",
        type: "string",
        demandOption: false,
      },
      genre: {
        description: "Funko genre",
        type: "string",
        demandOption: false,
      },
      description: {
        description: "Funko description",
        type: "string",
        demandOption: false,
      },
    },
    updateFunko
  )
  .command(
    "remove",
    "Remove a funko",
    {
      user: {
        description: "User's name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    removeFunko
  )
  .command(
    "list",
    "List all funkos",
    {
      user: {
        description: "User's name",
        type: "string",
        demandOption: true,
      },
    },
    listFunkos
  )
  .command(
    "show",
    "Show a specific funko",
    {
      user: {
        description: "User's name",
        type: "string",
        demandOption: true,
      },
      id: {
        description: "Funko ID",
        type: "number",
        demandOption: true,
      },
    },
    showFunko
  )
  .help()
  .argv;
