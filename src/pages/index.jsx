import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { Container, Row, Col } from "react-bootstrap";
import { MyContainer } from "@/components/MyContainer";
import { MyNavbar } from "@/components/MyNavbar"
import { Footer } from "@/components/Footer"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <MyNavbar/>
      <MyContainer/>
      <Footer/>
    </>
  );
}
