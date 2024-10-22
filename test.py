import psycopg2

conn = psycopg2.connect(database="EngrishDatabase",
                        host="127.0.0.1",
                        user="Engrish-Researchers",
                        password="putanginanyo",
                        port="5432")
