{%- set _mod_docs_content_type = "CONCEPT" %}
# Day 1 supported use cases {id="kmm-day1-supported-use-cases_{{ context }}"}

Day 1 supported use cases define when {{ product_title }} can load out-of-tree (OOT) kernel modules before NetworkManager starts. This functionality does not support loading modules during the `initramfs` stage. {._abstract}

The following are the conditions needed for Day 1 functionality:

*   The kernel module is not loaded in the kernel.
*   The in-tree kernel module is loaded into the kernel, but can be unloaded and replaced by the OOT kernel module. This means that the in-tree module is not referenced by any other kernel modules.
*   In order for Day 1 functionlity to work, the node must have a functional network interface, that is, an in-tree kernel driver for that interface. The OOT kernel module can be a network driver that will replace the functional network driver.