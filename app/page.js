'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import {firestore} from "@/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Box, Typography } from "@mui/material";
import { Fascinate } from "next/font/google";

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState([false])
  const [itemName, setItemName] = useState([])

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
  }
  return <Box>
    <Typography variant="h2">
      Inventory Management
    </Typography>
  </Box>
}