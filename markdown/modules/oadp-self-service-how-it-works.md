{%- set _mod_docs_content_type = "CONCEPT" %}
# How {{ oadp_short }} Self-Service works {id="oadp-self-service-how-it-works_{{ context }}"}

Review how {{ oadp_short }} Self-Service processes backup requests through the `NonAdminController` (NAC) custom resource, which validates namespace administrator requests and creates corresponding `Velero` backup objects. {._abstract}

The diagram describes the following workflow:

1.  A namespace admin user creates a `NonAdminBackup` (NAB) custom resource (CR) request.
1.  The `NonAdminController` (NAC) CR receives the NAB CR request.
1.  The NAC validates the request and updates the NAB CR about the request.
1.  The NAC creates the `Velero` backup object.
1.  The NAC monitors the `Velero` backup object and cascades the status back to the NAB CR. 

**Figure 1. How {{ oadp_short }} Self-Service works**

![{{ oadp_short }} Self-Service](/_assets/images/oadp-self-service.svg)