const mongoose = require("mongoose")
const Document = require("./Document")

// ✅ CONNECT TO MONGODB
mongoose.connect(
  " ADD YOUR OWN "
)
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB error ❌", err))

// SOCKET SERVER
const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

const defaultValue = ""

// SOCKET CONNECTION
io.on("connection", socket => {
  console.log("Connected to server 🔌")

  socket.on("get-document", async documentId => {
    console.log("Fetching document:", documentId)

    const document = await findOrCreateDocument(documentId)

    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data })
      console.log("Document saved 💾")
    })
  })
})

// CREATE DOCUMENT IF NOT EXISTS
async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document

  return await Document.create({ _id: id, data: defaultValue })
}
