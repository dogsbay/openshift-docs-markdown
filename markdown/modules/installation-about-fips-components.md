{%- set _mod_docs_content_type = "REFERENCE" %}
# FIPS support in components that the cluster uses {id="installation-about-fips-components_{{ context }}"}

Although the {{ product_title }} cluster itself uses FIPS validated or Modules In Process modules, ensure that the systems that support your {{ product_title }} cluster use FIPS validated or Modules In Process modules for cryptography. {._abstract}


etcd

:   To ensure that the secrets that are stored in etcd use FIPS validated or Modules In Process encryption, boot the node in FIPS mode. After you install the cluster in FIPS mode, you can encrypt the etcd data by using the FIPS-approved `aes cbc` cryptographic algorithm.


Storage

:   For local storage, use {{ op_system_base }}-provided disk encryption or Container Native Storage that uses {{ op_system_base }}-provided disk encryption. By storing all data in volumes that use {{ op_system_base }}-provided disk encryption and enabling FIPS mode for your cluster, both data at rest and data in motion, or network data, are protected by FIPS validated or Modules In Process encryption. You can configure your cluster to encrypt the root filesystem of each node. For more information, see "Customizing nodes" in the _Additional resources_ section.


Runtimes

:   To ensure that containers know that they are running on a host that is using FIPS validated or Modules In Process cryptography modules, use CRI-O to manage your runtimes.