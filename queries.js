// Basic CRUD Operations
// Find all Fiction books
db.books.find({ genre: "Fiction" }).pretty()

// Find books published after 2000
db.books.find({ published_year: { $gt: 2000 } }).pretty()

// Update the price of "1984" to 11.99
db.books.updateOne({ title: "1984" }, { $set: { price: 11.99 } })

// Delete "The Great Gatsby"
db.books.deleteOne({ title: "The Great Gatsby" })

// Advanced Queries
// Find in-stock books published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } }).pretty()

// Show only title and author (projection)
db.books.find({}, { title: 1, author: 1, _id: 0 }).pretty()

// Sort books by price (ascending)
db.books.find().sort({ price: 1 }).pretty()

// Aggregation Pipeline
// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
])

// Indexing
// Create an index on title
db.books.createIndex({ title: 1 })