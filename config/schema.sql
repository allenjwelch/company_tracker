CREATE DATABASE tracker; 

USE tracker; 

CREATE TABLE companies (
    id Int( 11 ) AUTO_INCREMENT NOT NULL,
    name VARCHAR( 255) NOT NULL,
	description VARCHAR(255), 
    status VARCHAR( 255 ) NOT NULL,
    street_address VARCHAR( 255 ),
    city VARCHAR(255), 
    state VARCHAR(255), 
    phone VARCHAR(255), 
    contact_name VARCHAR(255), 
	contact_phone VARCHAR(255), 
	financial_revenue INT(11), 
	financial_earnings INT(11), 
    PRIMARY KEY (id) 
);

INSERT INTO companies(name, status, description, street_address, city, state, phone, contact_name, contact_phone, financial_revenue, financial_earnings)
VALUES ('LexCorp', 'Pending', 'Primary target', '123 Main St.', 'Atlanta' , 'Georgia', '123-456-1234', 'Joe Smith', '111-111-2222', 10000000, 20000000),
('Another Company', 'Pending', 'Secondary target', '125 Main St.', 'Atlanta' , 'Georgia', '404-222-3434', 'Mike Sanders', '234-456-3333', 5400000, 80000);