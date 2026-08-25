{%- set _mod_docs_content_type = "REFERENCE" %}
# FileIntegrity custom resource phases {id="file-integrity-CR-phases_{{ context }}"}

The `FileIntegrity` CR reports one of the following phases during its lifecycle. {._abstract}

*   `Pending` - The phase after the custom resource (CR) is created.
*   `Active` -  The phase when the backing daemon set is up and running.
*   `Initializing` - The phase when the AIDE database is being reinitialized.