{%- set _mod_docs_content_type = "CONCEPT" %}

# Configuring local storage with the hostpath provisioner {id="virt-configure-hpp-storage-intro_{{ context }}"}

You can configure local storage for virtual machines by using the hostpath provisioner (HPP). {._abstract}

When you install the {{ VirtProductName }} Operator, the Hostpath Provisioner Operator is automatically installed. HPP is a local storage provisioner designed for {{ VirtProductName }} that is created by the Hostpath Provisioner Operator. To use HPP, you create an HPP custom resource (CR) with a basic storage pool.