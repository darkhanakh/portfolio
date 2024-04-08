import fsPromises from "fs/promises";
import path from "path";

export interface Experience {
  position: string;
  start_date: string;
  end_date: string;
  organization: string;
  location: string;
  responsibilities: string[];
}

async function getExperience() {
  // Get the path of the json file
  const filePath = path.join(
    process.cwd(),
    "lib/getExperience/experience.json"
  );
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath);
  // Parse data as json
  const objectData = JSON.parse(jsonData.toString());

  return objectData as Experience[];
}

export default getExperience;
