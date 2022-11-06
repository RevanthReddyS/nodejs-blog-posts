import { existsSync, promises } from "fs";

/**
 * Class which acts as a small embedded databas and can store the data using `write()`.
 * You can optionally pass a generic Schema type to work with a typed data prop.
 *
 * @example
 * // Define schema
 * type Schema = {
 *   notes: { id: number; note: string }[]
 * }
 *
 * // Initialize db by passing JSON file path
 * const db = new TinyDb<Schema>(path.join(__dirname, "db.json"))
 *
 * // Update the data with the one in the JSON file
 * await db.read()
 *
 * // Initialize the data in case no file is present or data is still falsy
 * db.data ||= { notes: [] }
 *
 * // Retrieve the note with ID = 3
 * const note = db.data.notes.find(x => x.id === 3)
 *
 * // Store a new note
 * db.data.notes.push({ id: 10, note: 'Lorem ipsum' })
 *
 * // After editing the `data` prop, don't forget to save the changes to disk!
 * await db.write()
 */
export default class TinyDb<Schema extends Record<string, unknown>> {
  data: Schema | null = null;

  /**
   * Initialize a new TinyDb instance.
   *
   * @param {string} filePath - Path of the JSON file used to store the data.
   */
  constructor(private filePath: string) {}

  /**
   * Retrieve the data stored in the JSON file.
   *
   * @returns {void}
   */
  async read() {
    if (existsSync(this.filePath)) {
      this.data = JSON.parse(
        await promises.readFile(this.filePath, { encoding: "utf-8" })
      );
    }
  }

  /**
   * Write the data to the JSON file.
   *
   * @returns {void}
   */
  async write() {
    await promises.writeFile(this.filePath, JSON.stringify(this.data), {
      encoding: "utf-8",
    });
  }
}
