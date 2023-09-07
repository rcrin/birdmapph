import { connectToDB } from "@/utils/database";
import Species from "@/models/species";
import Genera from "@/models/genera";

export const GET = async (req: Request) => {
  try {
    await connectToDB();
    const speciesList = await Species.find().populate({
      path: "genusId",
      model: Genera,
      select: { genusName: 1 },
    });

    return new Response(JSON.stringify(speciesList), { status: 200 });
  } catch (error) {
    console.log(error);
    //return new Response("Failed to fetch all birds", { status: 500 });
  }
};
