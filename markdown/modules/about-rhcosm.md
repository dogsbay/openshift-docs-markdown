{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ op_system_first }} {id="about-rhcos_{{ context }}"}

Post-installation, each cluster machine uses {{ op_system_first }} as the operating system. 
{{ op_system }} is the immutable container host version of {{ op_system_base_full }} and features a {{ op_system_base }} kernel with SELinux enabled by default.  {._abstract}

{{ op_system }} includes the `kubelet`, which is the Kubernetes node agent, and the CRI-O container runtime, which is optimized for Kubernetes.

Every control plane machine in an {{ product_title }} {{ product_version }} cluster must use {{ op_system }}, which includes a critical first-boot provisioning tool called Ignition. 
This tool enables the cluster to configure the machines. 
Operating system updates are delivered as a bootable container image, using OSTree as a backend, that is deployed across the cluster by the Machine Config Operator. 
Actual operating system changes are made in-place on each machine as an atomic operation by using `rpm-ostree`. 
Together, these technologies enable {{ product_title }} to manage the operating system like it manages any other application on the cluster, by in-place upgrades that keep the entire platform up to date. 
These in-place updates can reduce the burden on operations teams.

If you use {{ op_system }} as the operating system for all cluster machines, the cluster manages all aspects of its components and machines, including the operating system. 
Because of this, only the installation program and the Machine Config Operator can change machines. 
The installation program uses Ignition config files to set the exact state of each machine, and the Machine Config Operator completes more changes to the machines, such as the application of new certificates or keys, after installation.