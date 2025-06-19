Feature: Search Flights

Background: Background name
    Given User is on the Flights page
    
    @Test
    Scenario: Verify Search Flights Functionality
        Given User is on the Flights search page
        When User enter valid data in the search page
        Then User should get list of Flights


    @smoke
    Scenario: Verify Search Flights2 Functionality
        Given User is on the Flights search page
        When User enter valid data in the search page
        Then User should get list of Flights