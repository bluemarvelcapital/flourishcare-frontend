import { NextApiRequest, NextApiResponse } from "next"
import { createRouter, expressWrapper } from "next-connect"
import express from "express"
import multer from "multer"

const upload = multer({ dest: "uploads/" })

const router = createRouter<NextApiRequest, NextApiResponse>()

router.use(expressWrapper(express.json()))
router.use(expressWrapper(express.urlencoded({ extended: true })))

router.post(
  expressWrapper(async (req, res, next) => {
    console.log("middleware")
    next()
  })
)

router.post("/", async (req, res) => {
  console.log("route")
  res.json({ message: "hello" })
})
