'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { Firestore } from "firebase/firestore";
import { Box, Typography } from "@mui/material";
import { Fascinate } from "next/font/google";

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState([false])
  const [itemName, setItemName] = useState([])
  return <Box>
    <Typography variant="h2">
      Inventory Management
    </Typography>
  </Box>
}