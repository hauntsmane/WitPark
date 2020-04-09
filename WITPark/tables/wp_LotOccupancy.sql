-- 
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.0

-- Started on 2020-04-08 18:18:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16396)
-- Name: wp_LotOccupancy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."wp_LotOccupancy" (
    "ParkingLot" character varying(20) NOT NULL,
    "Occupancy" integer NOT NULL
);


ALTER TABLE public."wp_LotOccupancy" OWNER TO postgres;

--
-- TOC entry 2833 (class 0 OID 16396)
-- Dependencies: 202
-- Data for Name: wp_LotOccupancy; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."wp_LotOccupancy" ("ParkingLot", "Occupancy") FROM stdin;
\.


--
-- TOC entry 2706 (class 2606 OID 16521)
-- Name: wp_LotOccupancy wp_occupancy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."wp_LotOccupancy"
    ADD CONSTRAINT wp_occupancy_pkey PRIMARY KEY ("ParkingLot");


-- Completed on 2020-04-08 18:18:09

--
-- PostgreSQL database dump complete
--

