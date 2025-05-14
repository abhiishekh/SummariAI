import Redis from 'ioredis';

const redis = new Redis(process.env.UPSTASH_REDIS_URL!); // Ensure this env variable is defined

export default redis;
