{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the automatic image cleanup of the container storage disk {id="ztp-image-based-upgrade-configure-threshold_{{ context }}"}

Configure the minimum threshold for available storage space through annotations. {._abstract}

**Prerequisites**

*   You have created an `ImageBasedUpgrade` CR.

**Procedure**

1.  Increase the threshold to 65% by running the following command:
    ```terminal
    $ oc -n openshift-lifecycle-agent annotate ibu upgrade image-cleanup.lca.openshift.io/disk-usage-threshold-percent='65'
    ```
1.  (Optional) Remove the threshold override by running the following command:
    ```terminal
    $ oc -n  openshift-lifecycle-agent annotate ibu upgrade image-cleanup.lca.openshift.io/disk-usage-threshold-percent-
    ```