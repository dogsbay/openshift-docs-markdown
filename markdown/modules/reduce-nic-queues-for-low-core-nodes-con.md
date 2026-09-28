{%- set _mod_docs_content_type = "CONCEPT" %}
# Reduce NIC queues for low-core nodes {id="reduce-nic-queues-for-low-core-nodes-con_{{ context }}"}

You can reduce the number of network interface card (NIC) queues with a performance profile so that fewer CPUs handle network interrupts. Reducing the queue count frees cores on nodes that have a small number of CPUs.