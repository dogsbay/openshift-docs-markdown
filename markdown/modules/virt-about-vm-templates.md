{%- set _mod_docs_content_type = "CONCEPT" %}
# About VM templates {id="virt-about-vm-templates_{{ context }}"}

VM templates define a reusable VM configuration. You can create a VM from a template to deploy a standardized VM quickly. {._abstract}


Speed up creation with boot sources
:   You can speed up VM creation by using templates that have an available boot source. A template with a boot source displays the **Available boot source** label if it does not have a custom label.

    A template without a boot source displays the **Boot source required** label.


Customize before starting the VM
:   You can customize the disk source and VM parameters before you start the VM.

    :::note


    If you copy a VM template with all its labels and annotations, your version of the template is marked as deprecated when a new version of the Scheduling, Scale, and Performance (SSP) Operator is deployed. You can remove this designation. See "Removing a deprecated designation from a customized VM template by using the web console".
    
    :::



{{ sno_caps }}
:   Due to differences in storage behavior, some templates are incompatible with {{ sno }}. To ensure compatibility, do not set the `evictionStrategy` field for templates or VMs that use data volumes or storage profiles.