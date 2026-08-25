{%- set _mod_docs_content_type = "PROCEDURE" %}
# Dynamically provisioning VMware vSphere volumes using the UI {id="vsphere-dynamic-provisioning_{{ context }}"}

You can dynamically provision VMware vSphere volumes by using the {{ product_title }} web console to create persistent volume claims with the default `thin` storage class, so that your applications have on-demand access to vSphere storage without manual volume creation. {._abstract}

{{ product_title }} installs a default storage class, named `thin`, that uses the `thin` disk format for provisioning volumes.

You can use the following procedure to dynamically provision these volumes using the default storage class.

**Prerequisites**

*   An {{ product_title }} cluster installed on a VMware vSphere version that meets the requirements for the components that you use. For more information, see "Installing a cluster on vSphere".
*   Storage must exist in the underlying infrastructure before it can be mounted as a volume in {{ product_title }}.

**Procedure**

1.  In the {{ product_title }} console, click **Storage** → **Persistent Volume Claims**.
1.  In the persistent volume claims overview, click **Create Persistent Volume Claim**.
1.  Define the required options on the resulting page.
    1.  Select the `thin` storage class.
    1.  Enter a unique name for the storage claim.
    1.  Select the access mode to determine the read and write access for the created storage claim.
    1.  Define the size of the storage claim.
1.  Click **Create** to create the persistent volume claim and generate a persistent volume.