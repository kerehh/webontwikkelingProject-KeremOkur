import * as rl from "readline-sync";
import { type Auto } from "./interfaces.js";
import * as fs from "fs";
import * as path from "path";

const autos: Auto[] = JSON.parse(
  fs.readFileSync(path.join(__dirname, "autos.json"), "utf-8")
);
 
function toonOverzicht(): void {
  console.log();
  for (const auto of autos) {
    console.log(`- ${auto.model} ${auto.generatie} (${auto.id})`);
  }
  console.log();
}
 
function toonDetail(auto: Auto): void {
  const { motor } = auto;
 
  console.log();
  console.log(`- ${auto.model} ${auto.generatie} (${auto.id})`);
  console.log(`  - Beschrijving: ${auto.beschrijving}`);
  console.log(`  - Jaar: ${auto.jaar}`);
  console.log(`  - Prijs: € ${auto.prijs.toLocaleString("nl-BE")}`);
  console.log(`  - In productie: ${auto.inProductie}`);
  console.log(`  - Productiestart: ${auto.productiestart}`);
  console.log(`  - Afbeelding: ${auto.afbeelding}`);
  console.log(`  - Categorie: ${auto.categorie}`);
  console.log(`  - Kenmerken: ${auto.kenmerken.join(", ")}`);
  console.log(`  - Motor: ${motor.code}`);
  console.log(`    - Id: ${motor.id}`);
  console.log(`    - Cilinders: ${motor.cilinders}`);
  console.log(`    - Cilinderinhoud: ${motor.cilinderinhoudCc} cc`);
  console.log(`    - Aspiratie: ${motor.aspiratie}`);
  console.log(`    - Vermogen: ${motor.vermogenPk} pk`);
  console.log(`    - Introductiejaar: ${motor.introductiejaar}`);
  console.log();
}
 
function filterOpId(): void {
  const invoer = rl.question("Geef het ID in waarop je wilt filteren: ").trim();
  const id = Number(invoer);
  const auto =
    invoer !== "" && Number.isInteger(id)
      ? autos.find((a) => a.id === id)
      : undefined;
 
  if (auto) {
    toonDetail(auto);
  } else {
    console.log(`\nGeen auto gevonden met ID "${invoer}".\n`);
  }
}
 
function main(): void {
  console.log("Welkom bij de JSON data viewer!");
 
  let doorgaan = true;
  while (doorgaan) {
    console.log();
    console.log("1. Alle data tonen");
    console.log("2. Filteren op ID");
    console.log("3. Afsluiten");
    console.log();
 
    const keuze = rl.question("Maak een keuze: ").trim();
 
    switch (keuze) {
      case "1":
        toonOverzicht();
        break;
      case "2":
        filterOpId();
        break;
      case "3":
        console.log("\nTot ziens!");
        doorgaan = false;
        break;
      default:
        console.log("\nOngeldige keuze, kies 1, 2 of 3.");
    }
  }
}
 
main();