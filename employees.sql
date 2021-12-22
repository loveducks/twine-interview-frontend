--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4 (Debian 13.4-4.pgdg100+1)
-- Dumped by pg_dump version 14.0 (Debian 14.0-1.pgdg100+1)

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

--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employees (id, name, "position", rehire_eligible, voluntary, terminated_date, termination_reason, profile_link, email, "createdAt", "updatedAt") VALUES (0, 'Tim', 'Senior Software Engineer', true, true, '23 March 2021', NULL, 'https://linkedin.com', 'tim@gmail.com', '2021-12-21 21:48:17.657+05:30', '2021-12-21 21:48:17.657+05:30');
INSERT INTO public.employees (id, name, "position", rehire_eligible, voluntary, terminated_date, termination_reason, profile_link, email, "createdAt", "updatedAt") VALUES (1, 'Bob', 'Senior Software Engineer', true, false, '22 March 2021', NULL, 'https://linkedin.com', 'bob@gmail.com', '2021-12-21 21:48:17.657+05:30', '2021-12-21 21:48:17.657+05:30');
INSERT INTO public.employees (id, name, "position", rehire_eligible, voluntary, terminated_date, termination_reason, profile_link, email, "createdAt", "updatedAt") VALUES (2, 'Susan', 'Senior Software Engineer', true, true, '22 March 2021', 'Left because of a new opportunity', 'https://linkedin.com', 'susan@gmail.com', '2021-12-21 21:48:17.657+05:30', '2021-12-21 21:48:17.657+05:30');
INSERT INTO public.employees (id, name, "position", rehire_eligible, voluntary, terminated_date, termination_reason, profile_link, email, "createdAt", "updatedAt") VALUES (3, 'De Gea', 'Senior Software Engineer', false, true, '23 March 2021', NULL, 'https://linkedin.com', 'de_gea@gmail.com', '2021-12-21 21:48:17.657+05:30', '2021-12-21 21:48:17.657+05:30');
INSERT INTO public.employees (id, name, "position", rehire_eligible, voluntary, terminated_date, termination_reason, profile_link, email, "createdAt", "updatedAt") VALUES (4, 'Pogba', 'Senior Software Engineer', false, true, '22 March 2021', NULL, 'https://linkedin.com', 'pogba@gmail.com', '2021-12-21 21:48:17.657+05:30', '2021-12-21 21:48:17.657+05:30');
INSERT INTO public.employees (id, name, "position", rehire_eligible, voluntary, terminated_date, termination_reason, profile_link, email, "createdAt", "updatedAt") VALUES (5, 'Liam', 'Senior Software Engineer', false, true, '22 March 2021', NULL, 'https://linkedin.com', 'Liam@gmail.com', '2021-12-21 21:48:17.657+05:30', '2021-12-21 21:48:17.657+05:30');
INSERT INTO public.employees (id, name, "position", rehire_eligible, voluntary, terminated_date, termination_reason, profile_link, email, "createdAt", "updatedAt") VALUES (6, 'Juan', 'Senior Software Engineer', NULL, true, '23 March 2021', NULL, 'https://linkedin.com', 'juan@gmail.com', '2021-12-21 21:48:17.657+05:30', '2021-12-21 21:48:17.657+05:30');


--
-- PostgreSQL database dump complete
--

