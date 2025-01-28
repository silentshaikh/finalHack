import { createClient } from "@sanity/client";
import axios from "axios";
import path from "path";
import "dotenv/config";

// Initialize Sanity Client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity Project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Dataset name (e.g., production)
  apiVersion: "2025-01-25",                           // API version
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN,    // Write token
  useCdn: false,                                      // Disable CDN for write operations
});

// Fetch Data from Mock API
const fetchMockApiData = async () => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_MOCK_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
};

// Download Image and Return Image Asset
const uploadImageToSanity = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" }); // Get image as binary data
    const buffer = Buffer.from(response.data); // Convert binary data to Buffer
    const fileName = path.basename(imageUrl);

    // Upload image to Sanity
    const asset = await client.assets.upload("image", buffer, { filename: fileName });
    return asset._id; // Return the image asset ID
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null; // Return null if the upload fails
  }
};

// Migrate Data to Sanity
const migrateDataToSanity = async () => {
  const data = await fetchMockApiData();

  for (const item of data) {
    try {
      // Upload image to Sanity and get its ID
      const imageId = await uploadImageToSanity(item.productimage);

      // Prepare Sanity document
      const sanityDocument = {
        _type: "productlist",
        id: item.id,
        productname: item.productname,
        category: item.category,
        productimg: imageId ? { _type: "image", asset: { _ref: imageId } } : null,
        description: item.description,
        price: item.price,
        discount: item.discount,
        stock: item.stock,
        tags: item.tags,
        productcolors: item.productcolors,
        productsizes: item.productsizes,
        rating: item.rating,
        reviewlist: item.reviewlist,
        createdAt: item.createdAt || new Date().toISOString(),
        updatedAt: item.updatedAt || new Date().toISOString(),
      };

      // Create or update the document in Sanity
      const result = await client.createOrReplace({
        _id: `product-${item.id}`, // Unique document ID (e.g., `product-5`)
        ...sanityDocument,
      });

      console.log(`Migrated product: ${result.id}`);
    } catch (error) {
      console.error("Error migrating product:", error.message);
    }
  }
};

// Execute Migration
migrateDataToSanity()
  .then(() => console.log("Migration complete!"))
  .catch((error) => console.error("Migration failed:", error.message));
