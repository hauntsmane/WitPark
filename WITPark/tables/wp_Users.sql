--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.0

-- Started on 2020-04-13 18:05:44

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
-- TOC entry 203 (class 1259 OID 16401)
-- Name: wp_Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."wp_Users" (
    "UserID" integer NOT NULL,
    "UserName" character varying(20) NOT NULL,
    "NotificationsEnabled" boolean NOT NULL,
    pass character varying(20) NOT NULL
);


ALTER TABLE public."wp_Users" OWNER TO postgres;

--
-- TOC entry 2833 (class 0 OID 16401)
-- Dependencies: 203
-- Data for Name: wp_Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."wp_Users" ("UserID", "UserName", "NotificationsEnabled", pass) FROM stdin;
\.


--
-- TOC entry 2706 (class 2606 OID 16405)
-- Name: wp_Users wp_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."wp_Users"
    ADD CONSTRAINT wp_users_pkey PRIMARY KEY ("UserID");


-- Completed on 2020-04-13 18:05:44

--
-- PostgreSQL database dump complete
--

