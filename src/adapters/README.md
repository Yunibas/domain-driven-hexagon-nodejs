# Adapters

Adapters communicate directly with external systems such text files, databases and RESTful APIs.

## Calling Components

Adapters are called by Repositories.

## Called Components

Adapters talk to external systems and do not interface with other components.

##  Available Adapters

### Firestore Adapter

Adapter to interface with Google Firestore service.  This adapter supports most of the methods to provided by the Google Firebase SDK.

Limitations:
- Currently only top-level collections are supported (no subcollections)