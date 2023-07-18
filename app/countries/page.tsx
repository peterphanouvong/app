import { db } from "@/db";
import { Country, countries } from "@/db/schema";
import { revalidateTag } from "next/cache";

async function getCountries() {
  const res = await fetch(`http://localhost:3000/api/countries`, {
    next: { tags: ["countries"] },
  });
  const data: Country[] = await res.json();
  return data;
}

export default async function Page() {
  const data = await getCountries();

  const addItem = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");

    if (typeof name != "string") throw new Error("Invalid input.");

    try {
      db.insert(countries)
        .values({
          name,
        })
        .run();
    } catch (error) {
      throw new Error(error as string);
    }

    revalidateTag("countries");
  };

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>

      <form action={addItem}>
        <input type="text" name="name" />
        <button type="submit">Add country</button>
      </form>
    </div>
  );
}
