"use strict";

const commands = require("./commands");

let args = process.argv.slice(2);

let argly = require("argly")
  .createParser({
    "--help": {
      type: "string",
      description: "Show this help message",
    },
    "--dir -d": {
      type: "string",
      description: "Directory that contains the DynamoDB migrations",
      defaultValue: process.cwd(),
    },
    "--migration -m": {
      type: "string",
      description: "Name of the migration to create",
    },
  })
  .usage("Usage: dynograte [options]")
  .example(
    "Create a migration file",
    "dynograte create --dir ~/Proj/dynomodb-migrations --migration update-users-table"
  )
  .validate(function (result) {
    if (result.help) {
      this.printUsage();
      process.exit(0);
    }
  })
  .onError(function (err) {
    this.printUsage();
    console.error(err);
    process.exit(1);
  });

if (args.length < 1) {
  argly.printUsage();
  process.exit(1);
} else {
  let command = commands[args[0]];
  if (!command) {
    argly.printUsage();
    process.exit(1);
  } else {
    args.shift();
    command(argly.parse(args));
  }
}
