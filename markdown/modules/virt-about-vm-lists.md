{%- set _mod_docs_content_type = "CONCEPT" %}
# Virtual machine lists and groups {id="virt-about-vm-lists_{{ context }}"}

You can find virtual machines (VMs) in your cluster from the command line or the {{ product_title }} web console. The command line suits scripts and bulk checks, and the console adds filters, saved searches, and groups. {._abstract}

The command line returns every VM in the cluster or every VM in a single namespace. The web console adds a tree view that filters the list by project or cluster, and a search bar that narrows the list by name, status, operating system, and other attributes. You can save a search in the console and run it again later.

Projects are the primary boundary between VMs. You can further subdivide a project into groups, so VMs that belong to different teams or workloads can stay separate without a project for each one. Groups in the virtual machine tree are a Technology Preview feature.