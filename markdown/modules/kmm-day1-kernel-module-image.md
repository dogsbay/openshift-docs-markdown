{%- set _mod_docs_content_type = "CONCEPT" %}
# The kernel module image {id="kmm-day1-kernel-module-image_{{ context }}"}

Day 1 kernel module loading in {{ product_title }} uses Driver Toolkit-based container images shared with Day 2 KMM builds. These images must contain your out-of-tree kernel modules so the Machine Config Operator can pull and load them during node boot. {._abstract}

The out-of-tree kernel module should be located under `/opt/lib/modules/${{ kernelVersion }}`.