# Project Documentation - Insurance Calculator

## Idea

The idea behind this project is to create a tool that allows users to calculate the optimal insurance coverage for their household belongings. Users can input their household items and receive an estimated value based on two calculation methods: the square meter model, where the square meter of living space is multiplied by a flat rate, and the insurance model, which estimates the value of individual items based on average prices. Once the total value is calculated, users can determine the appropriate insurance coverage amount with a buffer to avoid underinsurance. Additionally, users can input information about a damage event, such as water or fire damage. Based on the previous inputs, the tool calculates the damage amount and the corresponding insurance payout.

## Problem Statement

| Customers/Users                                                     | Problems                                                                                  | Solution Approaches                                                                                                                           | Metrics                                                                                | Stakeholders                                          | Constraints | Risks                                                         |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| Individuals looking to purchase insurance                           | Lack knowledge about insurance, limited budget                                              | Game that explains home insurance, forms to calculate optimal insurance coverage amount                                                         | At least 5 individuals confirming the comprehensibility of the game, at least 5 insurance coverage amount suggestions                         | Test participants, data protection authorities           | ?           | Not all individuals find games as effective educational tools |
| Individuals who already have insurance                               | Unsure about the actual value of their household belongings, unaware of coverage percentage | Table of items with average prices for calculating the insurance value, calculation based on the square meter model, graphics showing scenarios | At least 50 item prices, minimum of 5 cities with square meter prices, minimum of 3 modeled scenarios based on the provided data                   | Item providers, real estate, data protection authorities | ?           | Average prices may not be accurate                            |
| Individuals seeking to determine whether it's worth reporting a claim | Unaware of the coverage percentage for the reported damage                                   | Graphics showing various damage scenarios, recalculate insurance coverage amount based on the insurance situation                             | Minimum of 3 scenarios modeled and presented based on the provided data, minimum of 5 insurance coverage amount suggestions                     | Data protection authorities                              |             | The damage scenarios may be far from reality                 |

## User Story

The user visits the website and lands on a landing page where they can choose from different options, such as calculating insurance coverage, accessing the damage calculator, or playing an informational game about home insurance. The user selects the damage calculator and is prompted to provide various information about their insurance, such as the coverage amount, insurance value, and the amount of damage. They can enter the damage amount as a specific value or choose from a predefined table of average values for different items. If the item is not listed in the table, there is an option to enter the affected square meters. Once all the necessary data is entered, the user clicks on "Calculate." A graph is displayed showing the percentage of coverage and the recommended insurance coverage amount for optimal damage coverage. The user can also generate a PDF of this overview.

## Key Screens

#### Landing Page

![Screen1](./Screen1.png)

#### Damage Calculator Screen 1

![Screen2](./Screen2.png)

#### Damage Calculator Screen 2

![Landing Page](./Screen3.png)

## System Diagram

![System Diagram](./Systemdiagramm_Versicherungsrechner.drawio.png)

## Reflection

I took on a bit too much for this project. The login feature and data storage associated with it for the insurance coverage calculator might be unnecessary. However, I wanted to incorporate Firebase into the project. I should have planned the styling in more detail, but my focus was primarily on functionality for this project.

Nevertheless, I succeeded in implementing my ideas as planned, despite taking on a bit too much. Additionally, I never reached a point where I didn't know how to proceed. I was able to apply my knowledge and further deepen my understanding of certain concepts.
