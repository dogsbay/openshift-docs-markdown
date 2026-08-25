---
title: NBDE Tang Server Operator overview
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# NBDE Tang Server Operator overview {id="nbde-tang-server-operator-overview"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "nbde-tang-server-operator-overview" %}

Network-bound Disk Encryption (NBDE) provides an automated unlocking of LUKS-encrypted volumes using one or more dedicated network-binding servers. The client side of NBDE is called the Clevis decryption policy framework and the server side is represented by Tang.

The NBDE Tang Server Operator allows the automation of deployments of one or several Tang servers in the OpenShift Container Platform (OCP) environment.