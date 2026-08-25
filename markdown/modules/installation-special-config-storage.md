{%- set _mod_docs_content_type = "CONCEPT" %}
# Boot disk encryption and mirroring during installation {id="installation-special-config-storage_{{ context }}"}

You can configure the {{ product_title }} installation to enable boot disk encryption and mirroring on the cluster nodes. {._abstract}

{{ product_title }} supports the Trusted Platform Module (TPM) v2 and Tang encryption modes.


TPM v2
:   This is the preferred mode. TPM v2 stores passphrases in a secure cryptoprocessor on the server. You can use this mode to prevent decryption of the boot disk data on a cluster node if the disk is removed from the server.


Tang
:   Tang and Clevis are server and client components that enable network-bound disk encryption (NBDE). You can bind the boot disk data on your cluster nodes to one or more Tang servers. This prevents decryption of the data unless the nodes are on a secure network where the Tang servers are accessible. Clevis is an automated decryption framework used to implement decryption on the client side.


:::important

The use of the Tang encryption mode to encrypt your disks is only supported for bare metal and vSphere installations on user-provisioned infrastructure.

:::


In earlier versions of {{ op_system_first }}, disk encryption was configured by specifying `/etc/clevis.json` in the Ignition config. The file is not supported in clusters created with {{ product_title }} 4.7 or later.

When the TPM v2 or Tang encryption modes are enabled, the {{ op_system }} boot disks are encrypted using the LUKS2 format.

Note the following points about the boot disk encryption and mirroring feature:

*   Is available for installer-provisioned infrastructure, user-provisioned infrastructure, and Assisted Installer deployments
*   For Assisted Installer deployments:
    *   Each cluster can only have a single encryption method, Tang or TPM
    *   Encryption can be enabled on some or all nodes
    *   There is no Tang threshold; all servers must be valid and operational
    *   Encryption applies to the installation disks only, not to the workload disks
*   Is supported on {{ op_system_first }} systems only
*   Sets up disk encryption during the manifest installation phase, encrypting all data written to disk, from first boot forward
*   Requires no user intervention for providing passphrases
*   Uses AES-256-XTS encryption