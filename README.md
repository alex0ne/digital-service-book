# DigitalServiceBook

Simple crud application for storing your car service history online. 

## Basic functionality
#### All registered users can:
* Add vehicle info
* Edit vehicle info
* View vehicle info
* Add service history log
* Delete service history log
* List all service history logs

#### Users with admn role can:
* List all registered users
* Delete user accounts

## Models
#### Vehicle:
  * Make
  * Model
  * Production Year
  * Mileage
#### Service Log:
  * Event date
  * Event type / description
  * Cars's mileage

## Modules
  * App module
  * Components module (lazy loaded)
  * Authentication module
  * Routing module

## Services
  * Vehicle service
  * Car-history service
  * Auth service
  * Admin service

## Technology Stack:
Angular, Kinvey BaaS
