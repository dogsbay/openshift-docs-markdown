{%- set _mod_docs_content_type = "PROCEDURE" %}

# Backing up the DPA configuration {id="oadp-backing-up-dpa-configuration-1-6-0_{{ context }}"}

You must back up your current `DataProtectionApplication` (DPA) configuration. {._abstract}

**Procedure**

*   Save your current DPA configuration by running the following command:
    ```terminal title="Example command"
    $ oc get dpa -n openshift-adp -o yaml > dpa.orig.backup
    ```