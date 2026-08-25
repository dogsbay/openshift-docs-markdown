{%- set _mod_docs_content_type = "PROCEDURE" %}
# Converting and uploading the image to {{ oci_edge_no_rt }} {id="c3-assisted-installer-preparing-image-converting_{{ context }}"}

Convert the ISO image to an {{ oci_first_no_rt }} image and upload it to your {{ oci_edge_no_rt }} system from your OCI Home Region Object
Store. {._abstract}

**Procedure**

1.  Convert the image from ISO to {{ oci }}.
1.  Upload the {{ oci }} image to an {{ oci }} bucket, and generate a Pre-Authenticated Request (PAR) URL.
1.  Import the {{ oci }} image to the {{ oci_edge }} portal.
1.  Copy the Oracle Cloud Identifier (OCID) of the image for use in the next procedure.

    For the full procedure, see step 6 - 8 in the "OpenShift Image Preparation" section of the [Oracle documentation](https://www.oracle.com/a/otn/docs/compute_cloud_at_customer_assisted_installer.pdf?source=:em:nl:mt::::PCATP).