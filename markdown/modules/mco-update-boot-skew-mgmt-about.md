{%- set _mod_docs_content_type = "CONCEPT" %}
# About boot image skew enforcement {id="mco-update-boot-skew-mgmt-about_{{ context }}"}

Using boot image skew enforcement, you can ensure that the boot images in a cluster are up-to-date with the {{ product_title }} and {{ op_system }} version being used in the cluster. Making sure that your boot images are current can help you avoid the problems associated with running older images. {._abstract}

When boot image skew enforcement is active in a cluster, the Machine Config Operator (MCO) examines the boot image version reported in the `MachineConfiguration` object to determine if that boot image is appropriate for the cluster. If the boot image version is too old, the Operator reports that _boot image version skew_ is detected and blocks cluster updates until you manually update the boot image or disable boot image skew enforcement by setting the `None` mode, as described in this section. 

The limit for boot image version skew is set within the MCO and cannot be modified.

For information on manually configuring the boot image in your cluster, see "Manually updating the boot image".