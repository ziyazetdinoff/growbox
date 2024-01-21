create database growbox;

use growbox;

CREATE TABLE t_growbox (
    temperature int,
    humidity int,
    acid int,
    r_light int,
    b_light int,
    g_light int,
    day_count int
);


INSERT INTO t_growbox (temperature, humidity, acid, r_light, b_light, g_light, day_count) VALUES (30, 60, 6, 120, 120, 120, 2);