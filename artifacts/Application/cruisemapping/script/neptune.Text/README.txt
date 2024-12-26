Split App Building Block

Description
A Building Block for Standard Split Apps to Maintain Various Basic Entities
with standard CRUISE Operations (Create/Read/Update/Search/Delete)

Getting Started
Create a New app of Type "Application" in the App Designer, then add the template using Building Blocks

Dependencies
A full Rest API Definition with the needed operations must already exist and work

Installing
Right-click on the HTML Document Node in the Nepune App Designer and choose "Building Blocks". Navigate to AppTEMPLATE

Step-by-step bullets
- Rename all the API definitions/ Forms/ Pages etc. by expanding all elements in the tree view, select all, right-click for rename and do Find (Mapping) and Replace (Your Mapping Name) 
- Map each API definition to the relevant operation of your API designer API
- Delete any API that you are not going to use
- Search and Replace all Code for "Entity>" and replace with your Mapping Name
- Search and Replace all Code for "Mapping" and replace with your Mapping Name
- In the Table Setting on the List Page, add whichever neptune.TableSetingSorts you need, anme them and name the key for the respective fieldname

Authors
VMGLabs Cruise Developers
