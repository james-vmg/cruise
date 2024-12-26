Split App Building Block

Description
A Building Block for Standard Split Apps to Maintain Various Basic Entities
with standard CRUISE Operations (Create/Read/Update/Search/Delete)

Getting Started
Create a New app of Type "Application" in the App Designer, then add the template using Building Blocks

Dependencies
A full Rest API Definition with the needed operations must already exist and work

Installing
Right-click on the HTML Document Node in the Nepune App Designer and choose "Building Blocks". Navigate to SPLITAPPTEMPLATE

Step-by-step bullets
- If the Elements that belong in folders have been inserted under the HML section, drag them to the Resources section
- Drag the README to the Files Section - you can delete it or add your own documentation later
- Rename all the API definitions/ Forms/ Pages etc. by expanding all elements in the tree view, select all, right-click for rename and do Find (<Entity>) and Replace (Your Entity Name) 
- Map each API definition to the relevant operation of your API designer API
- Delete any API that you are not going to use
- Search and Replace all Code for "<Entity>" and replace with your Entity Name
- Search and Replace all Code for "Entity" and replace with your Entity Name
- Bind the various entities as follows:
    - pageSearch: GetReadResponse
    - pageList: Generic Object
    - Multiodel<YourEntity>List : <YourAPI>>getSearchResponse
    - List<YourEntity>: MultiModel<YourEntity>>/result/MT_YOUR_ENTITY
    - ObjectListItem: Title and Intro to fields of your choice
    - In the Table Setting on the List Page, add whichever neptune.TableSetingSorts you need, name them and name the key for the respective fieldname
- Map the 200 Response of the Search API to the MultiModel<YourEntity>List
- In the ObjectListItem Press Event, ensure that all the key segments of your entity are specified
- In the ButtonSave Press event, ensure that the MS_YOUR_ENTITY is correctly named
- Replace the Titles in all the pages
Authors
VMGLabs Cruise Developers
