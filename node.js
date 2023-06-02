const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'pointsdb';
const collectionName = 'points';

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to increment points
app.post('/api/increment', (req, res) => {
    const team = req.body.team;

    // Connect to MongoDB
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Find the document and increment the appropriate count
        collection.findOneAndUpdate(
            {},
            { $inc: { [`count${team}`]: 1 } },
            { returnOriginal: false },
            (err, result) => {
                if (err) {
                    console.error('Error incrementing count:', err);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }

                const counts = result.value;
                res.json({ count1: counts.count1, count2: counts.count2 });
                client.close();
            }
        );
    });
});

// Endpoint to fetch current counts
app.get('/api/counts', (req, res) => {
    // Connect to MongoDB
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Find the document and return the counts
        collection.findOne({}, (err, result) => {
            if (err) {
                console.error('Error fetching counts:', err);
                res.status(500).json({ error: 'Internal server error' });
                return;
            }

            const counts = result || { count1: 0, count2: 0 };
            res.json({ count1: counts.count1, count2: counts.count2 });
            client.close();
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
