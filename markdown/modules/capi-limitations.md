{%- set _mod_docs_content_type = "REFERENCE" %}
# Cluster API limitations {id="capi-tech-preview-limitations_{{ context }}"}

Using the Cluster API to manage machines is a Technology Preview feature and has specific limitations. {._abstract}

These limitiations are listed as follows:

*   To use this feature, you must enable the `TechPreviewNoUpgrade` feature set.

    :::important

    Enabling this feature set cannot be undone and prevents minor version updates.
    
    :::

*   Only {{ aws_first }}, {{ gcp_first }}, {{ azure_first }}, {{ rh_openstack_first }}, {{ vmw_first }}, and bare-metal clusters can use the Cluster API.
*   You must manually create some of the primary resources that the Cluster API requires. 
For more information, see "Getting started with the Cluster API".
*   You cannot use the Cluster API to manage control plane machines.
*   Migration of existing compute machine sets created by the Machine API to Cluster API compute machine sets is not supported.
*   Full feature parity with the Machine API is not available.
*   For clusters that use the Cluster API, {{ oc_first }} commands prioritize Cluster API objects over Machine API objects. 
This behavior impacts any `oc` command that acts upon any object that is represented in both the Cluster API and the Machine API.

    For more information and a workaround for this issue, see "Referencing the intended objects when using the CLI" in the troubleshooting content.