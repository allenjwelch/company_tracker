CREATE DATABASE tracker;

USE tracker;

CREATE TABLE companies (
    id Int( 11 ) AUTO_INCREMENT NOT NULL,
    name VARCHAR( 255) NOT NULL,
	description VARCHAR(255),
    status VARCHAR( 255 ),
    street_address VARCHAR( 255 ),
    city VARCHAR(255),
    state VARCHAR(255),
    phone VARCHAR(255),
    contact_name VARCHAR(255),
	contact_phone VARCHAR(255),
	financial_revenue_total VARCHAR( 255 ),
	financial_revenue_expected VARCHAR( 255 ),
	financial_earnings_year_1 VARCHAR( 255 ),
	financial_earnings_income_1 VARCHAR( 255 ),
	financial_earnings_year_2 VARCHAR( 255 ),
    financial_earnings_income_2 VARCHAR( 255 ),
	financial_earnings_year_3 VARCHAR( 255 ),
    financial_earnings_income_3 VARCHAR( 255 ),
	financial_earnings_year_4 VARCHAR( 255 ),
    financial_earnings_income_4 VARCHAR( 255 ),
    PRIMARY KEY (id)
);

INSERT INTO companies(name, status, description, street_address, city, state, phone, contact_name, contact_phone, financial_revenue_total, financial_revenue_expected, financial_earnings_year_1, financial_earnings_income_1, financial_earnings_year_2, financial_earnings_income_2, financial_earnings_year_3, financial_earnings_income_3, financial_earnings_year_4, financial_earnings_income_4)
VALUES ('LexCorp', 'Pending Approval', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ducimus?', '123 Main St.', 'Atlanta' , 'Georgia', '123-456-1234', 'Joe Smith', '111-111-2222', '87928', '10000000', '2015', '879834', '2016', '329874', '2017', '9087423', '2018', '897234'),
('Weyland-Yutani', 'Approved', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto quos tempora maiores deleniti quam fuga, iste cupiditate error quod.', '125 Main St.', 'Atlanta' , 'Georgia', '404-222-3434', 'Mike Sanders', '234-456-3333', '7830000', '8000000', '2015', '91283', '2016', '67899', '2017', '123452', '2018', '563478'),
('Umbrella Corporation', 'Declined', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto quos tempora maiores deleniti quam fuga, iste cupiditate error quod.', '125 Main St.', 'Atlanta' , 'Georgia', '404-222-3434', 'Alice', '234-456-3333', '7830000', '8000000', '2015', '555555', '2016', '444444', '2017', '33333', '2018', '22222'),
('Cyberdyne Systems', 'Pending Approval', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto quos tempora maiores deleniti quam fuga, iste cupiditate error quod.', '555 NoneYa St.', 'Los Angeles' , 'California', '999-222-9999', 'Sara Connor', '234-456-3333', '800000', '1000000', '1996', '6384938', '1997', '78394857', '1998', '872839485', '1999', '99999999');
