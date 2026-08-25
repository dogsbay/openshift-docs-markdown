---
title: About specialized hardware and driver enablement
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# About specialized hardware and driver enablement {id="about-hardware-enablement"}
{%- set context = "about-hardware-enablement" %}

The Driver Toolkit (DTK) is a container image in the {{ product_title }} payload that you can use as a base image to build driver containers. The Driver Toolkit image contains the kernel packages and tools commonly required to build or install kernel modules, and the package versions match the kernel version running on the {{ op_system_first }} nodes in the corresponding {{ product_title }} release. {._abstract}

You can use driver containers to build and deploy out-of-tree kernel modules and drivers on container operating systems such as {{ op_system }}. These kernel modules and drivers are software libraries that run with a high level of privilege in the operating system kernel. They extend the kernel functionalities or provide the hardware-specific code required to control new devices. Examples include hardware devices such as field-programmable gate arrays (FPGA) or graphics processing units (GPU), and software-defined storage solutions, which all require kernel modules on client machines. Driver containers are the first layer of the software stack to enable these technologies on {{ product_title }} deployments.