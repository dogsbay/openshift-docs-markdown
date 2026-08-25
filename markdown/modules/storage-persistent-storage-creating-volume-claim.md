{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the persistent volume claim {id="creating-volume-claim_{{ context }}"}

You can create a persistent volume claim to dynamically provision and bind storage from a pre-configured storage class, so that your applications can consume persistent storage in {{ product_title }}. {._abstract}

**Prerequisites**

*   Storage must exist in the underlying infrastructure before it can be mounted as a volume in {{ product_title }}.

**Procedure**

1.  In the {{ product_title }} web console, click **Storage** -> **Persistent Volume Claims**.
1.  In the persistent volume claims overview, click **Create Persistent Volume Claim**.
1.  Define the required options on the page that is displayed.
    1.  Select the previously-created storage class from the drop-down menu.
    1.  Enter a unique name for the storage claim.
    1.  Select the access mode. This selection determines the read and write access for the storage claim.
    1.  Define the size of the storage claim.
1.  Click **Create** to create the persistent volume claim and generate a persistent
volume.