CREATE TABLE IF NOT EXISTS auction(
id VARCHAR(64) PRIMARY KEY,  
title VARCHAR(255) NOT NULL, 
author VARCHAR(255) NOT NULL,
description VARCHAR(255) NOT NULL,
initial_value INT NOT NULL,
bid_progression INT NOT NULL,
bid_value INT NOT NULL DEFAULT 0,
expiration_date DATE
);