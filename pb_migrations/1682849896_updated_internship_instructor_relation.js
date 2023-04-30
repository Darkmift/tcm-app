migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4vm0o0jfkui7t9")

  collection.indexes = [
    "CREATE INDEX `_x4vm0o0jfkui7t9_created_idx` ON `internship_instructor_relation` (`created`)",
    "CREATE INDEX `idx_instructorId_internshipId` ON `internship_instructor_relation` (\n  `instructorId`,\n  `internshipId`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x4vm0o0jfkui7t9")

  collection.indexes = [
    "CREATE INDEX `_x4vm0o0jfkui7t9_created_idx` ON `internship_instructor_relation` (`created`)"
  ]

  return dao.saveCollection(collection)
})
