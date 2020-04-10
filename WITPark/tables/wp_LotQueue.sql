--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.0

-- Started on 2020-04-08 18:17:42

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
-- TOC entry 209 (class 1259 OID 16556)
-- Name: wp_LotQueue; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."wp_LotQueue" (
    "QueueID" integer NOT NULL,
    "ParkingLots" character varying(20) NOT NULL,
    "UserID" integer NOT NULL
);


ALTER TABLE public."wp_LotQueue" OWNER TO postgres;

--
-- TOC entry 2835 (class 0 OID 16556)
-- Dependencies: 209
-- Data for Name: wp_LotQueue; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."wp_LotQueue" ("QueueID", "ParkingLots", "UserID") FROM stdin;
\.


--
-- TOC entry 2706 (class 2606 OID 16560)
-- Name: wp_LotQueue wp_Lots_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."wp_LotQueue"
    ADD CONSTRAINT "wp_Lots_pkey" PRIMARY KEY ("QueueID");


--
-- TOC entry 2708 (class 2606 OID 16566)
-- Name: wp_LotQueue ParkingLot; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."wp_LotQueue"
    ADD CONSTRAINT "ParkingLot" FOREIGN KEY ("ParkingLots") REFERENCES public."wp_LotOccupancy"("ParkingLot") NOT VALID;


--
-- TOC entry 2707 (class 2606 OID 16561)
-- Name: wp_LotQueue UserID; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."wp_LotQueue"
    ADD CONSTRAINT "UserID" FOREIGN KEY ("UserID") REFERENCES public."wp_Users"("UserID") NOT VALID;


-- Completed on 2020-04-08 18:17:42

--
-- PostgreSQL database dump complete
--

