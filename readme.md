# Mock factory

## Notes

I often find that I have to mock data in my unit test.
To make this a bit easier I created a setup that allows me to quickly override properties in a mocked data structure.

This makes it easy to change the properties I care about in the test and ignore the rest without having to repeatedly create new mock data.
