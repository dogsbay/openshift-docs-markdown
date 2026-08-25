{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring a bond interface from two SR-IOV interfaces {id="nw-sriov-cfg-bond-interface-with-virtual-functions_{{ context }}"}

Bonding enables multiple network interfaces to be aggregated into a single logical "bonded" interface. Bond Container Network Interface (Bond-CNI) brings bond capability into containers. {._abstract}

Bond-CNI can be created by using Single Root I/O Virtualization (SR-IOV) virtual functions and placing them in the container network namespace.

{{ product_title }} only supports Bond-CNI by using SR-IOV virtual functions. The SR-IOV Network Operator provides the SR-IOV CNI plugin needed to manage the virtual functions. Other CNI plugins or types of interfaces are not supported.