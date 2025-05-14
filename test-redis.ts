import Redis from 'ioredis';

const redis = new Redis(process.env.UPSTASH_REDIS_URL!); // Use the environment variable for Redis URL

// Test the connection
const testConnection = async () => {
  try {
    // Set a test key-value pair in Redis
    await redis.set("testKey", "testValue");

    // Get the test key's value
    const value = await redis.get("testKey");

    // Log the result to check if the connection is working
    console.log("Test Redis value:", value); // Should log: "testValue"

    // Optionally, delete the test key to clean up
    await redis.del("testKey");
  } catch (err) {
    console.error("Redis connection error:", err);
  } finally {
    // Close the connection after the test
    redis.disconnect();
  }
};

testConnection();
